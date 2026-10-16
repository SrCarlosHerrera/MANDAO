/* Datos de muestra para los menús de MANDAO */
const restaurants = {
  kfc: {
    name: 'KFC',
    type: 'Kentucky Fried Chicken',
    delivery: '20–30 min · Envío gratis',
    rating: '★ 4.9 · Favorito de la zona',
    image: 'imagenes/kfc/kfc.jpg',
    products: [
      { id: 'esquina-mangu', name: 'Big Fox Mega', description: 'Sándwich, Pieza de Pollo, Papas Fritas, Helado y Refresco.', price: 599, image: 'imagenes/kfc/big1.png' },
      { id: 'esquina-chicharron', name: 'Combo Full Cheese', description: 'Sándwich Cheesy Bacon, Papas Fritas, Pieza de Pollo y Refresco de 16 oz.', price: 450, image: 'imagenes/kfc/big2.png' },
      { id: 'esquina-pollo', name: 'Big Box Full', description: 'Sándwich Doble Crunch, Pieza de Pollo, Papas Fritas, Biscuit y Refresco.', price: 420, image: 'imagenes/kfc/big3.png' },
      { id: 'esquina-jugo', name: 'Combo Crispy BBQ Sandwich', description: 'Kentucky Chicken Sándwich Crispy BBQ, Papa Frita peq, Refresco.', price: 550, image: 'imagenes/kfc/big4.png' }
    ]
  },
  little: {
    name: 'Little Caesars',
    type: 'Pizza',
    delivery: '25–35 min · Envío gratis',
    rating: '★ 4.8 · Horno de piedra',
    image: 'imagenes/little/images.png',
    products: [
      { id: 'forno-margherita', name: 'Pizza 2n1', description: 'MITAD PEPPERONI MITAD JAMÓN Y MAÍZ', price: 4250, image: 'imagenes/little/p2.jpg' },
      { id: 'forno-pepperoni', name: 'Pizza Pepperoni', description: 'Pepperoni, Mozzarella y Salsa de la Casa.', price: 350, image: 'imagenes/little/p1.jpg' },
      { id: 'forno-pasta', name: 'Italian Cheese Bread', description: '10 rebanadas de pan recién horneado con masa suave, base crujiente y cubiertas con mezcla de quesos y especias italianas.', price: 275, image: 'imagenes/little/it.jpg' },
      { id: 'forno-limonada', name: 'Crazy Puffs', description: 'porciones individuales de masa rellena y horneada con forma de panecillo o muffin, cubiertas con mantequilla de ajo y especias.', price: 199, image: 'imagenes/little/crazy.jpg' }
    ]
  },
  cafe: {
    name: 'Café Santo Domingo',
    type: 'Fresco y Saludable',
    delivery: '15–25 min · Envío gratis',
    rating: '★ 4.7 · LO MEJOR DE LO MEJOR',
    image: 'imagenes/cafe/images.jpg',
    products: [
      { id: 'patio-bowl', name: 'Frappé Dulce de Leche con Guayaba', description: 'Una bebida fría y refrescante de Café Santo Domingo que combina los sabores tradicionales dominicanos del café, el dulce de leche y la guayaba.', price: 340, image: 'imagenes/cafe/ca.png' },
      { id: 'patio-ensalada', name: 'Café Dominicano', description: 'Café 100% puro más tradicional.', price: 310, image: 'imagenes/cafe/ca2.jpg' },
      { id: 'patio-wrap', name: 'Santo Domingo Iced', description: 'Es una bebida refrescante de café frío elaborada a base de café dominicano, leche fría y abundante hielo.', price: 360, image: 'imagenes/cafe/c3.png' },
      { id: 'patio-jugo', name: 'Sándwich Integral de Pollo', description: 'Pan integral relleno de una cremosa mezcla de pollo desmenuzado en salsa blanca con un toque de puerro.', price: 160, image: 'imagenes/cafe/c4.jpeg' }
    ]
  },
  jade: {
    name: 'Jade Teriyaki',
    type: 'Rico Pollo',
    delivery: '20–30 min · Envío gratis',
    rating: '★ 4.9 · Favorito de la zona',
    image: 'imagenes/jade/jade2.png',
    products: [
      { id: 'esquina-mangu', name: 'Pollo Teriyaki y Tostones', description: 'Trozos de pollo (pechuga o contramuslo) y una salsa agridulce hecha con salsa de soja, azúcar o miel, jengibre y ajo', price: 599, image: 'imagenes/jade/pollo.jpeg' },
      { id: 'esquina-chicharron', name: 'Pechugas Crujientes', description: 'Pechugas Crujientes, Tostones y 2 Chicken Dumplings.', price: 450, image: 'imagenes/jade/pechugas.jpeg' },
      { id: 'esquina-pollo', name: 'Chow Fan Teriyaki', description: 'Tradicional arroz frito chino con un toque especial de pollo teriyaki como ingrediente principal', price: 420, image: 'imagenes/jade/arroz.jpg' },
      { id: 'esquina-jugo', name: 'Egg Rolls Mixtos', description: 'Rollo frito relleno de una combinación de carne de cerdo, carne de pollo y vegetales.', price: 199, image: 'imagenes/jade/egg.jpg' },
      { id: 'esquina-juge', name: 'Pollo Agridulce', description: 'Filete de pechuga de pollo empanizado, bañado en su salsa agridulce, acompañado de trozos de piña, ají y cebolla', price: 500, image: 'imagenes/jade/polloagr.jpg' },
      { id: 'esquina-jugo', name: 'Jugo de Limón', description: 'Jugo de Limón Natural', price: 199, image: 'imagenes/jade/limon.jpeg' },
      { id: 'esquina-jugo', name: 'Lemon Iced Tea', description: ' Lemon Iced Tea artesanal', price: 150, image: 'imagenes/jade/tea.jpeg' }
    ]
  },
  burger: {
    name: 'Burger King',
    type: 'Donde Sabe Mejor',
    delivery: '20–40 min · Envío gratis',
    rating: '★ 4.9 · Favorito de la zona',
    image: 'imagenes/burger/Burger.jpg',
    products: [
      { id: 'esquina-mangu', name: 'Combo Whopper con Queso', description: 'Carne de res 100% a la parrilla, queso americano, lechuga y tomate frescos, mayonesa, kétchup, cebolla y pepinillos en un pan suave con ajonjolí.', price: 599, image: 'imagenes/burger/b1.jpg' },
      { id: 'esquina-chicharron', name: 'Mega Stacker', description: 'Es una hamburguesa hecha a la parrilla con doble carne de res, trozos de tocino crujiente, queso derretido y la caracteristica salsa Stacker', price: 450, image: 'imagenes/burger/b2.png' },
      { id: 'esquina-pollo', name: 'Combo Mega Stacker', description: 'Incluye una hamburguesa hecha con carne 100% a la parrilla, trozos de tocino (tocineta), queso derretido y la caracteristica salsa Stacker, acompañada de papas y bebida', price: 420, image: 'imagenes/burger/b3.jpg' },
      { id: 'esquina-jugo', name: 'Combo Pa 2', description: '1 Whopper Jr 1 King de Pollo 8 Chicken Nuggets 2 papas regulares', price: 199, image: 'imagenes/burger/b4.jpg' },
      { id: 'esquina-juge', name: 'Super Saiyan Whopper', description: 'Pan de color naranja, carne de res 100% a la parrilla, queso americano, tomate, lechuga, pepinillos, cebolla crispy y salsa teriyaki especial.', price: 500, image: 'imagenes/burger/b5.jpg' },
      { id: 'esquina-jugo', name: 'Sundae', description: 'Es un postre cremoso de helado de vainilla que puedes pedir con diferentes toppings.', price: 199, image: 'imagenes/burger/s1.jpg' },
      { id: 'esquina-jugo', name: 'Coca-Cola 400ml', description: 'Coca-Cola Sabor Original PET de 400 ml', price: 150, image: 'imagenes/burger/c1.jpg' }
    ]
  },
};

