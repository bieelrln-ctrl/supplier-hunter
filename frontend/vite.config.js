import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist', // pasta de saída para o Vercel
  },
  server: {
    port: 3000,
  }
})
