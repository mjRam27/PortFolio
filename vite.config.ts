import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: 'https://manojpadmanabha.de/', // 👈 set this explicitly
  plugins: [react()],
});
