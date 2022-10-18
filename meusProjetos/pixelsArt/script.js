//  Iniciar com preto selecionado
function startWithPattern() {
  const chamaElemento = document.querySelector('.color');
  chamaElemento.classList.add('selected');
}

//  Cria paleta - feito novamente no bendito exercicio 6
const paletaDeCores = document.querySelector('#color-palette');
const cores = ['black', 'red', 'blue', 'pink', 'cor5', 'cor6', 'cor7', 'cor8', 'cor9', 'cor10'];
function paletteNew() {
  for (let index = 0; index < 10; index += 1) {
    const cor = document.createElement('div');
    cor.className = 'color';
    cor.id = cores[index];
    cor.style.backgroundColor = cores[index];
    paletaDeCores.appendChild(cor);
  }
}

//  Cria grid - feito novamente no bendito exercicio 7
function criaElemento() {
  for (let index = 0; index < 50; index += 1) {
    const chamaPai = document.getElementsByTagName('section')[2];
    //  acrescentar indice acima em caso de alteração!
    const criaFilho = document.createElement('div');
    criaFilho.classList.add('pixel');
    chamaPai.appendChild(criaFilho);
  }
}

//  Função para trocar as classes quando for clicado
function classExchange() {
  const black = document.getElementById('black');
  const red = document.getElementById('red');
  const blue = document.getElementById('blue');
  const pink = document.getElementById('pink');
  const cor05 = document.getElementById('cor5');
  const cor06 = document.getElementById('cor6');
  const cor07 = document.getElementById('cor7');
  const cor08 = document.getElementById('cor8');
  const cor09 = document.getElementById('cor9');
  const cor010 = document.getElementById('cor10');

  function blackClick() {
    black.classList.add('selected');
    red.classList.remove('selected');
    blue.classList.remove('selected');
    pink.classList.remove('selected');
    cor05.classList.remove('selected');
    cor06.classList.remove('selected');
    cor07.classList.remove('selected');
    cor08.classList.remove('selected');
    cor09.classList.remove('selected');
    cor010.classList.remove('selected');
  }
  function redClick() {
    black.classList.remove('selected');
    red.classList.add('selected');
    blue.classList.remove('selected');
    pink.classList.remove('selected');
    cor05.classList.remove('selected');
    cor06.classList.remove('selected');
    cor07.classList.remove('selected');
    cor08.classList.remove('selected');
    cor09.classList.remove('selected');
    cor010.classList.remove('selected');
  }
  function blueClick() {
    black.classList.remove('selected');
    red.classList.remove('selected');
    blue.classList.add('selected');
    pink.classList.remove('selected');
    cor05.classList.remove('selected');
    cor06.classList.remove('selected');
    cor07.classList.remove('selected');
    cor08.classList.remove('selected');
    cor09.classList.remove('selected');
    cor010.classList.remove('selected');
  }
  function pinkClick() {
    black.classList.remove('selected');
    red.classList.remove('selected');
    blue.classList.remove('selected');
    pink.classList.add('selected');
    cor05.classList.remove('selected');
    cor06.classList.remove('selected');
    cor07.classList.remove('selected');
    cor08.classList.remove('selected');
    cor09.classList.remove('selected');
    cor010.classList.remove('selected');
  }
  function cor5() {
    black.classList.remove('selected');
    red.classList.remove('selected');
    blue.classList.remove('selected');
    pink.classList.remove('selected');
    cor05.classList.add('selected');
    cor06.classList.remove('selected');
    cor07.classList.remove('selected');
    cor08.classList.remove('selected');
    cor09.classList.remove('selected');
    cor010.classList.remove('selected');
  }
  function cor6() {
    black.classList.remove('selected');
    red.classList.remove('selected');
    blue.classList.remove('selected');
    pink.classList.remove('selected');
    cor05.classList.remove('selected');
    cor06.classList.add('selected');
    cor07.classList.remove('selected');
    cor08.classList.remove('selected');
    cor09.classList.remove('selected');
    cor010.classList.remove('selected');
  }
  function cor7() {
    black.classList.remove('selected');
    red.classList.remove('selected');
    blue.classList.remove('selected');
    pink.classList.remove('selected');
    cor05.classList.remove('selected');
    cor06.classList.remove('selected');
    cor07.classList.add('selected');
    cor08.classList.remove('selected');
    cor09.classList.remove('selected');
    cor010.classList.remove('selected');
  }
  function cor8() {
    black.classList.remove('selected');
    red.classList.remove('selected');
    blue.classList.remove('selected');
    pink.classList.remove('selected');
    cor05.classList.remove('selected');
    cor06.classList.remove('selected');
    cor07.classList.remove('selected');
    cor08.classList.add('selected');
    cor09.classList.remove('selected');
    cor010.classList.remove('selected');
  }
  function cor9() {
    black.classList.remove('selected');
    red.classList.remove('selected');
    blue.classList.remove('selected');
    pink.classList.remove('selected');
    cor05.classList.remove('selected');
    cor06.classList.remove('selected');
    cor07.classList.remove('selected');
    cor08.classList.remove('selected');
    cor09.classList.add('selected');
    cor010.classList.remove('selected');
  }
  function cor10() {
    black.classList.remove('selected');
    red.classList.remove('selected');
    blue.classList.remove('selected');
    pink.classList.remove('selected');
    cor05.classList.remove('selected');
    cor06.classList.remove('selected');
    cor07.classList.remove('selected');
    cor08.classList.remove('selected');
    cor09.classList.remove('selected');
    cor010.classList.add('selected');
  }
  black.addEventListener('click', blackClick);
  red.addEventListener('click', redClick);
  blue.addEventListener('click', blueClick);
  pink.addEventListener('click', pinkClick);
  cor05.addEventListener('click', cor5);
  cor06.addEventListener('click', cor6);
  cor07.addEventListener('click', cor7);
  cor08.addEventListener('click', cor8);
  cor09.addEventListener('click', cor9);
  cor010.addEventListener('click', cor10);  
}

