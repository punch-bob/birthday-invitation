import react from '@vitejs/plugin-react';
import { defineConfig, loadEnv } from 'vite';
import svgr from 'vite-plugin-svgr';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig((data) => ({
  plugins: [react(), tsconfigPaths(), svgr({ include: '**/*.svg?react' })],
  define: {
    'process.env': {
      NODE_ENV: JSON.stringify(process.env.NODE_ENV),
      ...loadEnv(data.mode, process.cwd()),
    },
  },
  server: {
    port: 9090,
  },
}));
