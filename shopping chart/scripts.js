// scripts.js
document.addEventListener('DOMContentLoaded', function () {
    const cartItems = document.querySelector('.cart-items');
    const totalPriceEl = document.getElementById('total-price');
    const checkoutButton = document.getElementById('checkout-button');

    let cart = [];

    function renderCart() {
        cartItems.innerHTML = '';
        let total = 0;

        cart.forEach(item => {
            const itemEl = document.createElement('li');
            itemEl.textContent = `${item.name} - $${item.price.toFixed(2)}`;
            cartItems.appendChild(itemEl);
            total += item.price;
        });

        totalPriceEl.textContent = total.toFixed(2);
    }

    // Example of adding items to the cart
    cart.push({ name: 'earbuds', price: 132.50 });
    cart.push({ name: 'Laptop', price: 15000.50 });
    cart.push({ name: 'earphones', price: 30.00 });

    renderCart();

    checkoutButton.addEventListener('click', function () {
        alert(`Thank you for your purchase! Total: $${totalPriceEl.textContent}`);
    });
});
