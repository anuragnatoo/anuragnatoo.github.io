import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  base: '/anuragnatoo.github.io/',
  plugins: [vue()],
  resolve: {
    alias: {
      '@': '/src'
    }
  },
  optimizeDeps: {
    include: ['vue', 'vue-router']  // Make sure Vue and Vue Router are included for pre-bundling
  }
})
