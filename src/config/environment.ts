import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './src/test',

  use: {
    channel: 'chrome',
    headless: false,
    baseURL: 'https://www.saucedemo.com',
    screenshot: 'only-on-failure',
    trace: 'on',
    testIdAttribute: 'data-test',
  },

  projects: [
    {
      name: 'chrome',
      use: {
        ...devices['Desktop Chrome'],
        channel: 'chrome',
      },
    },
  ],
});