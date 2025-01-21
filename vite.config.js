import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Vite configuration
export default defineConfig({
  plugins: [react()],
  server: {
    historyApiFallback: true, // 必須: React Router の設定
  },
});
