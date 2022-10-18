require('../mocks/fetchSimulator');
const { fetchProducts } = require('../helpers/fetchProducts');
const computadorSearch = require('../mocks/search');
const { expect } = require('@jest/globals');

describe('1 - Teste a função fetchProducts', () => {
  it('1.1 Verifica se fetchProducts é uma função', async () => {
    expect(typeof fetchProducts).toEqual('function');
  });

  it('1.2 Verifique se a função fetch foi chamada.', async () => {
    await fetchProducts('computador');
    expect(fetch).toHaveBeenCalledTimes(1);
  });

  it('1.3 Verifique endereço do endpoint do ML', async () => {
    expect(await fetchProducts('computador')).toEqual(computadorSearch);
  });

  it('1.4 Verifique a igualdade entre estruturas de objetos local e da API', async () => {
    expect(await fetchProducts('computador')).toEqual(computadorSearch);
  });

  it('Verifica se retorna erro ao executar a função sem parâmetro', async () => {
    const failRequest = await fetchProducts();

    expect(failRequest).toEqual(new Error('You must provide an url'));
  });
});

/*COBERTURA DO TESTE
----------------------|---------|----------|---------|---------|-------------------
File                  | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s 
----------------------|---------|----------|---------|---------|-------------------
All files             |   52.63 |     12.5 |      25 |   52.63 |                   
 fetchItem.js         |       0 |        0 |       0 |       0 | 1-6               
 fetchProducts.js     |     100 |       50 |     100 |     100 | 15                
 getSavedCartItems.js |       0 |        0 |       0 |       0 | 1-6               
 saveCartItems.js     |       0 |        0 |       0 |       0 | 1-6               
----------------------|---------|----------|---------|---------|-------------------*/