const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://www.demoblaze.com",
    retries: {
      runMode: 2,
      openMode: 0
    }
  }
});
