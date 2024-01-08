import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // server: {
  //   port: 5173,
  //   proxy: {
  //     'api': {
  //       target: 'http://localhost:3000',
  //       changeOrigin: true,
  //       rewrite: (path) => path.replace(/^\/api/, '') // 不可以省略rewrite
  //     }
  //   }
  // }
  build:{
    rollupOptions:{
        external: ['BMap'],
        plugins: [
            externalGlobals({
                BMap: 'BMap',
            }),
        ],
    }
  }
})
