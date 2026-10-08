import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    projects: [
      { test: { name: 'server', dir: 'server', environment: 'node' } },
      { test: { name: 'client', dir: 'client', environment: 'jsdom' } },
    ],
  },
});
