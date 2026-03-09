import { defineConfig } from 'vite';
import path from 'path';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [
    react(),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'), // convenient alias
    },
  },
  assetsInclude: ['**/*.svg', '**/*.csv'], // support importing SVGs and CSVs
  build: {
    outDir: 'dist',       // Vite build output folder
    emptyOutDir: true,    // Clears old files on build
    rollupOptions: {
      output: {
        // Vite handles chunking automatically
      },
    },
  },
  server: {
    port: 5173,            // optional: dev server port
    open: true,            // auto-open browser
  },
  base: '/',               // ensure all paths work on Vercel
});