import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react' // atau plugin lain yang Anda gunakan
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  test: {
    globals: true,
    environment: 'jsdom',
  },
});