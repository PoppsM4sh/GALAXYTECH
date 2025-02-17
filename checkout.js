document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('checkout-form');
    const confirmationMessage = document.getElementById('confirmation-message');

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const email = form.email.value;
        const phone = form.phone.value;

        if (!email || !phone) {
            alert('Please fill in all fields.');
            return;
        }

        // Simulate order placement
        setTimeout(() => {
            confirmationMessage.innerHTML = `<p>Thank you! Your order has been placed.</p>`;
            form.reset();
            localStorage.removeItem('cart'); // Clear the cart after checkout
        }, 1000);
    });
});