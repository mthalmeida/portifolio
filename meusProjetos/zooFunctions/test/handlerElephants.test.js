const handlerElephants = require('../src/handlerElephants');

/* describe('texto que aparece no INICIO do teste, pode ser qualquer coisa', () => {
  teste ou it('texto do teste em especifico, pode ser qualquer coisa', () => {
    expect(expectativa, os dados que serao inseridos).parametro de busca(dados que tem que aparecer caso de certo)
  });
*/

describe('Testes geral relacionado ao arquivo HandlerElephants.js', () => {
  test('Se caso o dado inserido seja count o retorno deve ser 4.', () => {
    expect(handlerElephants('count')).toEqual(4);
  });

  test('Se caso o dado inserido seja names o retorno deve ser Jefferson.', () => {
    expect(handlerElephants('names')).toContain('Jefferson');
  });

  test('Se caso o dado inserido seja averageAge o retorno deve ser próximo à 10.5.', () => {
    expect(handlerElephants('averageAge')).toBeCloseTo(10.5);
  });

  test('Verifica a localização como NW.', () => {
    expect(handlerElephants('location')).toBe('NW');
  });

  test('Verifica o número de popularidade igual a 5.', () => {
    expect(handlerElephants('popularity')).toEqual(5);
  });

  test('Verifica um array que não (not) contenha Monday.', () => {
    expect(handlerElephants('availability')).not.toContain('Monday');
  });

  it('Verifica se o valor esta como undefined', () => {
    expect(handlerElephants()).toBeUndefined();
  });
});
