import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import autoprefixer from 'autoprefixer'

// https://vite.dev/config/
export default defineConfig({
  base: process.env.NODE_ENV === 'production' ? '/hbl8/' : '/',
  build: {
    outDir: 'docs',
  },
  plugins: [react()],
  css: {
    postcss: {
      plugins: [
        autoprefixer
      ],
    },
  },
})
