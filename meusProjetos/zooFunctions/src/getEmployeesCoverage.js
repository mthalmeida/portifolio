const data = require('../data/zoo_data');

const { employees, species } = data;

//  https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/Strings
//  https://app.betrybe.com/course/fundamentals/higher-order-functions-do-javascript-es6/javascript-es6-spread-operator-parametro-rest-destructuring-e-mais/4fac3053-3548-49cb-aebc-03b42825cbce/o-que-vamos-aprender/b84bc36c-3010-4f1f-9372-bc07a6a4ab4a?use_case=calendar
//  https://app.betrybe.com/course/live-lectures/sd-cohort-25-a#mentoria-tecnica-85-higher-order-functions-preparacao-projeto-zoo-functions-part-2

//  Busca os dados dos funcionarios no arquivo data
const retunFuncionario = employees.map((buscaData1) => {
  const infoFuncionario = {
    id: buscaData1.id,

    //  Correção do lint - obrigatório alterar aspas para template literal
    fullName: `${buscaData1.firstName} ${buscaData1.lastName}`,

    species: buscaData1.responsibleFor.map((id) => species
      .find((specie) => specie.id === id).name),

    locations: buscaData1.responsibleFor.map((id) => species
      .find((specie) => specie.id === id).location),
  };
  return infoFuncionario;
});

// Retorno em caso de parametros indefinidos
function getEmployeesCoverage(parametro) {
  if (parametro === undefined) return retunFuncionario;

  const validarEntrada = retunFuncionario.find((element) =>
    element.fullName.includes(Object.values(parametro))
      || element.id.includes(Object.values(parametro)));

  //  Mensagem de erro em caso de nenhum id ou nome encontrado
  if (validarEntrada === undefined) throw new Error('Informações inválidas');

  return validarEntrada;
}

module.exports = getEmployeesCoverage;
