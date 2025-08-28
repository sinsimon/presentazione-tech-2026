import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@components': path.resolve(__dirname, 'src/components'),
      '@slides': path.resolve(__dirname, 'src/slides'),
      '@presentations': path.resolve(__dirname, 'src/presentations'),
    },
  },
  server: {
    open: '/index.html'
  }
})


