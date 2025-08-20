import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');

  // Determine base path based on environment
  let base = '/';
  if (mode === 'production') {
    if (env.DEPLOY_TARGET === 'github-pages') {
      base = '/atomic-design-system/';
    } else {
      base = '/';
    }
  }

  return {
    plugins: [react()],
    base,
    server: {
      port: 3000,
      open: true,
    },
    build: {
      outDir: 'dist',
      sourcemap: true,
    },
  };
});
