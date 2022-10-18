const endPointItens = (param) => `https://api.mercadolibre.com/items/${param}`;

const fetchItem = async (param) => {
  const url = endPointItens(param);

  const response = await fetch(url);
  const data = await response.json();
  return data;
};

if (typeof module !== 'undefined') {
  module.exports = {
    fetchItem,
  };
}
