import loginService from '../../service/loginService';  

describe('API Serverest Automação', () => {
  it('Deve fazer o login com sucesso', () => {
    cy.fixture('data.json').then((data) => {  
      loginService.login(data.validUser.email, data.validUser.password) 
        .then((response) => {
          expect(response.status).to.eq(200); 
          expect(response.body.message).to.eq('Login realizado com sucesso'); 
          expect(response.body.authorization).to.contain('Bearer'); 
        });
    });
  });

  it('Deve falhar ao tentar login com dados incorretos', () => {
    cy.fixture('data.json').then((data) => {  
      loginService.loginFail(data.invalidUser.email, data.invalidUser.password) 
        .then((response) => {
          expect(response.status).to.eq(401); 
          expect(response.body.message).to.eq('Email e/ou senha inválidos'); 
        });
    });
  });
});
