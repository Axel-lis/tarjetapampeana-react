import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    chunkSizeWarningLimit: 7000, // Ajusta el límite a 1000 KB (1 MB), por ejemplo
  },
})
