const apiUrl = '/apiv2/productos/';
const marcasUrl = '/apiv2/marcas/';

const tiposMaterial = [
  { id: 1, nombre: "Herramienta" },
  { id: 2, nombre: "Material" },
  { id: 3, nombre: "EPP" }
];

document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('product-form');
  const marcaSelect = document.getElementById('marca');
  const tipoMaterialSelect = document.getElementById('tipo_material');
  const productList = document.getElementById('product-list');

  const loadMarcas = async () => {
    const res = await fetch(marcasUrl);
    const data = await res.json();
    marcaSelect.innerHTML = '';
    data.forEach(marca => {
      const option = document.createElement('option');
      option.value = marca.id;
      option.textContent = marca.nombre;
      marcaSelect.appendChild(option);
    });
  };

  const loadTiposMaterial = () => {
    tipoMaterialSelect.innerHTML = '';
    tiposMaterial.forEach(tipo => {
      const option = document.createElement('option');
      option.value = tipo.id;
      option.textContent = tipo.nombre;
      tipoMaterialSelect.appendChild(option);
    });
  };

  const getTipoMaterialNombre = (id) => {
    const tipo = tiposMaterial.find(t => t.id === id);
    return tipo ? tipo.nombre : 'Desconocido';
  };

  const loadProductos = async () => {
    const res = await fetch(apiUrl);
    const data = await res.json();
    productList.innerHTML = '';
    data.forEach(prod => {
      const row = document.createElement('tr');

      row.innerHTML = `
        <td class="border px-2">${prod.id}</td>
        <td class="border px-2">${prod.codigo_ferremas}</td>
        <td class="border px-2">${prod.nombre}</td>
        <td class="border px-2">${prod.marca_nombre || prod.marca}</td>
        <td class="border px-2">${getTipoMaterialNombre(prod.tipo_material)}</td>
        <td class="border px-2">${prod.stock}</td>
        <td class="border px-2">${prod.precio}</td>
        <td class="border px-2">
          <img src="${prod.imagen_url || 'https://via.placeholder.com/60'}" alt="img" width="60" class="mb-2">
          <div>
            <button data-id="${prod.id}" class="edit-btn text-blue-600">Editar</button>
            <button data-id="${prod.id}" class="delete-btn text-red-600 ml-2">Eliminar</button>
          </div>
        </td>
      `;
      productList.appendChild(row);
    });
  };

  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const id = document.getElementById('producto-id').value;
    const payload = {
      codigo_ferremas: document.getElementById('codigo_ferremas').value,
      imagen_url: document.getElementById('imagen_url').value,
      nombre: document.getElementById('nombre').value,
      marca: parseInt(document.getElementById('marca').value),
      tipo_material_id: parseInt(document.getElementById('tipo_material').value),
      stock: parseInt(document.getElementById('stock').value),
      precio: parseInt(document.getElementById('precio').value),
    };

    const method = id ? 'PUT' : 'POST';
    const url = id ? `${apiUrl}${id}/` : apiUrl;

    const res = await fetch(url, {
      method,
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });

    if (res.ok) {
      form.reset();
      document.getElementById('producto-id').value = '';
      await loadProductos();
    } else {
      const errorData = await res.json();
      alert('Error al guardar producto: ' + JSON.stringify(errorData));
    }
  });

  productList.addEventListener('click', async (e) => {
    const id = e.target.dataset.id;
    if (e.target.classList.contains('edit-btn')) {
      const res = await fetch(`${apiUrl}${id}/`);
      const prod = await res.json();

      document.getElementById('producto-id').value = prod.id;
      document.getElementById('codigo_ferremas').value = prod.codigo_ferremas;
      document.getElementById('imagen_url').value = prod.imagen_url || '';
      document.getElementById('nombre').value = prod.nombre;
      document.getElementById('marca').value = prod.marca;
      document.getElementById('tipo_material').value = prod.tipo_material;
      document.getElementById('stock').value = prod.stock;
      document.getElementById('precio').value = prod.precio;
    }

    if (e.target.classList.contains('delete-btn')) {
      if (confirm('¿Estás seguro de eliminar este producto?')) {
        const res = await fetch(`${apiUrl}${id}/`, { method: 'DELETE' });
        if (res.ok) {
          await loadProductos();
        } else {
          alert('Error al eliminar producto');
        }
      }
    }
  });

  loadMarcas();
  loadTiposMaterial();
  loadProductos();
});
