const apiUrl = 'http://localhost:3000/inventory';

// Fetch and display inventory items
function fetchInventory() {
  fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
      const tableBody = document.querySelector('#inventory-table tbody');
      tableBody.innerHTML = '';
      data.forEach(item => {
        const row = document.createElement('tr');
        row.innerHTML = `
          <td>${item.name}</td>
          <td>${item.quantity}</td>
          <td>${item.price}</td>
          <td>
            <button onclick="deleteProduct(${item.id})">Delete</button>
            <button onclick="updateProduct(${item.id})">Update</button>
          </td>
        `;
        tableBody.appendChild(row);
      });
    })
    .catch(error => console.error('Error fetching inventory:', error));
}

// Add a new product
document.querySelector('#product-form').addEventListener('submit', function (event) {
  event.preventDefault();
  const name = document.querySelector('#name').value;
  const quantity = document.querySelector('#quantity').value;
  const price = document.querySelector('#price').value;

  fetch(apiUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ name, quantity, price })
  })
    .then(response => response.json())
    .then(() => {
      fetchInventory();
    })
    .catch(error => console.error('Error adding product:', error));
});

// Delete product
function deleteProduct(id) {
  fetch(`${apiUrl}/${id}`, { method: 'DELETE' })
    .then(() => fetchInventory())
    .catch(error => console.error('Error deleting product:', error));
}

// Update product (just a placeholder, further implementation needed)
function updateProduct(id) {
  const name = prompt('Enter new name:');
  const quantity = prompt('Enter new quantity:');
  const price = prompt('Enter new price:');

  fetch(`${apiUrl}/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ name, quantity, price })
  })
    .then(() => fetchInventory())
    .catch(error => console.error('Error updating product:', error));
}
