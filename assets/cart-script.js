const cartItemCount = document.getElementById('cartItemCount');

// Function to update the cart count on the page
const updateCartCount = (newCount) => {
    cartItemCount.textContent = newCount;
};

// Function to update the cart based on AJAX call
const updateCart = async () => {
    try {
        const response = await fetch("/cart.json");
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const cart = await response.json();
        console.log(cart);

        // Update the cart count on the page
        updateCartCount(cart.item_count);

        // Show/hide based on cart count
        if (cart.item_count > 0) {
            cartItemCount.classList.remove('no-display');
        } else {
            cartItemCount.classList.add('no-display');
        }
    } catch (error) {
        console.error('Error updating cart:', error);
        // Handle the error (e.g., show an error message to the user)
    }
};

// Attach to each form for adding items to the cart
const addToCartForms = document.querySelectorAll('form[action="/cart/add"]');
addToCartForms.forEach((form) => {
    form.addEventListener("submit", async (event) => {
        // Prevent form submission
        event.preventDefault();

        try {
            // Submit form with AJAX
            await fetch("/cart/add", {
                method: "post",
                body: new FormData(form),
            });

            // Update the cart after adding an item
            updateCart();
        } catch (error) {
            console.error('Error adding item to cart:', error);
          
        }
    });
});

// update when the page loads
updateCart();
