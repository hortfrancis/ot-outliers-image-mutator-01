import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

// https://vite.dev/config/
export default defineConfig({
  base: '/ot-outliers-image-mutator-01/',
  plugins: [react(), tailwindcss()],
})
