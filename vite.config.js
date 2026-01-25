import { defineConfig, loadEnv } from 'vite';

export default defineConfig(({ mode }) => ({
  define: {
    WEBCONTAINER_STARTER_ENV: JSON.stringify(loadEnv(mode, process.cwd(), 'WEBCONTAINER_'))
  },
  server: {
    headers: {
      'Cross-Origin-Embedder-Policy': 'credentialless',
      'Cross-Origin-Opener-Policy': 'same-origin',
    },
  },
}));
