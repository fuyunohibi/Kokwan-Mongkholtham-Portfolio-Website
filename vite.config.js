import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/Kokwan-Mongkholtham-Portfolio-Website/',
  plugins: [react()],
  assetsInclude: ['**/*.mov', '**/*.mp4'], 
})
