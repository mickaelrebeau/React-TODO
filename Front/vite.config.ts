/// <reference types="vitest" />

import path from "path"
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: [path.resolve(__dirname, "test/setup.ts")],
    env: {
        IS_REACT_ACT_ENVIRONMENT: 'true',
    },
    include: ['__tests__/**/*.[jt]s?(x)'],
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "."),
    },
  },
  server: {
    port: 8000
  }
})
