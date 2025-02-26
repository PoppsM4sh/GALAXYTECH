document.addEventListener('DOMContentLoaded', () => {
    // Product Data
    const products = [
        { id: 1, name: 'iPhone 14 Pro Max', price: 21000, category: 'new', storage: '256GB', condition: 'new', image: 'images/newPhones/iphone14ProMax.webp' },
        { id: 2, name: 'iPhone 14 Pro Max', price: 19000, category: 'new', storage: '128GB', condition: 'new', image: 'images/newPhones/iphone_14_pro_deep_purple_pdp_image_position-1a__eaen_1_2_1_2.webp' },
        { id: 3, name: 'iPhone 14 Pro', price: 16500, category: 'new', storage: '128GB', condition: 'new', image: 'images/newPhones/iphone14ProMax.webp' },
        { id: 4, name: 'iPhone 13 Pro Max', price: 16500, category: 'new', storage: '128GB', condition: 'new', image: 'images/newPhones/iphone_13_pro_max_graphite_pdp_image_position-1a__wwen_1.webp' },
        { id: 5, name: 'iPhone 13 Pro Max', price: 15000, category: 'used', storage: '128GB', condition: 'pre-owned', image: 'images/preOwned/iPhone_13_Pro_Green.webp' },
        { id: 6, name: 'iPhone 13 Pro', price: 15000, category: 'new', storage: '128GB', condition: 'new', image: 'images/newPhones/iphone_13_pro_max_silver_pdp_image_position-1a__wwen_1.webp' },
        { id: 7, name: 'iPhone 13 Pro', price: 13000, category: 'used', storage: '128GB', condition: 'pre-owned', image: 'images/preOwned/iPhone_13_Pro_Blue.webp' },
        { id: 8, name: 'iPhone 13', price: 12000, category: 'new', storage: '128GB', condition: 'new', image: 'images/newPhones/iphone_13_midnight_pdp_image_position-1a__wwen_1_2.webp' },
        { id: 9, name: 'iPhone 13', price: 9500, category: 'used', storage: '128GB', condition: 'pre-owned', image: 'images/preOwned/iPhone_13_Black_42511b71-1d41-49d3-819e-57a3f44a7360.webp' },
        { id: 10, name: 'iPhone 12 Pro Max', price: 12500, category: 'new', storage: '128GB', condition: 'new', image: 'images/newPhones/iphone12ProMaxPacificBlue.webp' },
        { id: 11, name: 'iPhone 12 Pro Max', price: 11500, category: 'used', storage: '128GB', condition: 'pre-owned', image: 'images/preOwned/iPhone_12_Pro_Silver_PDP_Image_Position-2__en-US_1.webp' },
        { id: 12, name: 'iPhone 12 Pro', price: 9000, category: 'used', storage: '128GB', condition: 'pre-owned', image: 'images/preOwned/iPhone_12_Pro_Gold_PDP_Image_Position-2__en-US_1.webp' },
        { id: 13, name: 'iPhone 12', price: 9500, category: 'new', storage: '128GB', condition: 'new', image: 'images/newPhones/iphone_12__p_red_pdp_image_position-2__en-us.webp' },
        { id: 14, name: 'iPhone 12', price: 9000, category: 'new', storage: '64GB', condition: 'new', image: 'images/newPhones/iphone_12_black_image_position-2__en-us_4.webp' },
        { id: 15, name: 'iPhone 12', price: 8000, category: 'used', storage: '64GB', condition: 'pre-owned', image: 'images/preOwned/iPhone_12_Blue.webp' },
        { id: 16, name: 'iPhone 11 Pro Max', price: 10000, category: 'new', storage: '128GB', condition: 'new', image: 'images/newPhones/iphone11Max_Silver_45e19aa0-8787-438c-b6c6-dcab624f3c46.webp' },
        { id: 17, name: 'iPhone 11 Pro', price: 8500, category: 'new', storage: '64GB', condition: 'new', image: 'images/newPhones/iphone11Max_Midnight_green_3476be6c-41a7-4f1b-8605-3d42d02cf9c7.webp' },
        { id: 18, name: 'iPhone 11', price: 7000, category: 'new', storage: '128GB', condition: 'new', image: 'images/newPhones/iPhone_11_Yellow.webp' },
        { id: 19, name: 'iPhone 11', price: 6500, category: 'new', storage: '64GB', condition: 'new', image: 'images/newPhones/iPhone_11_Purple.webp' },
        { id: 20, name: 'iPhone 11', price: 6000, category: 'used', storage: '128GB', condition: 'pre-owned', image: 'images/preOwned/iPhone_11_Product_Red.webp' },
        { id: 21, name: 'iPhone 11', price: 5500, category: 'used', storage: '64GB', condition: 'pre-owned', image: 'images/preOwned/iPhone_11_White.webp' },
        { id: 22, name: 'iPhone XR', price: 6000, category: 'new', storage: '128GB', condition: 'new', image: 'images/newPhones/iPhoneXr_Black_PureAngles_Q418_SCREEN.webp' },
        { id: 23, name: 'iPhone XR', price: 5500, category: 'new', storage: '64GB', condition: 'new', image: 'images/newPhones/iPhoneXr_Blue_PureAngles_Q418_SCREEN.webp' },
        { id: 24, name: 'iPhone XR', price: 5500, category: 'used', storage: '128GB', condition: 'pre-owned', image: 'images/preOwned/iPhoneXr_Black_PureAngles_Q418_SCREEN.webp' },
        { id: 25, name: 'iPhone XR', price: 5000, category: 'used', storage: '64GB', condition: 'pre-owned', image: 'images/preOwned/iPhoneXr_White_PureAngles_Q418_SCREEN.webp' },
        { id: 26, name: 'iPhone X', price: 4800, category: 'new', storage: '64GB', condition: 'new', image: 'images/newPhones/iPhoneX_Silver_34BR_34FL_2up_Q418_SCREEN.webp' },
        { id: 27, name: 'iPhone X', price: 4500, category: 'used', storage: '64GB', condition: 'pre-owned', image: 'images/preOwned/iPhoneX_SpaceGray_34BR_34FL_2up_Q418_SCREEN.webp' },
        { id: 28, name: 'iPhone 8 Plus', price: 4500, category: 'new', storage: '64GB', condition: 'new', image: 'images/newPhones/iPhone_8_Plus_Silver.webp' },
        { id: 29, name: 'iPhone 8 Plus', price: 4200, category: 'used', storage: '64GB', condition: 'pre-owned', image: 'images/preOwned/iPhone_8_Plus_Space_Grey.webp' },
        { id: 30, name: 'iPhone 8', price: 3500, category: 'used', storage: '64GB', condition: 'pre-owned', image: 'images/preOwned/iPhone8_Gold_34BR_34FL_2up_Q418_SCREEN.webp' },
        { id: 31, name: 'iPhone 7 Plus', price: 4000, category: 'new', storage: '128GB', condition: 'new', image: 'images/newPhones/iPhone7Plus_Gold_2Up_34L_Q418_SCREEN.webp' },
        { id: 32, name: 'iPhone 7 Plus', price: 3500, category: 'used', storage: '128GB', condition: 'pre-owned', image: 'images/preOwned/iPhone7Plus_Black_2Up_34L_Q418_SCREEN.webp' },
        { id: 33, name: 'iPhone 7', price: 2800, category: 'used', storage: '32GB', condition: 'pre-owned', image: 'images/preOwned/iPhone7_Silver_2Up_34L_US_EN_SCREEN.webp' }
    ];

    // Accessories Data
    const accessories = [
        { id: 101, name: 'Silicone Case for iPhone 15 Pro', price: 39, type: 'case', image: 'https://example.com/silicone-case.jpg' },
        { id: 102, name: 'Leather Case for iPhone 14 Pro', price: 49, type: 'case', image: 'https://example.com/leather-case.jpg' },
        { id: 103, name: 'Wireless Charger', price: 99, type: 'charger', image: 'https://example.com/wireless-charger.jpg' },
        { id: 104, name: 'Screen Protector', price: 19, type: 'screen-protector', image: 'https://example.com/screen-protector.jpg' }
    ];

    // DOM Elements
    const productsGrid = document.getElementById('products-grid');
    const accessoriesGrid = document.getElementById('accessories-grid');
    const phoneCategoryButtons = document.querySelectorAll('.category-btn[data-category]');
    const accessoryCategoryButtons = document.querySelectorAll('#accessory-category-buttons .category-btn');
    const cartCount = document.querySelector('.cart-count');
    const searchInput = document.getElementById('search-input');
    const sortSelect = document.getElementById('sort-select');
    const modelSelect = document.getElementById('model-select'); // Model filter dropdown
    const clearFilterButton = document.getElementById('clear-filter');
    const menuToggle = document.getElementById('menu-toggle');
    const navLinks = document.querySelector('.middleS .nav-links');

    // Cart Items (stored in localStorage)
    let cartItems = JSON.parse(localStorage.getItem('cart')) || [];

    // Function to render products
    function renderProducts(category = 'all', model = 'all') {
        productsGrid.innerHTML = '';
        let filteredProducts = products;

        if (category !== 'all') {
            filteredProducts = filteredProducts.filter(product => product.category === category);
        }

        if (model !== 'all') {
            filteredProducts = filteredProducts.filter(product => product.name.includes(model));
        }

        // Sort by ID (ascending order) to display products from ID 1 to ID 33
        filteredProducts.sort((a, b) => a.id - b.id);

        filteredProducts.forEach(product => {
            const productCard = createProductCard(product);
            productsGrid.appendChild(productCard);
        });

        addCartEventListeners();
    }

    // Function to render accessories
    function renderAccessories(category = 'all') {
        accessoriesGrid.innerHTML = ''; // Clear the grid before rendering
        const filteredAccessories = category === 'all' ? accessories : accessories.filter(accessory => accessory.type === category);

        if (filteredAccessories.length > 0) {
            filteredAccessories.forEach(accessory => {
                const productCard = createProductCard(accessory);
                accessoriesGrid.appendChild(productCard);
            });
        } else {
            // Display a message if no accessories match the filter
            const noResultsMessage = document.createElement('p');
            noResultsMessage.textContent = 'No accessories found in this category.';
            noResultsMessage.style.textAlign = 'center';
            noResultsMessage.style.color = '#AAABBB';
            accessoriesGrid.appendChild(noResultsMessage);
        }

        addCartEventListeners();
    }

    // Function to create a product card
    function createProductCard(item) {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        productCard.innerHTML = `
            <img src="${item.image}" alt="${item.name}" class="product-image" onerror="this.src='images/placeholder.png';">
            <h3>${item.name}</h3>
            <p class="price">R${item.price}</p>
            <p>Storage: ${item.storage || 'N/A'}</p>
            <p>Condition: ${item.condition ? item.condition.charAt(0).toUpperCase() + item.condition.slice(1) : 'N/A'}</p>
            <button class="add-to-cart" data-id="${item.id}">Add to Cart</button>
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
        const existingItem = cartItems.find(item => item.id === itemId);

        if (!existingItem) {
            const item = products.find(p => p.id === itemId) || accessories.find(a => a.id === itemId);
            if (item) {
                cartItems.push(item);
                localStorage.setItem('cart', JSON.stringify(cartItems));
                updateCartCount();
            }
        } else {
            alert('This item is already in your cart.');
        }
    }

    // Function to update the cart count
    function updateCartCount() {
        cartCount.textContent = cartItems.length;
    }

    // Event listeners for phone category buttons
    phoneCategoryButtons.forEach(button => {
        button.addEventListener('click', () => {
            phoneCategoryButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            const category = button.dataset.category;
            renderProducts(category, modelSelect.value);
        });
    });

    // Event listeners for accessory category buttons
    accessoryCategoryButtons.forEach(button => {
        button.addEventListener('click', () => {
            accessoryCategoryButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            const category = button.dataset.category;
            renderAccessories(category);
        });
    });

    // Search functionality
    searchInput.addEventListener('input', () => {
        const query = searchInput.value.toLowerCase();
        const filteredProducts = products.concat(accessories).filter(item =>
            item.name.toLowerCase().includes(query) ||
            item.storage?.toLowerCase().includes(query) ||
            item.condition?.toLowerCase().includes(query) ||
            item.type?.toLowerCase().includes(query)
        );

        productsGrid.innerHTML = '';
        accessoriesGrid.innerHTML = '';

        if (filteredProducts.length > 0) {
            filteredProducts.forEach(item => {
                const productCard = createProductCard(item);
                productsGrid.appendChild(productCard);
            });
        } else {
            productsGrid.innerHTML = '<p style="text-align: center; color: #AAABBB;">No results found.</p>';
        }

        addCartEventListeners();
    });

    // Sorting functionality
    sortSelect.addEventListener('change', () => {
        const sortBy = sortSelect.value;
        let sortedProducts = [...products];

        if (sortBy === 'price-low-to-high') {
            sortedProducts.sort((a, b) => a.price - b.price);
        } else if (sortBy === 'price-high-to-low') {
            sortedProducts.sort((a, b) => b.price - a.price);
        } else if (sortBy === 'default') {
            sortedProducts.sort((a, b) => a.id - b.id); // Default: Sort by ID
        }

        renderProducts(null); // Reset filters
        productsGrid.innerHTML = '';
        sortedProducts.forEach(product => {
            const productCard = createProductCard(product);
            productsGrid.appendChild(productCard);
        });

        addCartEventListeners();
    });

    // Populate model dropdown dynamically
    function populateModelDropdown() {
        const uniqueModels = ['all', ...new Set(products.map(product => product.name.split(' ')[1]))];
        modelSelect.innerHTML = ''; // Clear existing options

        uniqueModels.forEach(model => {
            const option = document.createElement('option');
            option.value = model;
            option.textContent = model === 'all' ? 'All Models' : `iPhone ${model}`;
            modelSelect.appendChild(option);
        });
    }

    populateModelDropdown();

    // Model filter functionality
    modelSelect.addEventListener('change', () => {
        const selectedModel = modelSelect.value;
        const selectedCategory = document.querySelector('.category-btn.active')?.dataset.category || 'all';
        renderProducts(selectedCategory, selectedModel);
    });

    // Clear filter button functionality
    clearFilterButton.addEventListener('click', () => {
        modelSelect.value = 'all'; // Reset model filter
        sortSelect.value = 'default'; // Reset sort filter
        phoneCategoryButtons[0].classList.add('active'); // Re-enable "All" button
        phoneCategoryButtons.forEach(btn => btn !== phoneCategoryButtons[0] && btn.classList.remove('active'));

        renderProducts('all'); // Reset to default view
    });

    // Hamburger Menu Toggle
    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active'); // Toggle visibility
        });
    }

    // Close the menu when clicking outside of it
    document.addEventListener('click', (e) => {
        if (!menuToggle.contains(e.target) && !navLinks.contains(e.target)) {
            navLinks.classList.remove('active'); // Hide menu
        }
    });

    // Initial render
    renderProducts('all');
    renderAccessories('all');
    updateCartCount();
});