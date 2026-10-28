// @ts-check
import { defineConfig, devices } from '@playwright/test';

/**
 * @see https://playwright.dev/docs/test-configuration
 */
const config = ({
  testDir: './tests',
   testIgnore: ['**/SalesForceLogin.spec.js'],
  retries: 2,
  timeout: 40 * 1000, //default test timeout is 30 secs - 30000ms
  expect: {
    timeout: 4 * 1000, //default expect timeout is 5 secs - 5000ms
  },
  reporter: 'html',
  use: {

    browserName: 'chromium',
    headless: false,
    screenshot: 'on',//for every step the screenshot will be taken when screebshot is 'on'
    //trace: 'retain-on-failure'//trace zip file will be generated only on failure// saves the memory
    //trace: 'off' //no trace file will be generated
    trace: 'on' //every step we get the log

  }
});

module.exports = config