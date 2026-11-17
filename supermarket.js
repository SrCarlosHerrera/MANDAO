/* Menús de supermercados de MANDAO. */
const supermercados = [
  { name: 'Vegetales frescos', description: 'Selección de vegetales para tu compra.', price: 220, image: 'imagenes/comidasp/vegetales.jpg' },
  { name: 'Jugos', description: 'Bebidas para acompañar tu compra.', price: 120, image: 'imagenes/comidasp/jugos.jpg' },
  { name: 'Artículos de despensa', description: 'Productos básicos para el hogar.', price: 350, image: 'imagenes/comidasp/comida.jpeg' },
  { name: 'Bebidas', description: 'Variedad de bebidas frías.', price: 180, image: 'imagenes/comidasp/b.jpg' }
];
const supermarketData = [
  ['plazalama', 'Plaza Lama', 'imagenes/plazalama/p1.jpg', '20–30 min'],
  ['jumbo', 'Jumbo', 'imagenes/comidasp/vegetales.jpg', '25–35 min'],
  ['nacional', 'Supermercado Nacional', 'imagenes/comidasp/comida.jpeg', '25–35 min'],
  ['sirena', 'La Sirena', 'imagenes/comidasp/b.jpg', '25–35 min'],
  ['bravo', 'Bravo', 'imagenes/comidasp/m.jpg', '20–30 min']
];
const supermarkets = Object.fromEntries(supermarketData.map(([id, name, image, delivery]) => [id, {
  name,
  type: 'Supermercado',
  delivery: `${delivery} · Envío gratis`,
  rating: '★ 4.8 · Favorito de la zona',
  image,
  products: storeProducts.map((product, index) => ({ ...product, id: `${id}-producto-${index}` }))
}]));

const params = new URLSearchParams(window.location.search);
const supermarket = supermarkets[params.get('supermarket')] || supermarkets.plazalama;
const productList = document.querySelector('#supermarket-products');
const cart = new Map(JSON.parse(localStorage.getItem('mandao-cart') || '[]'));
const cartDialog = document.querySelector('#cart-dialog');
const toast = document.querySelector('#toast');

function showToast(message) {
  toast.textContent = message;
  toast.classList.add('toast-visible');
  window.setTimeout(() => toast.classList.remove('toast-visible'), 2500);
}

function renderProducts() {
  document.querySelector('#supermarket-name').textContent = supermarket.name;
  document.querySelector('#supermarket-description').textContent = `${supermarket.type} · ${supermarket.delivery}`;
  document.querySelector('#supermarket-rating').textContent = supermarket.rating;
  const heroImage = document.querySelector('#supermarket-image');
  heroImage.src = supermarket.image;
  heroImage.alt = supermarket.name;
  document.title = `${supermarket.name} — MANDAO`;
  productList.innerHTML = supermarket.products.map(product => `
    <article class="supermarket-product">
      <img src="${product.image}" alt="${product.name}" loading="lazy">
      <div class="supermarket-product-info"><h3>${product.name}</h3><p>${product.description}</p>
        <div class="supermarket-product-bottom"><span>RD$ ${product.price}</span><button type="button" data-add="${product.id}">Agregar +</button></div>
      </div>
    </article>`).join('');
}

function renderCart() {
  localStorage.setItem('mandao-cart', JSON.stringify([...cart.entries()]));
  const items = [...cart.values()];
  const quantity = items.reduce((sum, item) => sum + item.quantity, 0);
  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  document.querySelector('#cart-count').textContent = quantity;
  document.querySelector('#cart-items').innerHTML = items.length
    ? items.map(item => `<div class="cart-item"><div><b>${item.name}</b><small>RD$ ${item.price} cada uno</small></div><div class="quantity-control"><button data-quantity="${item.id}" data-change="-1" aria-label="Quitar uno">−</button><span>${item.quantity}</span><button data-quantity="${item.id}" data-change="1" aria-label="Agregar uno">+</button></div></div>`).join('')
    : '<p class="cart-empty">Tu carrito está vacío. ¡Elige algo rico!</p>';
  document.querySelector('#cart-total').textContent = `RD$ ${total.toLocaleString('es-DO')}`;
  document.querySelector('#checkout-button').disabled = items.length === 0;
}

productList.addEventListener('click', event => {
  const button = event.target.closest('[data-add]');
  if (!button) return;
  const product = supermarket.products.find(item => item.id === button.dataset.add);
  const current = cart.get(product.id);
  cart.set(product.id, { ...product, quantity: current ? current.quantity + 1 : 1 });
  renderCart();
  showToast(`${product.name} se agregó al carrito`);
});
document.querySelector('#open-cart').addEventListener('click', () => cartDialog.showModal());
document.querySelector('#cart-items').addEventListener('click', event => {
  const button = event.target.closest('[data-quantity]');
  if (!button) return;
  const item = cart.get(button.dataset.quantity);
  item.quantity += Number(button.dataset.change);
  if (item.quantity <= 0) cart.delete(button.dataset.quantity);
  renderCart();
});
document.querySelector('#checkout-button').addEventListener('click', () => {
  if (!cart.size) return;
  cart.clear();
  renderCart();
  cartDialog.close();
  showToast('¡Pedido confirmado! Esta es una simulación de compra.');
});
renderProducts();
renderCart();