//  Função para colorir os pixels do Grid
function coloPixels() {
  const chamaPai = document.querySelector('#pixel-board');
  chamaPai.addEventListener('click', (event) => {
    const elemento = event.target;
    if (elemento.classList.contains('pixel')) {
      const selected = document.querySelector('.selected');
      elemento.style.backgroundColor = selected.style.backgroundColor;
    }
  });
}

//  Função de botão para apagar todas as cores do Grid
function buttonToClear() {
  function clearBoard() {
    const pixelsGrid = document.getElementsByClassName('pixel');
    for (let index = 0; index < pixelsGrid.length; index += 1) {
      pixelsGrid[index].style.backgroundColor = 'white';
    }
  }
  const chamaPaiDoBotao = document.getElementsByTagName('main')[0];
  const botãoDeRecomecar = document.createElement('button');
  botãoDeRecomecar.id = 'clear-board';
  chamaPaiDoBotao.appendChild(botãoDeRecomecar);
  botãoDeRecomecar.innerText = 'Limpar';
  botãoDeRecomecar.addEventListener('click', clearBoard);
}

//   Função que altera o tamanho do Grid
function alteraGrid() {
  if (document.getElementById('board-size').value === '') {
    alert('Board Inválido!');
  } else {
    chamaPai = document.getElementById('board-size').value;
    alteraClasse = document.getElementsByClassName('pixel');

    if (chamaPai < 5) {
      chamaPai = 5;
    } else if (chamaPai > 50) {
      chamaPai = 50;
    }

    while (alteraClasse.length) {
      elementoRetirado = alteraClasse[0];
      elementoRetirado.remove();
    }

    for (index = 1; index <= (chamaPai * chamaPai); index++) {
      const newGrid = document.createElement('div');
      newGrid.classList = ('pixel');
      newGrid.id = ('pixel' + index);
      console.log(newGrid);
      document.getElementById('pixel-board').appendChild(newGrid);
    }
    let stringAuto = '';
    for (let index = 0; index < chamaPai; index++) {
      if (index === 0) {
        stringAuto = ('auto');
      } else {
        stringAuto = (stringAuto + ' auto');
      }
    }
    defineColuna = document.getElementById('pixel-board');
    defineColuna.style.gridTemplateColumns = (stringAuto);
  }
}

//   Função que cria cores aleatorias ao carregar pagina
function colorRandom() {
  const mainColor = document.getElementById('black');
  mainColor.style.backgroundColor = ('black');

  const randomColor1 = Math.floor(Math.random() * 16777215).toString(16);
  const first = document.getElementById('red');
  first.style.backgroundColor = '#' + randomColor1;

  const randomColor2 = Math.floor(Math.random() * 16777215).toString(16);
  const second = document.getElementById('blue');
  second.style.backgroundColor = '#' + randomColor2;

  const randomColor3 = Math.floor(Math.random() * 16777215).toString(16);
  const third = document.getElementById('pink');
  third.style.backgroundColor = '#' + randomColor3;

  const randomColor5 = Math.floor(Math.random() * 16777215).toString(16);
  const cinco = document.getElementById('cor5');
  cinco.style.backgroundColor = '#' + randomColor5;

  const randomColor6 = Math.floor(Math.random() * 16777215).toString(16);
  const seis = document.getElementById('cor6');
  seis.style.backgroundColor = '#' + randomColor6;

  const randomColor7 = Math.floor(Math.random() * 16777215).toString(16);
  const sete = document.getElementById('cor7');
  sete.style.backgroundColor = '#' + randomColor7;

  const randomColor8 = Math.floor(Math.random() * 16777215).toString(16);
  const oito = document.getElementById('cor8');
  oito.style.backgroundColor = '#' + randomColor8;

  const randomColor9 = Math.floor(Math.random() * 16777215).toString(16);
  const nove = document.getElementById('cor9');
  nove.style.backgroundColor = '#' + randomColor9;

  const randomColor10 = Math.floor(Math.random() * 16777215).toString(16);
  const dez = document.getElementById('cor10');
  dez.style.backgroundColor = '#' + randomColor10;

  const randomColor11 = Math.floor(Math.random() * 16777215).toString(16);
  const onze = document.getElementById('cor11');
  onze.style.backgroundColor = '#' + randomColor11;
}

//  Carregamento automatico junto com a pagina
window.onload = function altoCarregamento() {
  paletteNew();
  startWithPattern();
  criaElemento();
  classExchange();
  coloPixels();
  buttonToClear();
  colorRandom();
  alteraGrid();
};
