/// <reference types="vitest" />
/// <reference types="vite/client" />

import dns from 'dns'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from 'vite-plugin-svgr'

// Disable reordering of DNS-resolved addresses
// to print `localhost` and not `127.0.0.1`
dns.setDefaultResultOrder('verbatim')

export default defineConfig({
  plugins: [react(), svgr()],
  server: {
    port: 3000,
  },
  preview: {
    port: 3000,
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/vitest.ts',
  },
})
