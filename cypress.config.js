const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // Definir variáveis de ambiente
      config.env.API_URL = 'https://serverest.dev';
      return config;
    },
    supportFile: false,  // Ignorar o arquivo de suporte (caso não necessário)
    specPattern: 'cypress/e2e/**/*.cy.js',  // Ajuste conforme necessário
  },
});
