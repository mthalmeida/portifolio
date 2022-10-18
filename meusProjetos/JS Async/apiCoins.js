const fetchCoins = async () => {
  //  Acessando API
  const url = 'https://api.coincap.io/v2/assets';

  //  Ajustando linguagem de API com Json
  const coins = await fetch(url)
    .then((returnApi) => returnApi.json())
    .then((api) => api.data);
  return coins;
};

const append = async () => {
  const coins = await fetchCoins();

  //  Associando itens do API
  const ul = document.getElementById('coins-list');

  //  Utilizando slice como repetição > https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/slice
  coins.slice(0, 10).forEach((coinsRepeat) => {
    //  Criando elemento li no HTML
    const li = document.createElement('li');
    
    //  Chamando e associando preço (price) ao li
    const price = Number(coinsRepeat.priceUsd);
    li.innerText = (`${coinsRepeat.name} (${coinsRepeat.symbol}): ${price.toFixed(2)}`);
    
    //  Associando ul ao li
    ul.appendChild(li);
  });
};

window.onload = () => append();