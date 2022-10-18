const data = require('../data/zoo_data');

//  https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Error
//  https://codepen.io/pen/?template=abZoOZz
//  https://app.betrybe.com/course/fundamentals/higher-order-functions-do-javascript-es6/javascript-es6-higher-order-functions-foreach-find-some-every-sort/250fa96c-fc2c-408b-b8a1-3b3c97274f20/conteudos/625d2bd5-130e-4e72-9646-6b2c90b59661/arraysome-e-arrayevery/24317d95-8c21-46eb-bf4e-12c6e0d04648?use_case=side_bar

//  Retornar true ou false
function isManager(id) {
  return data.employees.some((ids) => ids.managers.includes(id));
}

//  VIA - Valor, Indice e Array
//  Retornar mensagem com primeiro e segundo nome dependendo do retorno anterior

function getRelatedEmployees(managerId) {
  if (!isManager(managerId)) {
    throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
  }

  return data.employees.reduce((primeiro, nome) => {
    if (nome.managers.includes(managerId)) {
      primeiro.push(`${nome.firstName} ${nome.lastName}`);
    }
    return primeiro;
  }, []);
}

module.exports = { isManager, getRelatedEmployees };