const cart = new Map(JSON.parse(localStorage.getItem('mandao-cart') || '[]'));
const params = new URLSearchParams(window.location.search);
const restaurant = restaurants[params.get('restaurant')] || restaurants.esquina;
const productList = document.querySelector('#restaurant-products');
const cartDialog = document.querySelector('#cart-dialog');
const toast = document.querySelector('#toast');

function showToast(message) {
  toast.textContent = message;
  toast.classList.add('toast-visible');
  window.setTimeout(() => toast.classList.remove('toast-visible'), 2500);
}

function saveCart() {
  localStorage.setItem('mandao-cart', JSON.stringify([...cart.entries()]));
}

function renderProducts() {
  document.querySelector('#restaurant-name').textContent = restaurant.name;
  document.querySelector('#restaurant-description').textContent = `${restaurant.type} · ${restaurant.delivery}`;
  document.querySelector('#restaurant-rating').textContent = restaurant.rating;
  const image = document.querySelector('#restaurant-image');
  image.src = restaurant.image;
  image.alt = `Interior de ${restaurant.name}`;
  document.title = `${restaurant.name} — MANDAO`;

  productList.innerHTML = restaurant.products.map(product => `
    <article class="restaurant-product">
      <img src="${product.image}" alt="${product.name}" loading="lazy">
      <div class="restaurant-product-info">
        <h3>${product.name}</h3>
        <p>${product.description}</p>
        <div class="restaurant-product-bottom">
          <span>RD$ ${product.price}</span>
          <button type="button" data-add="${product.id}">Agregar +</button>
        </div>
      </div>
    </article>
  `).join('');
}

function renderCart() {
  saveCart();
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
  const product = restaurant.products.find(item => item.id === button.dataset.add);
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
window.addEventListener('pageshow', () => {
  cart.clear();
  JSON.parse(localStorage.getItem('mandao-cart') || '[]').forEach(([id, item]) => cart.set(id, item));
  renderCart();
});

renderProducts();
renderCart();

