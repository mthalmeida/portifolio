const localStorageSimulator = require('../mocks/localStorageSimulator');
const getSavedCartItems = require('../helpers/getSavedCartItems');

localStorageSimulator('getItem');

describe('7 - Teste a função getSavedCartItems', () => {
  getSavedCartItems('computador');

  it('7.1 Confirme se saveCartItems chama o método localStorage.setItem', async () => {
    expect(localStorage.getItem).toBeCalled();
  });

  it('7.2 Confirme se saveCartItems chama o método localStorage.setItem com um parâmetros', async () => {
    expect(localStorage.getItem).toBeCalledWith('cartItem');
  });
});

/*COBERTURA DO TESTE
File                  | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s 
----------------------|---------|----------|---------|---------|-------------------
All files             |     100 |       50 |     100 |     100 |                   
 fetchItem.js         |     100 |       50 |     100 |     100 | 5                 
 fetchProducts.js     |     100 |       50 |     100 |     100 | 16                
 getSavedCartItems.js |     100 |       50 |     100 |     100 | 5                 
 saveCartItems.js     |     100 |       50 |     100 |     100 | 5                 
----------------------|---------|----------|---------|---------|-------------------*/
