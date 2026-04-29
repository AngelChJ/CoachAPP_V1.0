import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig(({ command }) => ({
  // Define la ruta base dinámicamente:
  // - Si Vercel está compilando la app, usa '/' (raíz)
  // - Si se compila localmente o en GitHub, usa el nombre del repo '/CoachAPP_V1.0/'
  base: process.env.VERCEL ? '/' : '/CoachAPP_V1.0/',
  plugins: [
    react(),
    tailwindcss(),
  ],
}))