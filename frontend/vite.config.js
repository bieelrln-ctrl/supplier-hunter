import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Configuração para rodar no Vercel sem dar 404
export default defineConfig({
  plugins: [react()],
  base: "/",
  build: {
    outDir: "dist",
    emptyOutDir: true
  },
  server: {
    port: 3000,
    open: true
  }
})
