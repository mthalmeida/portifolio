// Esse tipo de comentário que estão antes de todas as funções são chamados de JSdoc,
// experimente passar o mouse sobre o nome das funções e verá que elas possuem descrições! 

// Fique a vontade para modificar o código já escrito e criar suas próprias funções!
/**
 * Função responsável por criar e retornar o elemento de imagem do produto.
 * @param {string} imageSource - URL da imagem.
 * @returns {Element} Elemento de imagem do produto.
 */
const createProductImageElement = (imageSource) => {
  const img = document.createElement('img');
  img.className = 'item__image';
  img.src = imageSource;
  return img;
};

/**
 * Função responsável por criar e retornar qualquer elemento.
 * @param {string} element - Nome do elemento a ser criado.
 * @param {string} className - Classe do elemento.
 * @param {string} innerText - Texto do elemento.
 * @returns {Element} Elemento criado.
 */
const createCustomElement = (element, className, innerText) => {
  const e = document.createElement(element);
  e.className = className;
  e.innerText = innerText;
  return e;
};

/**
 * Função responsável por criar e retornar o elemento do produto.
 * @param {Object} product - Objeto do produto. 
 * @param {string} product.id - ID do produto.
 * @param {string} product.title - Título do produto.
 * @param {string} product.thumbnail - URL da imagem do produto.
 * @returns {Element} Elemento de produto.
 */
const createProductItemElement = ({ id, title, thumbnail }) => {
  const section = document.createElement('section');
  section.className = 'item';

  section.appendChild(createCustomElement('span', 'item_id', id));
  section.appendChild(createCustomElement('span', 'item__title', title));
  section.appendChild(createProductImageElement(thumbnail));
  section.appendChild(createCustomElement('button', 'item__add', 'Adicionar ao carrinho!'));

  return section;
};

/**
 * Função que recupera o ID do produto passado como parâmetro.
 * @param {Element} product - Elemento do produto.
 * @returns {string} ID do produto.
 */
const getIdFromProductItem = (product) => product.querySelector('span.item_id').innerText;

/**
 * Função responsável por criar e retornar um item do carrinho.
 * @param {Object} product - Objeto do produto.
 * @param {string} product.id - ID do produto.
 * @param {string} product.title - Título do produto.
 * @param {string} product.price - Preço do produto.
 * @returns {Element} Elemento de um item do carrinho.
 */

const removeItems = (event) => {
  event.target.remove();
  //  saveCartItems(cart.innerHTML);
};

const createCartItemElement = ({ id, title, price }) => {
  const li = document.createElement('li');
  li.className = 'cart__item';
  li.innerText = `ID: ${id} | TITLE: ${title} | PRICE: $${price}`;
  //  li.addEventListener('click', cartItemClickListener);
  li.addEventListener('click', removeItems);
  return li;
};

const items = document.querySelector('.items');
const listItems = document.querySelector('.cart__items');

async function addItemsCart() {
  const searchFor = await fetchProducts('maquiagem');
  const { results } = searchFor;

  results.forEach((product) => {
    const itemsCreate = createProductItemElement(product);
    items.appendChild(itemsCreate);
  });

  const clickButton = document.querySelectorAll('.item__add');
  clickButton.forEach((button) => {
    const id = button.parentElement.firstChild.innerText;
    button.addEventListener('click', async () => {
      const product = await fetchItem(id);
      const cartProduct = createCartItemElement(product);
      listItems.appendChild(cartProduct);
      //  saveCartItems(cart.innerHTML);
    });
  });
}

function cleanCart() {
  const btn = document.querySelector('.empty-cart');
  const clear = document.querySelector('.cart__items');

    function newList() {
    clear.innerText = '';
    }

  btn.addEventListener('click', newList);
}

const loadingItem = document.querySelector('.items');

const addLoadText = () => {
  const textLoading = document.createElement('span');
  textLoading.className = 'loading';
  textLoading.innerText = '...carregando';
  loadingItem.appendChild(textLoading);
};

function removeLoadText() {  
  document.getElementsByClassName('loading')[0].remove();
}

window.onload = async () => {
  addLoadText();
  await addItemsCart();
  removeLoadText();
  cleanCart();
};
