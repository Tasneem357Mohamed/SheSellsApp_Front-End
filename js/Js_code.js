document.addEventListener('DOMContentLoaded', function () {
    const text = document.querySelector('.logo_text p');
    text.innerHTML = text.innerText.split("").map(
        (char, i) => <span style="transform:rotate(${i * 10}deg)">${char}</span>
    ).join("");
});
document.addEventListener('DOMContentLoaded', function () {
    const profileImages = document.getElementsByClassName('profile');
    const profileImageOpen = document.querySelector('.open-image');
    const menu = document.getElementById('dropdownMenu');

    Array.from(profileImages).forEach(profileImage => {
        profileImage.addEventListener('click', function () {
            if (menu.style.display === 'block') {
                menu.style.display = 'none';
                profileImage.style.opacity = '1';
                profileImageOpen.classList.remove('show');
            } else {
                menu.style.display = 'block';
                profileImage.style.opacity = '0';
                profileImageOpen.classList.add('show');
            }
        });
    });
    document.addEventListener('click', function (event) {
        if (!Array.from(profileImages).includes(event.target) && !menu.contains(event.target) && !profileImageOpen.contains(event.target)) {
            menu.style.display = 'none';
            Array.from(profileImages).forEach(profileImage => profileImage.style.opacity = '1');
            profileImageOpen.classList.remove('show');
        }
    });
});
document.addEventListener('DOMContentLoaded', function () {
    const cartImage = document.getElementById('cartImage');

    cartImage.addEventListener('click', function () {
        console.log('Image clicked'); // Debugging statement
        window.location.href = '#'; // Replace with your target URL
    });
});
function view__() {
    document.write(<a herf="https://www.duplichecker.com/ar/image-resizer.php"></a>)
}

function toggleFavorite(buttonNum) {
    var heartButtons = document.querySelectorAll('.heart-button');

    heartButtons.forEach(function (button, index) {
        if (index + 1 === buttonNum) {
            button.classList.add('clicked');
        } else {
            button.classList.remove('clicked');
        }
    });
}
