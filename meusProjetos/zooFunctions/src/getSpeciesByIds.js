const data = require('../data/zoo_data');

//  https://app.betrybe.com/course/fundamentals/higher-order-functions-do-javascript-es6/javascript-es6-higher-order-functions-map-e-filter/eb53fd32-be11-4a70-a925-c29e1d7f8925/conteudos/0c62c4ed-16ae-4385-b41c-9a99660a168e/arrayfilter/63f053fa-9e27-4e51-8047-477cd4fbe279?use_case=side_bar

const { species } = data;

function getSpeciesByIds(...ids) {
  if (ids === undefined) return [];
  return species.filter((specie) => (ids.includes(specie.id)));
}

console.log(getSpeciesByIds());

module.exports = getSpeciesByIds;
