import path from 'path';

// eslint-disable-next-line import/no-unresolved
import react from '@vitejs/plugin-react';
// eslint-disable-next-line import/no-unresolved
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'), // Adds alias support for @ pointing to src/
    },
  },
  server: {
    port: 3000, // optional: specify a port for dev server
  },
  build: {
    outDir: 'dist', // output directory for production build
  },
});
