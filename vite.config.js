import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// For a user site (<username>.github.io) the base is "/".
// For a project site (<username>.github.io/<repo>/) change base to "/<repo>/".
export default defineConfig({
  plugins: [react()],
  base: '/',
})
