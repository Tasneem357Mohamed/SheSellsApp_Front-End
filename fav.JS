document.addEventListener('DOMContentLoaded', function () {
    // Rotate logo text
    const text = document.querySelector('.logo_text');
    if (text) {
        text.innerHTML = text.innerText.split("").map(
            (char, i) => `<span style="transform:rotate(${i * 10}deg)">${char}</span>`
        ).join("");
    }

    // Populate the favorites on page load
    populateFavorites();
});

// Function to initialize and populate the favorites page
function populateFavorites() {
    const favoItemsContainer = document.querySelector('.favo-items');
    const emptyMessage = document.querySelector('.empty');
    const container = document.querySelector('.container');

    const favoritesItems = JSON.parse(localStorage.getItem('favoritesItems')) || [];

    if (favoritesItems.length === 0) {
        container.style.display = 'none';
        emptyMessage.style.display = 'block';
    } else {
        container.style.display = 'block';
        emptyMessage.style.display = 'none';

        favoItemsContainer.innerHTML = '';

        favoritesItems.forEach(item => {
            const favoItem = document.createElement('div');
            favoItem.className = 'favo-item';
            favoItem.innerHTML = `
                <div class="favo-items-image">
                    <img src="${item.image}" alt="${item.name}">
                    ${item.oldPrice ? '<div class="sale-badge">Sale</div>' : ''}
                </div>
                <div class="favo-item-details">
                    <h4>${item.name}</h4>
                    ${item.oldPrice ? `<p class="old-price">Old Price: $${item.oldPrice}</p>` : ''}
                    <p class="new-price">${item.oldPrice ? 'New Price' : 'Price'}: $${item.newPrice}</p>
                </div>
                <div class="favo-item-remove">
                    <button onclick="removeFromFavorites(this)">Remove</button>
                </div>
            `;
            favoItemsContainer.appendChild(favoItem);
        });
    }
}

// Function to remove a product from favorites
function removeFromFavorites(button) {
    const favoriteItem = button.closest('.favo-item');
    const itemName = favoriteItem.querySelector('.favo-item-details h4').innerText;

    let favoritesItems = JSON.parse(localStorage.getItem('favoritesItems')) || [];
    favoritesItems = favoritesItems.filter(item => item.name !== itemName);
    localStorage.setItem('favoritesItems', JSON.stringify(favoritesItems));

    favoriteItem.remove();

    const favoItemsContainer = document.querySelector('.favo-items');
    const emptyMessage = document.querySelector('.empty');
    if (favoritesItems.length === 0) {
        document.querySelector('.container').style.display = 'none';
        document.querySelector('.empty').style.display = 'block';
    }
}
