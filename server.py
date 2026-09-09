import os
import uuid
import hashlib
from datetime import datetime
from typing import List

from dotenv import load_dotenv
load_dotenv()

from fastapi import FastAPI, Request, Response, HTTPException, Depends, status
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from sqlalchemy import create_engine, Column, Integer, String
from sqlalchemy.orm import declarative_base, sessionmaker, Session

# ----------------- Database Setup -----------------
# In production, set the DATABASE_URL environment variable to your PostgreSQL connection string.
DB_URL = os.getenv("DATABASE_URL", "sqlite:///./contacts.db")
if DB_URL.startswith("postgres://"):
    DB_URL = DB_URL.replace("postgres://", "postgresql+pg8000://", 1)
elif DB_URL.startswith("postgresql://") and not DB_URL.startswith("postgresql+pg8000://"):
    DB_URL = DB_URL.replace("postgresql://", "postgresql+pg8000://", 1)
connect_args = {"check_same_thread": False} if DB_URL.startswith("sqlite") else {}
engine = create_engine(DB_URL, connect_args=connect_args)
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)
Base = declarative_base()

class Contact(Base):
    __tablename__ = "contacts"
    id = Column(Integer, primary_key=True, index=True)
    first_name = Column(String, default="")
    last_name = Column(String, default="")
    email = Column(String, default="")
    company = Column(String, default="")
    service = Column(String, default="")
    message = Column(String, default="")
    submitted_at = Column(String, default="")

class AdminUser(Base):
    __tablename__ = "admin_users"
    id = Column(Integer, primary_key=True, index=True)
    username = Column(String, unique=True, index=True)
    password_hash = Column(String)
    reset_token = Column(String, nullable=True)

Base.metadata.create_all(bind=engine)

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

def hash_password(password: str) -> str:
    return hashlib.sha256(password.encode('utf-8')).hexdigest()

# Initialize default admin if none exists
with SessionLocal() as db:
    if db.query(AdminUser).count() == 0:
        default_admin = AdminUser(username="admin", password_hash=hash_password("admin123"))
        db.add(default_admin)
        db.commit()

# ----------------- FastAPI App Setup -----------------
app = FastAPI(title="Trayaksh AI API")

# Allow CORS for development and production frontend domains
FRONTEND_URL = os.getenv("FRONTEND_URL", "https://animated-frontend-iota.vercel.app")
app.add_middleware(
    CORSMiddleware,
    allow_origins=[FRONTEND_URL, "http://localhost:5173"], # In production, restrict this to your exact frontend domain
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# In-memory session store (session_token: username)
ACTIVE_SESSIONS = {}

def get_current_user(request: Request) -> str:
    token = request.cookies.get("session_token")
    if not token or token not in ACTIVE_SESSIONS:
        raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED, detail="Unauthorized")
    return ACTIVE_SESSIONS[token]

# ----------------- Pydantic Models -----------------
class ContactCreate(BaseModel):
    firstName: str = ""
    lastName: str = ""
    email: str = ""
    company: str = ""
    service: str = ""
    message: str = ""

class LoginRequest(BaseModel):
    username: str
    password: str

class ForgotPasswordRequest(BaseModel):
    username: str

class ResetPasswordRequest(BaseModel):
    token: str
    password: str

class ChangePasswordRequest(BaseModel):
    oldPassword: str
    newPassword: str

# ----------------- API Routes -----------------
@app.post("/api/contact")
def create_contact(contact: ContactCreate, db: Session = Depends(get_db)):
    db_contact = Contact(
        first_name=contact.firstName,
        last_name=contact.lastName,
        email=contact.email,
        company=contact.company,
        service=contact.service,
        message=contact.message,
        submitted_at=datetime.now().strftime("%Y-%m-%d %H:%M:%S")
    )
    db.add(db_contact)
    db.commit()
    return {"status": "success"}

@app.get("/api/contacts")
def get_contacts(db: Session = Depends(get_db), current_user: str = Depends(get_current_user)):
    contacts = db.query(Contact).order_by(Contact.submitted_at.desc()).all()
    result = []
    for c in contacts:
        result.append({
            "id": c.id,
            "firstName": c.first_name,
            "lastName": c.last_name,
            "email": c.email,
            "company": c.company,
            "service": c.service,
            "message": c.message,
            "submittedAt": c.submitted_at
        })
    return result

@app.post("/api/login")
def login(login_req: LoginRequest, response: Response, db: Session = Depends(get_db)):
    user = db.query(AdminUser).filter(AdminUser.username == login_req.username).first()
    if user and user.password_hash == hash_password(login_req.password):
        token = str(uuid.uuid4())
        ACTIVE_SESSIONS[token] = user.username
        response.set_cookie(key="session_token", value=token, httponly=True, samesite="none", secure=True, path="/")
        return {"status": "success"}
    raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED, detail="Invalid credentials")

@app.post("/api/logout")
def logout(request: Request, response: Response):
    token = request.cookies.get("session_token")
    if token and token in ACTIVE_SESSIONS:
        del ACTIVE_SESSIONS[token]
    response.delete_cookie("session_token", path="/")
    return {"status": "success"}

@app.post("/api/forgot_password")
def forgot_password(req: ForgotPasswordRequest, db: Session = Depends(get_db)):
    user = db.query(AdminUser).filter(AdminUser.username == req.username).first()
    if user:
        reset_token = str(uuid.uuid4())
        user.reset_token = reset_token
        db.commit()
        print(f"\n[{datetime.now()}] FORGOT PASSWORD REQUESTED for '{req.username}'")
        print(f"RESET LINK: {FRONTEND_URL}/reset_password.html?token={reset_token}\n")
    return {"status": "success", "message": "If the username exists, a reset link has been generated."}

@app.post("/api/reset_password")
def reset_password(req: ResetPasswordRequest, db: Session = Depends(get_db)):
    user = db.query(AdminUser).filter(AdminUser.reset_token == req.token).first()
    if user:
        user.password_hash = hash_password(req.password)
        user.reset_token = None
        db.commit()
        return {"status": "success"}
    raise HTTPException(status_code=status.HTTP_400_BAD_REQUEST, detail="Invalid or expired token")

@app.post("/api/change_password")
def change_password(req: ChangePasswordRequest, db: Session = Depends(get_db), current_user: str = Depends(get_current_user)):
    user = db.query(AdminUser).filter(AdminUser.username == current_user).first()
    if user and user.password_hash == hash_password(req.oldPassword):
        user.password_hash = hash_password(req.newPassword)
        db.commit()
        return {"status": "success"}
    raise HTTPException(status_code=status.HTTP_400_BAD_REQUEST, detail="Incorrect old password")

if __name__ == "__main__":
    import uvicorn
    # Make sure we're serving from the directory this script is in
    os.chdir(os.path.dirname(os.path.abspath(__file__)))
    PORT = int(os.environ.get("PORT", 8000))
    print(f"Starting FastAPI server on port {PORT}")
    uvicorn.run("server:app", host="0.0.0.0", port=PORT)
