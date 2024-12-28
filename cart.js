let cart = [];

function addToCart(product) {
    cart.push(product);
    updateCart();
}

function updateCart() {
    const cartTableBody = document.querySelector('#cartTable tbody');
    cartTableBody.innerHTML = '';
    let total = 0;

    cart.forEach((item, index) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${item.name}</td>
            <td>${item.quantity}</td>
            <td>$${item.price.toFixed(2)}</td>
            <td>$${(item.price * item.quantity).toFixed(2)}</td>
            <td><button onclick="removeFromCart(${index})">Remove</button></td>
        `;
        cartTableBody.appendChild(row);
        total += item.price * item.quantity;
    });

    document.getElementById('totalAmount').innerText = total.toFixed(2);
}

function removeFromCart(index) {
    cart.splice(index, 1);
    updateCart();
}
document.getElementById('addToCartButton').addEventListener('click', function() {
    // Assuming you have item details to pass
    const item = {
        id: 1, // Example item ID
        name: 'Item Name',
        price: 29.99
    };

    // Store item in local storage or session storage
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.push(item);
    localStorage.setItem('cart', JSON.stringify(cart));

    // Redirect to cart.html
    window.location.href = 'cart.html';
});
// Example product addition
document.addEventListener('DOMContentLoaded', function() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const cartContainer = document.getElementById('cartItems');

    if (cart.length === 0) {
        cartContainer.innerHTML = '<p>Your cart is empty.</p>';
    } else {
        cart.forEach(item => {
            const itemElement = document.createElement('div');
            itemElement.innerHTML = `<p>${item.name} - $${item.price}</p>`;
            cartContainer.appendChild(itemElement);
        });
    }
});