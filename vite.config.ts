import path from 'path';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      '@icons': path.resolve(__dirname, 'src', 'components', 'icons'),
      '@pages': path.resolve(__dirname, 'src', 'components', 'pages'),
      '@shared': path.resolve(__dirname, 'src', 'components', 'shared'),
      '@utils': path.resolve(__dirname, 'src', 'utils'),
    },
  },
  server: {
    port: 3000,
  },
  build: {
    outDir: 'dist',
  },
});
