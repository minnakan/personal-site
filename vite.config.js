import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [
    react({
      include: '**/*.{jsx,js}', // Process both .jsx and .js files
    }),
  ],
  build: {
    outDir: 'build', // Match CRA output directory
  },
  base: '/', // For custom domain on GitHub Pages
  server: {
    port: 3000, // Match CRA default
    open: true,
  },
  esbuild: {
    loader: 'jsx',
    include: /src\/.*\.[jt]sx?$/,
    exclude: [],
  },
  optimizeDeps: {
    esbuildOptions: {
      loader: {
        '.js': 'jsx',
      },
    },
  },
});
