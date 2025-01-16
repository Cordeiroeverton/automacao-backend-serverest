class ProdutoService {
    static obterProdutoPorId(id) {
      return cy.request({
        method: 'GET',
        url: 'https://serverest.dev/produtos',
        qs: { _id: id },
        headers: {
          'accept': 'application/json',
        },
        failOnStatusCode: false,
      });
    }
  }
  export default new ProdutoService();