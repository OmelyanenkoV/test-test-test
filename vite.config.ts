import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import postcssRTL from 'postcss-rtlcss'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    postcss: {
      plugins: [ postcssRTL() ]
    }
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, './src')
    }
  }
})
