const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://www.demoblaze.com",
    viewportWidth: 1280,
    viewportHeight: 720,
    retries: 1,
  },
});
