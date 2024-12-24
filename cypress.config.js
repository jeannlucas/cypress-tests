const { defineConfig } = require("cypress");
require("dotenv").config();

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) { },
  },
  env: {
    EXTERNAL_API: process.env.EXTERNAL_API,
  },
});
