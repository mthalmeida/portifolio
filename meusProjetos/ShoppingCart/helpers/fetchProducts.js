const endPointProducts = (param) => `https://api.mercadolibre.com/sites/MLB/search?q=${param}`;

const fetchProducts = async (param) => {
  const url = endPointProducts(param);

  const response = await fetch(url);
  const data = await response.json();
  return data;
};

if (typeof module !== 'undefined') {
  module.exports = {
    fetchProducts,
  };
}
