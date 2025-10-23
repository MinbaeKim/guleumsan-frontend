import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      // /api로 시작하는 요청을 스프링(8080)으로 프록시
      '/api': {
        target: 'http://localhost:8080',
        changeOrigin: true,
        // 필요시
        // rewrite: (path) => path.replace(/^\/api/, '/api'),
      },
    },
  },
})
