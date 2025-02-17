document.addEventListener('DOMContentLoaded', () => {
    // Product Data
    const products = [
        {
            id: 1,
            name: 'iPhone 15 Pro Max',
            price: 1099,
            category: 'new',
            storage: '256GB',
            color: 'Titanium Black',
            condition: 'new',
            image: 'https://example.com/iphone15promax.jpg'
        },
        {
            id: 2,
            name: 'iPhone 14 Pro',
            price: 799,
            category: 'used',
            storage: '128GB',
            color: 'Space Gray',
            condition: 'excellent',
            image: 'https://example.com/iphone14pro.jpg'
        },
        // Add more products here
    ];

    // Accessories Data
    const accessories = [
        {
            id: 101,
            name: 'Silicone Case for iPhone 15 Pro',
            price: 39,
            type: 'case',
            image: 'https://example.com/silicone-case.jpg'
        },
        {
            id: 102,
            name: 'Leather Case for iPhone 14 Pro',
            price: 49,
            type: 'case',
            image: 'https://example.com/leather-case.jpg'
        },
        {
            id: 103,
            name: 'USB-C Charger (1m)',
            price: 29,
            type: 'charger',
            image: 'https://example.com/usb-c-charger.jpg'
        },
        {
            id: 104,
            name: 'Wireless Charging Pad',
            price: 59,
            type: 'charger',
            image: 'https://example.com/wireless-charger.jpg'
        },
        {
            id: 105,
            name: 'Tempered Glass Screen Protector for iPhone 15 Pro',
            price: 19,
            type: 'screen-protector',
            image: 'https://example.com/glass-protector.jpg'
        },
        {
            id: 106,
            name: 'Matte Screen Protector for iPhone 14 Pro',
            price: 15,
            type: 'screen-protector',
            image: 'https://example.com/matte-protector.jpg'
        },
        // Add more accessories here
    ];

    // DOM Elements
    const productsGrid = document.getElementById('products-grid');
    const accessoriesGrid = document.getElementById('accessories-grid');
    const phoneCategoryButtons = document.querySelectorAll('.category-btn[data-category]');
    const accessoryCategoryButtons = document.querySelectorAll('#accessory-category-buttons .category-btn');
    const cartCount = document.querySelector('.cart-count');
    const searchInput = document.getElementById('search-input');
    const sortSelect = document.getElementById('sort-select');
    const filterSelect = document.getElementById('filter-select');
    const menuToggle = document.getElementById('menu-toggle');
    const navLinks = document.querySelector('.middleS .nav-links'); // Navigation links

    // Cart Items (stored in localStorage)
    let cartItems = JSON.parse(localStorage.getItem('cart')) || [];

    // Function to render products
    function renderProducts(category = 'all') {
        productsGrid.innerHTML = ''; // Clear the grid
        const filteredProducts = category === 'all' 
            ? products 
            : products.filter(product => product.category === category);
        filteredProducts.forEach(product => {
            const productCard = createProductCard(product);
            productsGrid.appendChild(productCard);
        });
        addCartEventListeners();
    }

    // Function to render accessories
    function renderAccessories(category = 'all') {
        accessoriesGrid.innerHTML = ''; // Clear the grid
        const filteredAccessories = category === 'all' 
            ? accessories 
            : accessories.filter(accessory => accessory.type === category);
        filteredAccessories.forEach(accessory => {
            const productCard = createProductCard(accessory);
            accessoriesGrid.appendChild(productCard);
        });
        addCartEventListeners();
    }

    // Function to create a product card
    function createProductCard(item) {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        productCard.innerHTML = `
            <img src="${item.image}" alt="${item.name}" class="product-image" loading="lazy">
            <h3>${item.name}</h3>
            <p class="price">$${item.price}</p>
            <button class="btn add-to-cart" data-id="${item.id}">Add to Cart</button>
        `;
        return productCard;
    }

    // Function to add "Add to Cart" event listeners
    function addCartEventListeners() {
        document.querySelectorAll('.add-to-cart').forEach(button => {
            button.addEventListener('click', addToCart);
        });
    }

    // Function to handle adding items to the cart
    function addToCart(e) {
        const itemId = parseInt(e.target.dataset.id);
        const item = products.find(p => p.id === itemId) || accessories.find(a => a.id === itemId);
        if (item) {
            cartItems.push(item); // Add item to cart
            localStorage.setItem('cart', JSON.stringify(cartItems)); // Save cart to localStorage
            updateCartCount(); // Update cart count
        }
    }

    // Function to update the cart count
    function updateCartCount() {
        cartCount.textContent = cartItems.length; // Update the cart count display
    }

    // Event listeners for phone category buttons
    phoneCategoryButtons.forEach(button => {
        button.addEventListener('click', () => {
            phoneCategoryButtons.forEach(btn => btn.classList.remove('active')); // Remove active class from all buttons
            button.classList.add('active'); // Add active class to the clicked button
            const category = button.dataset.category; // Get the selected category
            renderProducts(category); // Render products based on the category
        });
    });

    // Event listeners for accessory category buttons
    accessoryCategoryButtons.forEach(button => {
        button.addEventListener('click', () => {
            accessoryCategoryButtons.forEach(btn => btn.classList.remove('active')); // Remove active class from all buttons
            button.classList.add('active'); // Add active class to the clicked button
            const category = button.dataset.category; // Get the selected category
            renderAccessories(category); // Render accessories based on the category
        });
    });

    // Search functionality
    searchInput.addEventListener('input', () => {
        const query = searchInput.value.toLowerCase(); // Get the search query
        const filteredProducts = products.filter(product =>
            product.name.toLowerCase().includes(query)
        );
        renderProducts(filteredProducts.length > 0 ? null : 'all'); // Reset if no results
        productsGrid.innerHTML = ''; // Clear the grid before rendering
        filteredProducts.forEach(product => {
            const productCard = createProductCard(product);
            productsGrid.appendChild(productCard);
        });
        addCartEventListeners();
    });

    // Sorting functionality
    sortSelect.addEventListener('change', () => {
        const sortBy = sortSelect.value; // Get the selected sort option
        let sortedProducts = [...products]; // Copy the products array
        if (sortBy === 'price-low-to-high') {
            sortedProducts.sort((a, b) => a.price - b.price); // Sort by price ascending
        } else if (sortBy === 'price-high-to-low') {
            sortedProducts.sort((a, b) => b.price - a.price); // Sort by price descending
        }
        renderProducts(null); // Reset category filter
        productsGrid.innerHTML = ''; // Clear the grid before rendering
        sortedProducts.forEach(product => {
            const productCard = createProductCard(product);
            productsGrid.appendChild(productCard);
        });
        addCartEventListeners();
    });

    // Hamburger Menu Toggle
    if (menuToggle && navLinks) { // Ensure elements exist
        menuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active'); // Toggle the 'active' class
        });
    } else {
        console.error('Menu toggle or nav-links not found!');
    }

    // Close the menu when clicking outside of it
    document.addEventListener('click', (e) => {
        if (!menuToggle.contains(e.target) && !navLinks.contains(e.target)) {
            navLinks.classList.remove('active'); // Remove 'active' class if clicked outside
        }
    });

    // Initial render
    renderProducts('all'); // Display all phones by default
    renderAccessories('all'); // Display all accessories by default
    updateCartCount(); // Update the cart count
});