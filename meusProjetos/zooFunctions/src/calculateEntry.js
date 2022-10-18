const data = require('../data/zoo_data');

//  Separa idades de child, adult e senior do arquivo data de origem
function countEntrants(entrants) {
  const child = entrants.filter((prices) => prices.age < 18).length;
  const adult = entrants.filter((prices) => prices.age >= 18 && prices.age < 50).length;
  const senior = entrants.filter((prices) => prices.age >= 50).length;
  return { child, adult, senior };
}

//  Contabiliza os valores de cada const atribuido acima e retorna o número com a soma de todos eles.
function calculateEntry(entrants) {
  if (!entrants || Object.values(entrants).length === 0) return 0;
  const numeroVisitantes = countEntrants(entrants);

  //  Conta quantidade de criancas no arquivo data
  const numeroChild = numeroVisitantes.child * data.prices.child;

  //  Conta quantidade de criancas no arquivo data
  const numeroAdult = numeroVisitantes.adult * data.prices.adult;

  //  Conta quantidade de criancas no arquivo data
  const numeroSenior = numeroVisitantes.senior * data.prices.senior;

  // Resultado com somatoria
  return numeroChild + numeroAdult + numeroSenior;
}

module.exports = { calculateEntry, countEntrants };
