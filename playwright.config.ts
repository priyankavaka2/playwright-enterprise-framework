import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './src/test',

 use: {
  channel: 'chrome',
  headless: !!process.env.CI,
  baseURL: 'https://www.saucedemo.com',
  screenshot: 'only-on-failure',
  trace: 'on',
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