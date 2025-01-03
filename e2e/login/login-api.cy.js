describe('API Serverest Automação', () => {
  
  it('Deve fazer o login com sucesso', () => {
    cy.fixture('data.json').then((data) => { 
      cy.request({
        method: 'POST',
        url: 'https://serverest.dev/login', 
        headers: {
          'accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: {
          email: data.validUser.email,  
          password: data.validUser.password 
        },
      }).then((response) => {

        expect(response.status).to.eq(200); 
        expect(response.body.message).to.eq('Login realizado com sucesso'); 
        expect(response.body.authorization).to.contain('Bearer'); 

      });
    });
  });

  it('Deve falhar ao tentar login com dados incorretos', () => {
    cy.fixture('data.json').then((data) => { 
      cy.request({
        method: 'POST',
        url: 'https://serverest.dev/login',
        headers: {
          'accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: {
          email: data.invalidUser.email, 
          password: data.invalidUser.password 
        },
        failOnStatusCode: false 
      }).then((response) => {
        expect(response.status).to.eq(401); 
        expect(response.body.message).to.eq('Email e/ou senha inválidos'); 
      });
    });
  });
});
