import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000, 
    proxy: { 
      // Proxy settings to bypass CORS restrictions for API calls
      '/api': {
        target: 'https://content.guardianapis.com',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
      '/newsApi': {
        target: 'https://newsapi.org/v2',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/newsApi/, ''),
      },
    },
  },
})
