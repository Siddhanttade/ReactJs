import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  server: {
    proxy: {
      '/api': 'http://localhost:3000' // Proxy API requests to the backend server
      //the server will think that server is running on port 5500
    }
  },
  plugins: [react()],
})
