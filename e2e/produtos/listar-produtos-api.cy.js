describe('API Serverest - Testes de Produtos', () => {
  
  it('Deve retornar o produto com o ID 10', () => {
    cy.request({
      method: 'GET',
      url: 'https://serverest.dev/produtos', 
      qs: { _id: 10 }, 
      headers: {
        'accept': 'application/json', 
      },
      failOnStatusCode: false, 
    }).then((response) => {
     
      expect(response.status).to.eq(200); 

      if (response.body.quantidade > 0) {
        expect(response.body.produtos[0]).to.have.property('_id', 10); 
      } else {
        cy.log('Produto com o ID 10 não encontrado.');
      }
    });
  });
  
    it('Deve retornar uma resposta vazia para um ID de produto inexistente', () => {
        cy.request({
          method: 'GET',
          url: 'https://serverest.dev/produtos',
          qs: { _id: 23562 }, 
          headers: {
            'accept': 'application/json',
          },
          failOnStatusCode: false 
        }).then((response) => {
          expect(response.status).to.eq(200); 
          expect(response.body.produtos).to.be.an('array').that.is.empty; 

        });
      });

    it('Deve validar a estrutura da resposta ao buscar o produto com ID 10', () => {
      cy.request({
        method: 'GET',
        url: 'https://serverest.dev/produtos',
        qs: { _id: 1 },
        headers: {
          'accept': 'application/json',
        },
        failOnStatusCode: false, 
      }).then((response) => {
        expect(response.status).to.eq(200);

        if (response.body.quantidade > 0) {
          expect(response.body.produtos).to.be.an('array');
          expect(response.body.produtos[0]).to.have.property('_id'); 
          expect(response.body.produtos[0]).to.have.property('nome'); 
          expect(response.body.produtos[0]).to.have.property('preco'); 
          expect(response.body.produtos[0]).to.have.property('descricao'); 
        } else {
          cy.log('Produto com o ID 10 não encontrado, estrutura não validada.');
          expect(response.body.quantidade).to.eq(0); 
        }
      });
    });  
  });
