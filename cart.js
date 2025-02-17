document.addEventListener('DOMContentLoaded', () => {
    const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
    const cartItemsContainer = document.getElementById('cart-items');
    const cartTotalElement = document.getElementById('cart-total');

    function renderCart() {
        cartItemsContainer.innerHTML = '';
        let total = 0;

        if (cartItems.length === 0) {
            cartItemsContainer.innerHTML = '<p>Your cart is empty.</p>';
        } else {
            cartItems.forEach(item => {
                const itemDiv = document.createElement('div');
                itemDiv.className = 'cart-item';
                itemDiv.innerHTML = `
                    <h3>${item.name}</h3>
                    <p>$${item.price}</p>
                    <button class="btn remove-from-cart" data-id="${item.id}">Remove</button>
                `;
                cartItemsContainer.appendChild(itemDiv);
                total += item.price;
            });

            cartTotalElement.textContent = `$${total.toFixed(2)}`;
        }
    }

    function removeFromCart(e) {
        const itemId = parseInt(e.target.dataset.id);
        const updatedCart = cartItems.filter(item => item.id !== itemId);
        localStorage.setItem('cart', JSON.stringify(updatedCart));
        renderCart();
    }

    document.getElementById('checkout-btn').addEventListener('click', () => {
        window.location.href = 'checkout.html';
    });

    cartItemsContainer.addEventListener('click', (e) => {
        if (e.target.classList.contains('remove-from-cart')) {
            removeFromCart(e);
        }
    });

    renderCart();
});