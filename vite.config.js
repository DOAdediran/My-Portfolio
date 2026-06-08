
Same content, just a .js file instead of .ts. Edit your vite.config.js to look exactly like this:


import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/My-Portfolio/',
  plugins: [
    react({
      include: ['**/*.{js,jsx,ts,tsx}'],
    }),
  ],
})
