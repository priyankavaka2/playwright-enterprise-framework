import { defineConfig } from '@playwright/test';
import { envConfig } from './src/config/environment';

export default defineConfig({
  testDir: './src/test',

  use: {
    baseURL: envConfig.baseUrl,
    headless: true,
    screenshot: 'only-on-failure',
    trace: 'retain-on-failure',
  },

  workers: 4,

  retries: process.env.CI ? 2 : 0,

  reporter: [['html', { open: 'never' }]],
});