import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/YsWeb/',
  server: {
    port: 5174,
  },
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
  },
})
