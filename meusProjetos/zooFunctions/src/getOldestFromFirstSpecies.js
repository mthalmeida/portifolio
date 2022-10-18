const data = require('../data/zoo_data');

//  https://app.betrybe.com/course/live-lectures/sd-cohort-25-a#mentoria-tecnica-84-rpg-com-higher-order-functions
//  Resultado a partir do 22min. https://app.betrybe.com/course/live-lectures/sd-cohort-24-a#academia-de-logica-preparacao-zoo-functions-parte-1

function getOldestFromFirstSpecies(id) {
  const funcionarioResponsavel = data.employees.find((buscaFuncionario) =>
    buscaFuncionario.id === id).responsibleFor[0];

  const animalComoObjeto = data.species.find((specie) =>
    specie.id === funcionarioResponsavel).residents;

  return Object.values(animalComoObjeto.sort((primeiro, segundo) =>
    primeiro.age - segundo.age)[animalComoObjeto.length - 1]);
}

module.exports = getOldestFromFirstSpecies;
