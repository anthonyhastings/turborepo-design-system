import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

export default defineConfig({
  build: {
    lib: {
      entry: {
        index: './src/index.ts',
        strings: './src/strings.ts',
      },
      formats: ['cjs', 'es'],
    },
    rollupOptions: {
      external: ['react', 'react-dom'],
    },
    sourcemap: true,
    target: 'es2020',
  },
  plugins: [react()],
  publicDir: false,
});
