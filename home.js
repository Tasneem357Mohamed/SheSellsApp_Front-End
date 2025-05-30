document.addEventListener('DOMContentLoaded', function () {
    const text = document.querySelector('.logo_text p');
    text.innerHTML = text.innerText.split("").map(
        (char, i) => `<span style="transform:rotate(${i * 10}deg)">${char}</span>`
    ).join("");
});






document.addEventListener('DOMContentLoaded', () => {
    // Check if user is logged in
    const isLoggedIn = localStorage.getItem('isLoggedIn');

    // Get elements for manipulation
    const linksDiv = document.getElementById('hidden');
    const profileSection = document.getElementById('profileSection');
    const welcomeMessage = document.getElementById('welcomeMessage');

    // Check the login status
    if (isLoggedIn === 'true') {
        // Hide login/registration links
        if (linksDiv) linksDiv.style.display = 'none';

        // Show profile section
        if (profileSection) {
            profileSection.style.display = 'block';
        }
    } else {
        // Show login/registration links if not logged in
        if (linksDiv) linksDiv.style.display = '';
        if (profileSection) profileSection.style.display = 'none';
    }
});

document.addEventListener('DOMContentLoaded', function () {
    const profileImage = document.getElementById('profileImage');
    const dropdownMenu = document.getElementById('dropdownMenu');
    const logoutLink = document.getElementById('logoutLink');
    const linksDiv = document.getElementById('hidden');
    const profileSection = document.getElementById('profileSection');

    // Toggle dropdown menu visibility
    profileImage.addEventListener('click', function (event) {
        event.stopPropagation(); // Prevent click from closing the menu immediately

        if (dropdownMenu.style.display === 'block') {
            dropdownMenu.style.display = 'none';
            profileImage.style.opacity = '1'; // Restore opacity when menu is hidden
        } else {
            dropdownMenu.style.display = 'block';
            profileImage.style.opacity = '0.5'; // Change opacity when menu is visible
        }
    });

    // Hide menu when clicking outside
    document.addEventListener('click', function (event) {
        if (!profileImage.contains(event.target) && !dropdownMenu.contains(event.target)) {
            dropdownMenu.style.display = 'none';
            profileImage.style.opacity = '1'; // Restore opacity when menu is hidden
        }
    });

    // Handle logout
    if (logoutLink) {
        logoutLink.addEventListener('click', function (event) {
            event.preventDefault(); // Prevent default link behavior

            // Remove login status from local storage
            localStorage.removeItem('isLoggedIn');

            // Redirect to home page
            window.location.replace("home.html");

            // Hide profile section and show login links
            if (profileSection) profileSection.style.display = 'none';
            if (linksDiv) linksDiv.style.display = 'block';
        });
    }
});

let currentSlide = 0;

function showSlide(n) {
    const slides = document.querySelectorAll('.slide');
    const totalSlides = slides.length;

    currentSlide = (currentSlide + n + totalSlides) % totalSlides;
    const slideWidth = slides[0].clientWidth;

    document.querySelector('.slides').style.transform = `translateX(-${currentSlide * slideWidth}px)`;
}

// Optional: Auto-slide functionality
setInterval(() => showSlide(1), 3000); // Change slide every 3 seconds



