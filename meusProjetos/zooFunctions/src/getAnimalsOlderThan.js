const data = require('../data/zoo_data');

//  https://app.betrybe.com/course/fundamentals/higher-order-functions-do-javascript-es6/javascript-es6-higher-order-functions-foreach-find-some-every-sort/250fa96c-fc2c-408b-b8a1-3b3c97274f20/conteudos/625d2bd5-130e-4e72-9646-6b2c90b59661/arrayfind/386d7f78-50f5-45f7-94d8-1f9961cb0cc2?use_case=side_bar
//  pt1.find((pt2) => pt3.pt4 condição pt5).pt6
//  https://www.w3schools.com/jsref/jsref_every.asp

const { species } = data;

function getAnimalsOlderThan(animal, age) {
  return species.find((checkSpecies) => checkSpecies.name === animal).residents
    .every((checkAge) => checkAge.age >= age);
}

module.exports = getAnimalsOlderThan;
