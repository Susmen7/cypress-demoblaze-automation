const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://www.demoblaze.com",
    viewportWidth: 1280,
    viewportHeight: 720,

    // RETRIES – stabilné pre CI
    retries: {
      runMode: 2,   // CI
      openMode: 0   // lokálne
    }
  },
});
