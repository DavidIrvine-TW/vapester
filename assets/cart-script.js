const cartItemCount = document.getElementById('cartItemCount');
const variantTitleElement = document.querySelector('.product-page-variant-title');
const userFeedback = document.getElementById('user-feedback');


const updateCartCount = (newCount) => {
    cartItemCount.textContent = newCount;
};


const updateCart = async () => {
    try {
        const response = await fetch("/cart.json");
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const cart = await response.json();

        updateCartCount(cart.item_count);

      
        if (cart.item_count > 0) {
            cartItemCount.classList.remove('no-display');
        } else {
            cartItemCount.classList.add('no-display');
        }
    } catch (error) {
        console.error('Error updating cart:', error);
      
    }
};


const removeItemFromCart = async (variantId) => {
    const updates = { [variantId]: 0 };
    try {
        const response = await fetch(`/cart/update.js`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ updates })
        });

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}, ${await response.text()}`);
        }

      
        updateCart();
        window.location.reload();
    } catch (error) {
        console.error('Error removing item from cart:', error);
        
    }
};


const addToCartForms = document.querySelectorAll('form[action="/cart/add"]');
addToCartForms.forEach((form) => {
    form.addEventListener("submit", async (event) => {
  
        event.preventDefault();

        try {
          
            await fetch("/cart/add", {
                method: "post",
                body: new FormData(form),
            });

        
            updateCart();
            userFeedback.textContent = `Cart updated`;
            setTimeout(() => {
                userFeedback.textContent = '';
            }, 5000);

        } catch (error) {
            console.error('Error adding item to cart:', error);
        }
    });
});


const removeItemLinks = document.querySelectorAll('.remove-item');
removeItemLinks.forEach((link) => {
    link.addEventListener("click", async (event) => {
     
        event.preventDefault();

       
        const variantId = link.closest('[data-variant-id]').getAttribute('data-variant-id');

     
        await removeItemFromCart(variantId);
        console.log(variantId)
        console.log('hello')
    });
});


updateCart();
