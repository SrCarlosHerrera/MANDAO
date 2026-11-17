const products = [
      { id: '1', name: 'Hamburguesa Clasica', price: 390 },
      { id: '2', name: 'Tacos al Pastor', price: 280 },
      { id: '3', name: 'Pizza de Pepperoni', price: 550 },
      { id: '4', name: 'Mofongo', price: 800 },
      { id: '5', name: 'Tapao', price: 50 },
      { id: '6', name: 'Yaroa', price: 350 },
      { id: '7', name: 'Chimi', price: 320 },
      { id: '8', name: 'Jugos Naturales', price: 120 },
      { id: '9', name: 'Ron', price: 3000 },
      { id: '10', name: 'Cervezas', price: 300 },
      { id: '11', name: 'Agua', price: 40 },
      { id: '12', name: 'Jugo de Naranja', price: 60 },
      { id: '13', name: 'Coca-Cola', price: 40 },
      { id: '14', name: 'Bebida Energética', price: 140 },
      { id: '15', name: 'Leche', price: 80 },
      { id: '16', name: 'Refresco Sprite', price: 75 },
      { id: '17', name: 'Manzana Roja', price: 50 },
      { id: '18', name: 'Guineo', price: 40 },
      { id: '19', name: 'Naranja', price: 40 },
      { id: '20', name: 'Limón', price: 40 },
      { id: '21', name: 'Aguacate', price: 40 },
      { id: '22', name: 'Ají Cubanela', price: 40 },
      { id: '23', name: 'Repollo', price: 40 },
      { id: '24', name: 'Lechuga', price: 40 },
      { id: '25', name: 'Auyama', price: 40 },
      { id: '26', name: 'Uvas', price: 120 },
      { id: '27', name: 'Piña', price: 95 },
      { id: '28', name: 'Sandía', price: 95 },
      { id: '29', name: 'Lechosa', price: 80 },
      { id: '30', name: 'Papas', price: 80 },
      { id: '31', name: 'Cebollas', price: 80 },
      { id: '32', name: 'Espinacas', price: 100 },
      { id: '33', name: 'Vainitas', price: 80 },
      { id: '34', name: 'Zanahorias', price: 80 },
      { id: '35', name: 'Paracetamol 500 mg', price: 20 },
      { id: '36', name: 'Ibuprofeno 400 mg', price: 20 },
      { id: '37', name: 'Loratadina 10 mg', price: 20 },
      { id: '38', name: 'Cetirizina 10 mg', price: 20 },
      { id: '39', name: 'Omeprazol 20 mg', price: 20 },
      { id: '40', name: 'Alimentos para Perros', price: 150 },
      { id: '41', name: 'Comida para Cachorros', price: 260 },
      { id: '42', name: 'Alimentos para Gatos', price: 260 },
      { id: '43', name: 'Plato para Comida', price: 260 },
      { id: '44', name: 'Bebedero para Mascotas', price: 360 },
      { id: '45', name: 'Collar para Perros', price: 460 },


    ];
    const cart = new Map(JSON.parse(localStorage.getItem('mandao-cart') || '[]'));
    const productGrid = document.querySelector('#product-grid');
    const searchInput = document.querySelector('#search-input');
    const toast = document.querySelector('#toast');
    let activeFilter = 'todos';

    function showToast(message) {
      toast.textContent = message;
      toast.classList.add('toast-visible');
      window.setTimeout(() => toast.classList.remove('toast-visible'), 2600);
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

    function addToCart(id) {
      const product = products.find(item => item.id === id);
      const current = cart.get(id);
      cart.set(id, { ...product, quantity: current ? current.quantity + 1 : 1 });
      renderCart();
      showToast(`${product.name} se agregó al carrito`);
    }

    function applyFilters() {
      const query = searchInput.value.trim().toLocaleLowerCase('es');
      const showEstablishments = activeFilter === 'establecimientos';
      const showSupermarkets = activeFilter === 'supermercados';
      document.querySelector('.popular').hidden = showEstablishments || showSupermarkets;
      document.querySelector('.establishments').hidden = !showEstablishments;
      document.querySelector('.supermarket').hidden = !showSupermarkets;
      let visible = 0;
      productGrid.querySelectorAll('.food-card').forEach(card => {
        const categoryMatches = activeFilter === 'todos' || card.dataset.category === activeFilter;
        const searchMatches = !query || card.dataset.search.includes(query) || card.textContent.toLocaleLowerCase('es').includes(query);
        card.hidden = !(categoryMatches && searchMatches);
        if (!card.hidden) visible++;
      });
      document.querySelector('#empty-message').hidden = visible > 0;
      document.querySelector('#listing-title').textContent = activeFilter === 'todos' ? 'Comidas populares' : activeFilter === 'establecimientos' ? 'Establecimientos destacados' : `${activeFilter[0].toUpperCase()}${activeFilter.slice(1)} disponibles`;
      document.querySelectorAll('.filter-chip').forEach(chip => chip.classList.toggle('is-active', chip.dataset.filter === activeFilter));
      const target = showEstablishments ? '#establecimientos' : showSupermarkets ? '#supermercados' : '#menu';
      document.querySelector(target).scrollIntoView({ behavior: 'smooth', block: 'start' });
    }

    document.addEventListener('click', event => {
      const addButton = event.target.closest('[data-add]');
      if (addButton) addToCart(addButton.dataset.add);

      const openButton = event.target.closest('[data-open]');
      if (openButton) document.getElementById(openButton.dataset.open).showModal();

      const filterButton = event.target.closest('[data-filter]');
      if (filterButton) {
        activeFilter = filterButton.dataset.filter;
        applyFilters();
      }

      const quantityButton = event.target.closest('[data-quantity]');
      if (quantityButton) {
      const id = quantityButton.dataset.quantity;
      const item = cart.get(id);
      item.quantity += Number(quantityButton.dataset.change);
      if (item.quantity <= 0) cart.delete(id);
      renderCart();
      }

      const favorite = event.target.closest('.favorite');
      if (favorite) favorite.classList.toggle('is-favorite');
    });

     document.querySelector('#search-form').addEventListener('submit', event => {
      event.preventDefault();
      activeFilter = 'todos';
      applyFilters();
    });
     document.querySelector('#checkout-button').addEventListener('click', () => {
      if (!cart.size) return;
      document.querySelector('#cart-dialog').close();
      cart.clear();
      renderCart();
      showToast('¡Pedido confirmado! Esta es una simulación de compra.');
    });
     document.querySelector('#register-form').addEventListener('submit', event => {
      event.preventDefault();
      const name = new FormData(event.currentTarget).get('name').trim();
      document.querySelector('#register-notice').textContent = `¡Gracias, ${name}! Tu registro de demostración se completó.`;
      event.currentTarget.reset();
    });
     document.querySelector('#login-form').addEventListener('submit', event => {
      event.preventDefault();
      document.querySelector('#login-notice').textContent = 'Inicio de sesión de demostración. La cuenta no se valida en un servidor.';
    });
       const menuToggle = document.querySelector('.menu-toggle');
       const menu = document.querySelector('.menu');
       menuToggle.addEventListener('click', () => {
       const open = menuToggle.getAttribute('aria-expanded') === 'true';
       menuToggle.setAttribute('aria-expanded', String(!open));
       menu.classList.toggle('menu-open', !open);
    });
       menu.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
       menu.classList.remove('menu-open');
       menuToggle.setAttribute('aria-expanded', 'false');
    }));
       renderCart();
       window.addEventListener('pageshow', () => {
       cart.clear();
       JSON.parse(localStorage.getItem('mandao-cart') || '[]').forEach(([id, item]) => cart.set(id, item));
       renderCart();
    });

    function openSupermarkets() {
      activeFilter = 'supermercados';
      applyFilters();
    }
    document.querySelector('#filter-supermercados').addEventListener('click', openSupermarkets);
    document.querySelector('#category-supermercados').addEventListener('click', openSupermarkets);
    if (window.location.hash === '#supermercados') openSupermarkets();
    else if (window.location.hash === '#establecimientos') {
      activeFilter = 'establecimientos';
      applyFilters();
    }

