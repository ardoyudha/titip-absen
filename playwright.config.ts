import { defineConfig, devices } from "@playwright/test";

export default defineConfig({
  timeout: 5 * 60 * 1000,
  testDir: "./tests",
  fullyParallel: true,
  forbidOnly: true,
  retries: 0,
  workers: 1,
  use: { video: "retain-on-failure" },
  projects: [
    {
      name: "chromium",
      use: { ...devices["Desktop Chrome"] },
    },
  ],
});
