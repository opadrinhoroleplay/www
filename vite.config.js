import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// This configuration tells Vite how to handle our project
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    // This will open your browser automatically
    open: true
  }
})