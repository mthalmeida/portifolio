const data = require('../data/zoo_data');

const { species } = data;

//  https://www.alura.com.br/artigos/high-order-functions
//  https://app.betrybe.com/course/fundamentals/higher-order-functions-do-javascript-es6/javascript-es6-higher-order-functions-foreach-find-some-every-sort/250fa96c-fc2c-408b-b8a1-3b3c97274f20/conteudos/625d2bd5-130e-4e72-9646-6b2c90b59661/arrayfind/386d7f78-50f5-45f7-94d8-1f9961cb0cc2?use_case=side_bar
//  https://www.youtube.com/watch?v=D_MExaVe95w&ab_channel=ProgramadoraBordo

//  Contagem de animais em geral criando um novo objeto utilizando reduce
const contadorModoGeral = species.reduce((acc, animal) => {
  acc[animal.name] = animal.residents.length;
  return acc;
}, {});

// Contagem de animais separados por categoria que retorna o tanho do objeto no final
const animaisAtivos = (animal) => species.reduce((soma, specie) =>
  ((specie.name === animal.specie)
    ? (specie.residents) : (soma)), 0).length;

// Contagem de animais separados por categoria que retorna o tanho do objeto no final
const animaisPorSexo = (animal) => {
  const filtroAnimais = species
    .find((specie) => specie.name === animal.specie).residents;
  const animals = filtroAnimais
    .reduce((acc, sexo) => ((sexo.sex === animal.sex) ? (acc + 1) : (acc)), 0);
  return animals;
};

function countAnimals(animal) {
// Primeira solicitação do requisito
  if (animal === undefined) {
    return contadorModoGeral;
  }

  // Segunda solicitação do requisito
  if (Object.values(animal).length === 1) {
    return animaisAtivos(animal);
  }

  // Terceira solicitação do requisito
  return animaisPorSexo(animal);
}

module.exports = countAnimals;
