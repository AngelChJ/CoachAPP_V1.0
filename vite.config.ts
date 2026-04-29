import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig(({ command }) => ({
  // Define la ruta base dinámicamente:
  // - Si estamos en desarrollo local (npm run dev), usa '/'
  // - Si Vercel está compilando la app, usa '/'
  // - Para producción (GitHub Pages), usa el nombre del repo '/CoachAPP_V1.0/'
  base: command === 'serve' || process.env.VERCEL ? '/' : '/CoachAPP_V1.0/',
  plugins: [
    react(),
    tailwindcss(),
  ],
}))