class LoginService {

    login(email, password) {
      return cy.request({
        method: 'POST',
        url: Cypress.env('API_URL') + '/login', 
        headers: {
          'accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: { email, password },
      });
    }
  
    loginFail(email, password) {
      return cy.request({
        method: 'POST',
        url: Cypress.env('API_URL') + '/login', 
        headers: {
          'accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: { email, password },
        failOnStatusCode: false, 
      });
    }
  }
  
  export default new LoginService();
  