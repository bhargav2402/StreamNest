import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import dotenv from 'dotenv'

dotenv.config()

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy : {
      "/api" : "https://streamnest-3hxb.onrender.com"
    }
  },
  plugins: [react()],
})
