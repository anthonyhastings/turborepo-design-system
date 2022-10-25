import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    lib: {
      entry: './src/index.ts',
      formats: ['cjs', 'es'],
    },
    rollupOptions: {
      external: ['react'],
    },
    sourcemap: true,
    target: 'es2019',
  },
  publicDir: false,
});
