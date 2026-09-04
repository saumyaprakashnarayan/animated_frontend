import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: './index.html',
        admin: './admin.html',
        login: './login.html',
        reset: './reset_password.html'
      }
    }
  },
  server: {
    proxy: {
      '/api': 'http://localhost:8000' // Proxy API requests to FastAPI during dev
    }
  }
})
