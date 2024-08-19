import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import dotenv from 'dotenv'

dotenv.config()

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy : "https://streamnest-3hxb.onrender.com/api"
  },
  plugins: [react()],
})
