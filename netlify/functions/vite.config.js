import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      manifest: {
        name: 'The Ordinary Path',
        short_name: 'Dhamma',
        theme_color: '#b8860b',
        background_color: '#fdf6e3',
        display: 'standalone',
        icons: [
          { src: '/icon.png', sizes: '192x192', type: 'image/png' }
        ]
      }
    })
  ]
})
