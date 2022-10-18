const getOpeningHours = require('../src/getOpeningHours');

/* describe('texto que aparece no INICIO do teste, pode ser qualquer coisa', () => {
  teste ou it('texto do teste em especifico, pode ser qualquer coisa', () => {
    expect(expectativa, os dados que serao inseridos).parametro de busca(dados que tem que aparecer caso de certo)
  });
*/

// Parametro de dica informado no README, leia com atenção!!

/*
File                 | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s
---------------------|---------|----------|---------|---------|-------------------
All files            |   94.11 |    80.48 |     100 |   93.44 |
 getOpeningHours.js  |   95.45 |    80.64 |     100 |      95 | 26-28
 handlerElephants.js |   91.66 |       80 |     100 |   90.47 | 18,27
---------------------|---------|----------|---------|---------|-------------------
*/

const mensagens = {
  msgAberto: 'The zoo is open',
  msgFechado: 'The zoo is closed',
  erroTipo1: 'The day must be valid. Example: Monday',
  erroTipo2: 'The hour should represent a number',
  erroTipo3: 'The abbreviation must be \'AM\' or \'PM\'',
  erroTipo4: 'The minutes should represent a number',
};

const diasDeFuncionamento = {
  Tuesday: { open: 8, close: 6 },
  Wednesday: { open: 8, close: 6 },
  Thursday: { open: 10, close: 8 },
  Friday: { open: 10, close: 8 },
  Saturday: { open: 8, close: 10 },
  Sunday: { open: 8, close: 8 },
  Monday: { open: 0, close: 0 },
};

describe('Testes da função getOpeningHours', () => {
  test('Se caso o dia informado for segunda-feira, o retorno esperado é The zoo is closed', () => {
    expect(getOpeningHours('Monday', '09:00-AM')).toEqual(mensagens.msgFechado);
  });

  test('Se caso o dia informado for terça-feira, o retorno esperado é The zoo is open', () => {
    expect(getOpeningHours('Tuesday', '09:00-AM')).toEqual(mensagens.msgAberto);
  });

  test('Se caso o dia informado for quarta-feira, o retorno esperado é The zoo is open', () => {
    expect(getOpeningHours('Wednesday', '09:00-AM')).toEqual(mensagens.msgAberto);
  });

  test('Se caso o dia informado for quinta-feira, o retorno esperado é The zoo is closed', () => {
    expect(getOpeningHours('Thursday', '09:00-AM')).toEqual(mensagens.msgFechado);
  });

  test('Se caso o dia informado for sexta-feira, o retorno esperado é The zoo is closed', () => {
    expect(getOpeningHours('Friday', '09:00-AM')).toEqual(mensagens.msgFechado);
  });

  test('Se caso o dia informado for sábado, o retorno esperado é The zoo is open', () => {
    expect(getOpeningHours('Saturday', '09:00-AM')).toEqual(mensagens.msgAberto);
  });

  test('Se caso o dia informado for domingo, o retorno esperado é The zoo is open', () => {
    expect(getOpeningHours('Sunday', '09:00-AM')).toEqual(mensagens.msgAberto);
  });

  test('Se caso o dia informado ficar vazio, o retorno esperado é o objeto com os dias completo', () => {
    expect(getOpeningHours('')).toEqual(diasDeFuncionamento);
  });

  test('Se caso o dia informado for incompativel, o retorno esperado é The day must be valid. Example: Monday', () => {
    expect(() => getOpeningHours('Thu', '09:00-AM')).toThrowError(new Error(mensagens.erroTipo1));
  });

  test('Se caso o valor da hora informado for incompativel, o retorno esperado é The hour should represent a number', () => {
    expect(() => getOpeningHours('Thursday', 'c9:00-AM')).toThrowError(new Error(mensagens.erroTipo2));
  });

  test('Se caso o valor de AM ou PM informado for incompativel, o retorno esperado é The abbreviation must be AM or PM', () => {
    expect(() => getOpeningHours('Friday', '09:00-ZM')).toThrowError(new Error(mensagens.erroTipo3));
  });

  test('Se caso o valor do minuto informado for incompativel, o retorno esperado é The minutes should represent a number', () => {
    expect(() => getOpeningHours('Thursday', '09:c0-AM')).toThrowError(new Error(mensagens.erroTipo4));
  });
});
