import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    headers: {
      // Ensure no incorrect MIME type is set globally
    },
  },
  resolve: {
    alias: {
      // Optional: Add aliases for cleaner imports
    },
  },
});