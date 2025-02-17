document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const productId = parseInt(urlParams.get('id'));

    const products = [
        {
            id: 1,
            name: 'iPhone 15 Pro Max',
            price: 1099,
            image: 'https://example.com/iphone15pro.jpg',
            description: 'The latest iPhone with advanced features.'
        },
        // Add more products here
    ];

    const product = products.find(p => p.id === productId);

    if (product) {
        const productInfo = document.getElementById('product-info');
        productInfo.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h2>${product.name}</h2>
            <p class="price">$${product.price}</p>
            <p>${product.description}</p>
            <button class="btn add-to-cart" data-id="${product.id}">Add to Cart</button>
        `;

        const addToCartButton = productInfo.querySelector('.add-to-cart');
        addToCartButton.addEventListener('click', () => {
            const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
            cartItems.push(product);
            localStorage.setItem('cart', JSON.stringify(cartItems));
            alert(`${product.name} has been added to your cart.`);
        });
    } else {
        document.body.innerHTML = '<h2>Product not found.</h2>';
    }
});