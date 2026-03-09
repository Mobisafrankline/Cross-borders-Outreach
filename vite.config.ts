import { defineConfig } from 'vite'
import path from 'path'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  assetsInclude: ['**/*.svg', '**/*.csv'],

  // ===== Add this build section =====
  build: {
    outDir: 'dist',       // Vite build output folder
    emptyOutDir: true,    // Clears old files on new build
    rollupOptions: {
      output: {
        manualChunks: undefined, // optional: let Vite split chunks automatically
      },
    },
  },
})
