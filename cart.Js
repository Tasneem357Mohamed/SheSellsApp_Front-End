document.addEventListener('DOMContentLoaded', function () {
    const text = document.querySelector('.logo_text p');
    text.innerHTML = text.innerText.split("").map(
        (char, i) => `<span style="transform:rotate(${i * 10}deg)">${char}</span>`
    ).join("");
});

// Function to initialize and populate the cart page
function populateCart() {
    const cartItemsContainer = document.querySelector('.cart-items');
    const checkoutButton = document.querySelector('.checkout-btn');
    const emptyMessage = document.querySelector('.empty');
    const container = document.querySelector('.container');

    const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];

    if (cartItems.length === 0) {
        // Hide container and checkout button when the cart is empty
        container.style.display = 'none';
        checkoutButton.style.display = 'none';
        emptyMessage.style.display = 'block'; // Show the empty cart message

        // Hide only the cart section, keeping the navigation and cart head visible
        cartItemsContainer.innerHTML = ''; // Clear any existing cart items
    } else {
        // Show the container and checkout button when there are items
        container.style.display = 'block';
        checkoutButton.style.display = 'block';
        emptyMessage.style.display = 'none'; // Hide the empty cart message

        // Populate cart items if there are any
        cartItemsContainer.innerHTML = '';

        cartItems.forEach(item => {
            const cartItem = document.createElement('div');
            cartItem.className = 'cart-item';
            cartItem.innerHTML = `
                <div class="cart-item-image">
                    <img src="${item.image}" alt="${item.name}">
                    ${item.oldPrice ? '<div class="sale-badge">Sale</div>' : ''} <!-- Display sale badge if old price exists -->
                </div>
                <div class="cart-item-details">
                    <h4>${item.name}</h4>
                    ${item.oldPrice ? `<p class="old-price">Old Price: $${item.oldPrice}</p>` : ''}
                    <p class="new-price">${item.oldPrice ? 'New Price' : 'Price'}: $${item.newPrice}</p>
                    <p>Quantity: ${item.quantity}</p>
                </div>
                <div class="cart-item-remove">
                    <button onclick="removeFromCart(this)">Remove</button>
                </div>
            `;
            cartItemsContainer.appendChild(cartItem);
        });
    }

    // Update the total price after populating the cart
    updateTotalPrice();
}

function updateTotalPrice() {
    const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    const totalPriceElement = document.getElementById('totalPrice');
    const totalPrice = cartItems.reduce((sum, item) => sum + (item.newPrice * item.quantity), 0);
    totalPriceElement.innerText = `$${totalPrice.toFixed(2)}`;
}

// Function to remove a product from the cart
function removeFromCart(button) {
    const cartItem = button.parentElement.parentElement;
    const itemName = cartItem.querySelector('.cart-item-details h4').innerText;
    let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    cartItems = cartItems.filter(item => item.name !== itemName);
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
    cartItem.remove();

    // Check if the cart is empty after removal
    if (cartItems.length === 0) {
        document.querySelector('.container').style.display = 'none';
        document.querySelector('.checkout-btn').style.display = 'none';
        document.querySelector('.empty').style.display = '';
    }
    // Update the total price after removal
    updateTotalPrice();
}

window.onload = populateCart;
// Get modal elements
var modal = document.getElementById("checkoutModal");
var btn = document.querySelector(".checkout-btn");
var span = document.getElementsByClassName("close")[0];
var confirmBtn = document.getElementById("confirmCheckout");
var cancelBtn = document.getElementById("cancelCheckout");

// When the user clicks on the button, open the modal
btn.onclick = function () {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
    modal.style.display = "none";
}

// When the user clicks on "Cancel", close the modal
cancelBtn.onclick = function () {
    modal.style.display = "none";
}

// When the user clicks on "Confirm", handle the checkout and redirect
confirmBtn.onclick = function () {
    // Redirect to the checkout page
    alert("Checkout Successfully completed");
    window.history.back();  // Replace with your actual checkout page URL
    modal.style.display = "none";
}


// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}