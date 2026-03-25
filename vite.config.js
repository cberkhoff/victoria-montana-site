import { defineConfig } from 'vite'

export default defineConfig({
  base: '/',
  build: {
    outDir: 'dist',
  },
  server: {
    watch: {
      // Use polling for mounted/network drives (avoids EMFILE on /mnt/*)
      usePolling: true,
      interval: 300,
    },
  },
})
