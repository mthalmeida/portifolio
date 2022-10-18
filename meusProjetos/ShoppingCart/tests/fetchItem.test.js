require('../mocks/fetchSimulator');
const { fetchItem } = require('../helpers/fetchItem');
const item = require('../mocks/item');
const { expect } = require('@jest/globals');

describe('2 - Teste a função fetchItem', () => {
  describe('1 - Teste a função fetchItem', () => {
    it('2.1 Verifica se fetchItem é uma função', async () => {
      expect(typeof fetchItem).toEqual('function');
    });

    it('2.2 Verifique se a função fetch foi chamada.', async () => {
      await fetchItem('MLB1615760527');
      expect(fetch).toHaveBeenCalledTimes(1);
    });

    it('2.3 Verifique endereço do endpoint do ML', async () => {
      expect(await fetchItem('MLB1615760527')).toEqual(item);
    });

    it('2.4 Verifique a igualdade entre estruturas de objetos local e da API', async () => {
      expect(await fetchItem('MLB1615760527')).toEqual(item);
    });

    it('2.5 Verifique se retorna erro ao executar a função sem parâmetro', async () => {
      const failRequest = await fetchItem();
  
      expect(failRequest).toEqual(new Error('You must provide an url'));
    });
  });
});

/*COBERTURA DO TESTE
----------------------|---------|----------|---------|---------|-------------------
File                  | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s 
----------------------|---------|----------|---------|---------|-------------------
All files             |   68.42 |       25 |      50 |   68.42 |                   
 fetchItem.js         |     100 |       50 |     100 |     100 | 5                 
 fetchProducts.js     |     100 |       50 |     100 |     100 | 15                
 getSavedCartItems.js |       0 |        0 |       0 |       0 | 1-6               
 saveCartItems.js     |       0 |        0 |       0 |       0 | 1-6               
----------------------|---------|----------|---------|---------|-------------------*/
