import { defineConfig } from 'cypress'

export default defineConfig({
  e2e: {
    baseUrl: "https://testingwithclarity.com/ClarityTestPage",
    // Configure your E2E tests here
    specPattern: "cypress/e2e/**/*.{cy,spec}.{js,ts}",



  },

})