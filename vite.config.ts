import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig(({ command }) => ({
  // Define la ruta base dinámicamente para evitar que se rompa en otros hostings:
  // - Usa '/charly_web/' si se compila en GitHub Actions (para GitHub Pages)
  // - Usa '/' si se compila en Vercel, Netlify o en desarrollo local
  base: command === 'build' && process.env.GITHUB_ACTIONS ? '/charly_web/' : '/',
  plugins: [
    react(),
    tailwindcss(),
  ],
}))