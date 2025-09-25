import type { PlaywrightTestConfig } from '@playwright/test';

const config: PlaywrightTestConfig = {
  webServer: {
    command: 'npm run dev -- --port 5001',
    url: 'http://localhost:5001',
    timeout: 60_000,
    reuseExistingServer: true,
  },
  testDir: './tests',
};

export default config;
