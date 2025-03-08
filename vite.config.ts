import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: 'https://monkeyotbz.github.io/SPACE-HEALTH-/', 
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
