document.addEventListener('DOMContentLoaded', () => {
  const productosUrl = '/apiv2/productos/';
  const cambioUrl = 'https://economia.awesomeapi.com.br/json/last/USD-CLP';
  const container = document.getElementById('productos-container');

  let tasaCambio = 1;

  async function obtenerTasaCambio() {
    try {
      const res = await fetch(cambioUrl);
      const data = await res.json();
      tasaCambio = parseFloat(data.USDCLP.bid);
    } catch (error) {
      console.error('Error al obtener tasa de cambio:', error);
    }
  }

  function agregarAlCarrito(producto) {
    let carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    const index = carrito.findIndex(item => item.id === producto.id);
    if (index !== -1) {
      carrito[index].cantidad += 1;
    } else {
      carrito.push({ ...producto, cantidad: 1 });
    }
    localStorage.setItem('carrito', JSON.stringify(carrito));
    alert(`"${producto.nombre}" fue añadido al carrito.`);
  }

  const cargarProductos = async () => {
    await obtenerTasaCambio(); // Primero obtenemos la tasa de cambio

    try {
      const res = await fetch(productosUrl);
      const productos = await res.json();
      container.innerHTML = '';

      productos.forEach(producto => {
        const card = document.createElement('div');
        card.className = 'bg-white shadow-md rounded-xl overflow-hidden flex flex-col';

        const imagen = producto.imagen_url || 'https://via.placeholder.com/300x200.png?text=Sin+Imagen';
        const precioUsd = (producto.precio / tasaCambio).toFixed(2);

        card.innerHTML = `
          <img src="${imagen}" alt="${producto.nombre}" class="h-48 w-full object-cover">
          <div class="p-4 flex flex-col flex-1 justify-between">
            <h3 class="text-lg font-semibold mb-1">${producto.nombre}</h3>
            <p class="text-gray-700 mb-2">Precio: $${producto.precio} CLP (<strong>USD $${precioUsd}</strong>)</p>
            <button class="bg-green-600 text-white py-1 rounded hover:bg-green-700 transition">Añadir al carrito</button>
          </div>
        `;

        card.querySelector('button').addEventListener('click', () => agregarAlCarrito(producto));
        container.appendChild(card);
      });
    } catch (error) {
      console.error('Error al cargar productos:', error);
      container.innerHTML = '<p class="text-red-600">Error al cargar productos.</p>';
    }
  };

  cargarProductos();
});
