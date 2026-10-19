const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: '6d8j37',
  e2e: {
    experimentalStudio: true,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
