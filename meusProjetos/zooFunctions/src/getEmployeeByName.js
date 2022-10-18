const data = require('../data/zoo_data');

//  https://app.betrybe.com/course/fundamentals/higher-order-functions-do-javascript-es6/javascript-es6-higher-order-functions-reduce/11a217d9-4e2a-4102-8d89-7c4460daa739/o-que-vamos-aprender/bbd0b8ee-11ac-4fd8-ade5-f47ba8df97a1?use_case=calendar
//  VIA - Valor, Indice e Array

const { employees } = data;

function getEmployeeByName(employeeName) {
  return employees.reduce((primeiro, nome) => {
    if (nome.firstName === employeeName
      || nome.lastName === employeeName) return nome;
    return primeiro;
  }, {});
}

module.exports = getEmployeeByName;
