import http.server
import socketserver
import json
import sqlite3
import os
import uuid
import hashlib
from datetime import datetime
from urllib.parse import urlparse, parse_qs
import http.cookies

DB_NAME = 'contacts.db'

# In-memory session store
# session_token: username
ACTIVE_SESSIONS = {}

def hash_password(password):
    return hashlib.sha256(password.encode('utf-8')).hexdigest()

def init_db():
    conn = sqlite3.connect(DB_NAME)
    c = conn.cursor()
    c.execute('''
        CREATE TABLE IF NOT EXISTS contacts (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            first_name TEXT,
            last_name TEXT,
            email TEXT,
            company TEXT,
            service TEXT,
            message TEXT,
            submitted_at TEXT
        )
    ''')
    
    c.execute('''
        CREATE TABLE IF NOT EXISTS admin_users (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            username TEXT UNIQUE,
            password_hash TEXT,
            reset_token TEXT
        )
    ''')
    
    # Insert default admin if no users exist
    c.execute('SELECT COUNT(*) FROM admin_users')
    if c.fetchone()[0] == 0:
        c.execute('INSERT INTO admin_users (username, password_hash) VALUES (?, ?)', 
                  ('admin', hash_password('admin123')))
                  
    conn.commit()
    conn.close()

class CustomHandler(http.server.SimpleHTTPRequestHandler):
    
    def check_auth(self):
        cookie_header = self.headers.get('Cookie')
        if not cookie_header:
            return False
            
        cookies = http.cookies.SimpleCookie(cookie_header)
        if 'session_token' in cookies:
            token = cookies['session_token'].value
            return token in ACTIVE_SESSIONS
        return False
        
    def send_json(self, status, data, cookies=None):
        self.send_response(status)
        self.send_header('Content-type', 'application/json')
        if cookies:
            for cookie in cookies:
                self.send_header('Set-Cookie', cookie)
        self.end_headers()
        self.wfile.write(json.dumps(data).encode('utf-8'))

    def do_POST(self):
        parsed_path = urlparse(self.path)
        content_length = int(self.headers.get('Content-Length', 0))
        post_data = self.rfile.read(content_length)
        
        if parsed_path.path == '/api/contact':
            try:
                data = json.loads(post_data.decode('utf-8'))
                conn = sqlite3.connect(DB_NAME)
                c = conn.cursor()
                c.execute('''
                    INSERT INTO contacts (first_name, last_name, email, company, service, message, submitted_at)
                    VALUES (?, ?, ?, ?, ?, ?, ?)
                ''', (
                    data.get('firstName', ''),
                    data.get('lastName', ''),
                    data.get('email', ''),
                    data.get('company', ''),
                    data.get('service', ''),
                    data.get('message', ''),
                    datetime.now().strftime("%Y-%m-%d %H:%M:%S")
                ))
                conn.commit()
                conn.close()
                self.send_json(200, {"status": "success"})
            except Exception as e:
                self.send_json(500, {"status": "error", "message": str(e)})
                
        elif parsed_path.path == '/api/login':
            try:
                data = json.loads(post_data.decode('utf-8'))
                username = data.get('username')
                password = data.get('password')
                
                conn = sqlite3.connect(DB_NAME)
                c = conn.cursor()
                c.execute('SELECT password_hash FROM admin_users WHERE username = ?', (username,))
                row = c.fetchone()
                conn.close()
                
                if row and row[0] == hash_password(password):
                    token = str(uuid.uuid4())
                    ACTIVE_SESSIONS[token] = username
                    cookie = http.cookies.SimpleCookie()
                    cookie['session_token'] = token
                    cookie['session_token']['path'] = '/'
                    cookie['session_token']['httponly'] = True
                    # In a real app we'd set secure=True if using HTTPS
                    self.send_json(200, {"status": "success"}, [cookie.output(header='', sep='').strip()])
                else:
                    self.send_json(401, {"status": "error", "message": "Invalid credentials"})
            except Exception as e:
                self.send_json(500, {"status": "error", "message": str(e)})

        elif parsed_path.path == '/api/logout':
            cookie_header = self.headers.get('Cookie')
            if cookie_header:
                cookies = http.cookies.SimpleCookie(cookie_header)
                if 'session_token' in cookies:
                    token = cookies['session_token'].value
                    if token in ACTIVE_SESSIONS:
                        del ACTIVE_SESSIONS[token]
            
            cookie = http.cookies.SimpleCookie()
            cookie['session_token'] = ''
            cookie['session_token']['expires'] = 'Thu, 01 Jan 1970 00:00:00 GMT'
            cookie['session_token']['path'] = '/'
            self.send_json(200, {"status": "success"}, [cookie.output(header='', sep='').strip()])
            
        elif parsed_path.path == '/api/forgot_password':
            try:
                data = json.loads(post_data.decode('utf-8'))
                username = data.get('username')
                
                conn = sqlite3.connect(DB_NAME)
                c = conn.cursor()
                c.execute('SELECT id FROM admin_users WHERE username = ?', (username,))
                row = c.fetchone()
                
                if row:
                    reset_token = str(uuid.uuid4())
                    c.execute('UPDATE admin_users SET reset_token = ? WHERE username = ?', (reset_token, username))
                    conn.commit()
                    print(f"\n[{datetime.now()}] FORGOT PASSWORD REQUESTED for '{username}'")
                    print(f"RESET LINK: http://localhost:8000/reset_password.html?token={reset_token}\n")
                
                conn.close()
                # Always return success to prevent username enumeration
                self.send_json(200, {"status": "success", "message": "If the username exists, a reset link has been generated in the server console."})
            except Exception as e:
                self.send_json(500, {"status": "error", "message": str(e)})

        elif parsed_path.path == '/api/reset_password':
            try:
                data = json.loads(post_data.decode('utf-8'))
                token = data.get('token')
                new_password = data.get('password')
                
                if not token or not new_password:
                    self.send_json(400, {"status": "error", "message": "Missing token or password"})
                    return
                    
                conn = sqlite3.connect(DB_NAME)
                c = conn.cursor()
                c.execute('SELECT username FROM admin_users WHERE reset_token = ?', (token,))
                row = c.fetchone()
                
                if row:
                    username = row[0]
                    c.execute('UPDATE admin_users SET password_hash = ?, reset_token = NULL WHERE username = ?', 
                             (hash_password(new_password), username))
                    conn.commit()
                    self.send_json(200, {"status": "success"})
                else:
                    self.send_json(400, {"status": "error", "message": "Invalid or expired token"})
                conn.close()
            except Exception as e:
                self.send_json(500, {"status": "error", "message": str(e)})
                
        elif parsed_path.path == '/api/change_password':
            if not self.check_auth():
                self.send_json(401, {"status": "error", "message": "Unauthorized"})
                return
                
            try:
                data = json.loads(post_data.decode('utf-8'))
                old_password = data.get('oldPassword')
                new_password = data.get('newPassword')
                
                # Get username from session
                cookies = http.cookies.SimpleCookie(self.headers.get('Cookie'))
                token = cookies['session_token'].value
                username = ACTIVE_SESSIONS[token]
                
                conn = sqlite3.connect(DB_NAME)
                c = conn.cursor()
                c.execute('SELECT password_hash FROM admin_users WHERE username = ?', (username,))
                row = c.fetchone()
                
                if row and row[0] == hash_password(old_password):
                    c.execute('UPDATE admin_users SET password_hash = ? WHERE username = ?', 
                             (hash_password(new_password), username))
                    conn.commit()
                    self.send_json(200, {"status": "success"})
                else:
                    self.send_json(400, {"status": "error", "message": "Incorrect old password"})
                conn.close()
            except Exception as e:
                self.send_json(500, {"status": "error", "message": str(e)})
        else:
            self.send_response(404)
            self.end_headers()
            
    def do_GET(self):
        parsed_path = urlparse(self.path)
        
        # Protected API
        if parsed_path.path == '/api/contacts':
            if not self.check_auth():
                self.send_json(401, {"status": "error", "message": "Unauthorized"})
                return
                
            try:
                conn = sqlite3.connect(DB_NAME)
                c = conn.cursor()
                c.execute('SELECT * FROM contacts ORDER BY submitted_at DESC')
                rows = c.fetchall()
                conn.close()
                
                contacts = []
                for row in rows:
                    contacts.append({
                        "id": row[0],
                        "firstName": row[1],
                        "lastName": row[2],
                        "email": row[3],
                        "company": row[4],
                        "service": row[5],
                        "message": row[6],
                        "submittedAt": row[7]
                    })
                    
                self.send_json(200, contacts)
            except Exception as e:
                self.send_json(500, {"status": "error", "message": str(e)})
            return
            
        # Protected Page
        if parsed_path.path == '/admin.html':
            if not self.check_auth():
                self.send_response(302)
                self.send_header('Location', '/login.html')
                self.end_headers()
                return
                
        # Serve static files as usual
        super().do_GET()

if __name__ == '__main__':
    # Make sure we're serving from the directory this script is in
    os.chdir(os.path.dirname(os.path.abspath(__file__)))
    
    init_db()
    
    PORT = 8000
    socketserver.TCPServer.allow_reuse_address = True
    
    with socketserver.TCPServer(("", PORT), CustomHandler) as httpd:
        print(f"Backend Server running at http://localhost:{PORT}")
        print("Serving static files and API endpoints...")
        try:
            httpd.serve_forever()
        except KeyboardInterrupt:
            print("\nShutting down server.")
