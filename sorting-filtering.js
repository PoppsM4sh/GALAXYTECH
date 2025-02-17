document.addEventListener('DOMContentLoaded', () => {
    const sortSelect = document.getElementById('sort-select');
    const filterSelect = document.getElementById('filter-select');
    const productsGrid = document.getElementById('products-grid');

    sortSelect.addEventListener('change', () => {
        const sortBy = sortSelect.value;
        let sortedProducts = [...products];

        if (sortBy === 'price-low-to-high') {
            sortedProducts.sort((a, b) => a.price - b.price);
        } else if (sortBy === 'price-high-to-low') {
            sortedProducts.sort((a, b) => b.price - a.price);
        }

        renderProducts(sortedProducts);
    });

    filterSelect.addEventListener('change', () => {
        const filterBy = filterSelect.value;
        const filteredProducts = products.filter(product =>
            product.category === filterBy || filterBy === 'all'
        );

        renderProducts(filteredProducts);
    });

    function renderProducts(products) {
        productsGrid.innerHTML = '';
        products.forEach(product => {
            const productCard = createProductCard(product);
            productsGrid.appendChild(productCard);
        });
    }
});
