//***********************************************************FEITO!
// Desafio 1
function compareTrue(girafa, elefante, macaco) {
  if (girafa === true && elefante === true) {
    return true
  } else {
    return false
  }
}
//***********************************************************FEITO!
// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2
}
//***********************************************************FEITO!
// Desafio 3
function splitSentence(stringExemplo) {
  resultado = stringExemplo.split(" ");
  return resultado
}
//***********************************************************FEITO!
// Desafio 4
function concatName(nomes) {
  let primeiro = nomes[0];
  let ultimo = nomes[nomes.length-1];
  return ultimo + ', ' + primeiro
}
//***********************************************************FEITO!
// Desafio 5
function footballPoints(wins, ties) {
  let vitorias = wins * 3
  let empates = ties * 1
  return vitorias + empates
}
//***********************************************************FEITO!
// Desafio 6
function highestCount(numeros) {
  let numeroMaior = numeros[0]
  for (let index = 0; index < numeros.length; index += 1) {
    if (numeros[index] > numeroMaior) {
      numeroMaior = numeros[index];
    }
  }
  let max = numeroMaior
  let quantidadeMaior = 0;
  for (let index = 0; index < numeros.length; index += 1) {
    if (max === numeros[index]) {
      quantidadeMaior += 1;
    }
  }
  return quantidadeMaior;
}
//***********************************************************FEITO!
// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  if (mouse >= 0 && mouse <=2 && cat1 >= 0 && cat1 <=2 && cat2 >= 0 && cat2 <=2) {
    return 'os gatos trombam e o rato foge'
  } else if (cat1 < cat2) {
    return 'cat1' 
  } else {
    return 'cat2'
  }
}
//***********************************************************FEITO!
// Desafio 8

function fizzBuzz(num) {
  let mensagem = []
  for (let index = 0; index < num.length; index +=1) {
    if (num[index] % 3 == 0 && num[index] % 5 == 0) {
    mensagem.push('fizzBuzz')
    } else if ((num[index] % 5) == 0) {
    mensagem.push('buzz')
    } else if ((num[index] % 3) == 0) {
    mensagem.push('fizz') 
    } else {
    mensagem.push('bug!')
    }
  }
 return mensagem;
}
//***********************************************************FEITO!
// Desafio 9
//FONTE: https://careerkarma.com/blog/javascript-replace/#:~:text=To%20replace%20text%20in%20a,replace%20text%20in%20a%20string.
//Muito mais facil e pratico! Ver anotação no caderno Pg3
function encode(string) {
  string = string.replace(/a/g, 1);
  string = string.replace(/e/g, 2);
  string = string.replace(/i/g, 3);
  string = string.replace(/o/g, 4);
  string = string.replace(/u/g, 5);
  return string;
  }

function decode(string) {
  string = string.replace(/1/g, 'a');
  string = string.replace(/2/g, 'e');
  string = string.replace(/3/g, 'i');
  string = string.replace(/4/g, 'o');
  string = string.replace(/5/g, 'u');
  return string;
  }
  //***********************************************************FEITO!
// Desafio 10
function techList(array, string) {
  if (array.length == 0) {
    return 'Vazio!';
  }
  let list = [];
  //colocar-em-ordem
  array = array.sort();
  for (let index = 0; index < array.length; index += 1) {
    //objeto
    let retorno = {
      tech: array[index],
      name: string,
    };
    //inserir-retorno-do-objeto
    list.push(retorno);
  }
  return list;
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
  techList,
};
