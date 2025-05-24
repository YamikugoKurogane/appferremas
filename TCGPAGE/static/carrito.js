document.addEventListener('DOMContentLoaded', () => {
  const tablaCarrito = document.getElementById('tabla-carrito-body');
  const totalCarritoEl = document.getElementById('total-carrito');
  const montoTotalInput = document.getElementById('monto-total');
  const vaciarBtn = document.getElementById('vaciar-carrito');

  // Elementos nuevos para conversión
  const convertirBtn = document.createElement('button');
  convertirBtn.textContent = 'Convertir a USD';
  convertirBtn.className = 'btn btn-secondary mt-2';
  document.getElementById('total-container').appendChild(convertirBtn);

  const usdLabel = document.createElement('div');
  usdLabel.id = 'usd-total';
  usdLabel.style.marginTop = '10px';
  usdLabel.innerHTML = `<strong>Total en USD:</strong> <span id="total-usd">$0</span>`;
  document.getElementById('total-container').appendChild(usdLabel);

  function cargarCarrito() {
    const carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    tablaCarrito.innerHTML = '';

    let total = 0;

    carrito.forEach(item => {
      const fila = document.createElement('tr');

      const subtotal = item.precio * item.cantidad;
      total += subtotal;

      fila.innerHTML = `
        <td>${item.id}</td>
        <td>${item.nombre}</td>
        <td><img src="${item.imagen_url}" width="50" /></td>
        <td>$${item.precio}</td>
        <td>${item.cantidad}</td>
        <td>$${subtotal}</td>
        <td><button class="btn btn-danger btn-sm eliminar-item" data-id="${item.id}">Eliminar</button></td>
      `;

      tablaCarrito.appendChild(fila);
    });

    totalCarritoEl.textContent = total;
    montoTotalInput.value = total;
  }

  tablaCarrito.addEventListener('click', (e) => {
    if (e.target.classList.contains('eliminar-item')) {
      const id = e.target.dataset.id;
      let carrito = JSON.parse(localStorage.getItem('carrito')) || [];
      carrito = carrito.filter(item => item.id !== parseInt(id));
      localStorage.setItem('carrito', JSON.stringify(carrito));
      cargarCarrito();
    }
  });

  vaciarBtn.addEventListener('click', () => {
    localStorage.removeItem('carrito');
    cargarCarrito();
  });

  convertirBtn.addEventListener('click', async () => {
    const totalCLP = parseFloat(totalCarritoEl.textContent);
    try {
      const res = await fetch('https://economia.awesomeapi.com.br/json/last/USD-CLP');
      const data = await res.json();
      const tasa = parseFloat(data.USDCLP.bid);
      const totalUSD = (totalCLP / tasa).toFixed(2);
      document.getElementById('total-usd').textContent = `$${totalUSD}`;
    } catch (error) {
      alert('Error al obtener la tasa de cambio.');
      console.error(error);
    }
  });

  cargarCarrito();
});
