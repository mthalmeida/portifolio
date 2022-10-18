const localStorageSimulator = require('../mocks/localStorageSimulator');
const saveCartItems = require('../helpers/saveCartItems');
const { expect } = require('@jest/globals');

localStorageSimulator('setItem');

describe('6 - Teste a função saveCartItems', () => {
  saveCartItems('computador');

  it('6.1 Confirme se saveCartItems chama o método localStorage.setItem', async () => {
    expect(localStorage.setItem).toBeCalled();
  });

  it('6.2 Confirme se saveCartItems chama o método localStorage.setItem com dois parâmetros ', async () => {
    expect(localStorage.setItem).toBeCalledWith('cartItem', saveCartItems);
  });
})

/*COBERTURA DO TESTE
----------------------|---------|----------|---------|---------|-------------------
File                  | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s 
----------------------|---------|----------|---------|---------|-------------------
All files             |   85.71 |     37.5 |      80 |      85 |                   
 fetchItem.js         |     100 |       50 |     100 |     100 | 5                 
 fetchProducts.js     |     100 |       50 |     100 |     100 | 16                
 getSavedCartItems.js |       0 |        0 |       0 |       0 | 1-6               
 saveCartItems.js     |     100 |       50 |     100 |     100 | 5                 
----------------------|---------|----------|---------|---------|-------------------*/
