import { ProdutoService } from '../../service/produtoService';

describe('API Serverest - Testes de Produtos', () => {

  it('Deve retornar o produto com o ID 10', () => {
    ProdutoService.obterProdutoPorId(10).then((resposta) => {
      expect(resposta.status).to.eq(200);

      if (resposta.body.quantidade > 0) {
        expect(resposta.body.produtos[0]).to.have.property('_id', 10);
      } else {
        cy.log('Produto com o ID 10 não encontrado.');
      }
    });
  });

  it('Deve retornar uma resposta vazia para um ID de produto inexistente', () => {
    ProdutoService.obterProdutoPorId(23562).then((resposta) => {
      expect(resposta.status).to.eq(200);
      expect(resposta.body.produtos).to.be.an('array').that.is.empty;
    });
  });

  it('Deve validar a estrutura da resposta ao buscar o produto com ID 10', () => {
    ProdutoService.obterProdutoPorId(1).then((resposta) => {
      expect(resposta.status).to.eq(200);

      if (resposta.body.quantidade > 0) {
        expect(resposta.body.produtos).to.be.an('array');
        expect(resposta.body.produtos[0]).to.have.property('_id');
        expect(resposta.body.produtos[0]).to.have.property('nome');
        expect(resposta.body.produtos[0]).to.have.property('preco');
        expect(resposta.body.produtos[0]).to.have.property('descricao');
      } else {
        cy.log('Produto com o ID 10 não encontrado, estrutura não validada.');
        expect(resposta.body.quantidade).to.eq(0);
      }
    });
  });
});
