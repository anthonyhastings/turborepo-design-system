import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  build: {
    lib: {
      entry: './src/index.tsx',
      formats: ['cjs', 'es'],
    },
    rollupOptions: {
      external: ['react'],
    },
    sourcemap: true,
    target: 'es2019',
  },
  plugins: [react()],
  publicDir: false,
});
