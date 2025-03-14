import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/abogadoJuanPedroNegri/', // Debe coincidir EXACTAMENTE con el nombre de tu repositorio
})
