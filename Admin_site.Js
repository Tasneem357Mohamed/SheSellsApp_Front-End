// SIDEBAR DROPDOWN
const allDropdown = document.querySelectorAll('#sidebar .side-dropdown');
const sidebar = document.getElementById('sidebar');

allDropdown.forEach(item => {
    const a = item.parentElement.querySelector('a:first-child');
    a.addEventListener('click', function (e) {
        e.preventDefault();

        if (!this.classList.contains('active')) {
            allDropdown.forEach(i => {
                const aLink = i.parentElement.querySelector('a:first-child');

                aLink.classList.remove('active');
                i.classList.remove('show');
            })
        }

        this.classList.toggle('active');
        item.classList.toggle('show');
    })
})





// SIDEBAR COLLAPSE
const toggleSidebar = document.querySelector('nav .toggle-sidebar');
const allSideDivider = document.querySelectorAll('#sidebar .divider');

if (sidebar.classList.contains('hide')) {
    allSideDivider.forEach(item => {
        item.textContent = '-'
    })
    allDropdown.forEach(item => {
        const a = item.parentElement.querySelector('a:first-child');
        a.classList.remove('active');
        item.classList.remove('show');
    })
} else {
    allSideDivider.forEach(item => {
        item.textContent = item.dataset.text;
    })
}

toggleSidebar.addEventListener('click', function () {
    sidebar.classList.toggle('hide');

    if (sidebar.classList.contains('hide')) {
        allSideDivider.forEach(item => {
            item.textContent = '-'
        })

        allDropdown.forEach(item => {
            const a = item.parentElement.querySelector('a:first-child');
            a.classList.remove('active');
            item.classList.remove('show');
        })
    } else {
        allSideDivider.forEach(item => {
            item.textContent = item.dataset.text;
        })
    }
})




sidebar.addEventListener('mouseleave', function () {
    if (this.classList.contains('hide')) {
        allDropdown.forEach(item => {
            const a = item.parentElement.querySelector('a:first-child');
            a.classList.remove('active');
            item.classList.remove('show');
        })
        allSideDivider.forEach(item => {
            item.textContent = '-'
        })
    }
})



sidebar.addEventListener('mouseenter', function () {
    if (this.classList.contains('hide')) {
        allDropdown.forEach(item => {
            const a = item.parentElement.querySelector('a:first-child');
            a.classList.remove('active');
            item.classList.remove('show');
        })
        allSideDivider.forEach(item => {
            item.textContent = item.dataset.text;
        })
    }
})




// PROFILE DROPDOWN
const profile = document.querySelector('nav .profile');
const imgProfile = profile.querySelector('img');
const dropdownProfile = profile.querySelector('.profile-link');

imgProfile.addEventListener('click', function () {
    dropdownProfile.classList.toggle('show');
})




// MENU
const allMenu = document.querySelectorAll('main .content-data .head .menu');

allMenu.forEach(item => {
    const icon = item.querySelector('.icon');
    const menuLink = item.querySelector('.menu-link');

    icon.addEventListener('click', function () {
        menuLink.classList.toggle('show');
    })
})



window.addEventListener('click', function (e) {
    if (e.target !== imgProfile) {
        if (e.target !== dropdownProfile) {
            if (dropdownProfile.classList.contains('show')) {
                dropdownProfile.classList.remove('show');
            }
        }
    }

    allMenu.forEach(item => {
        const icon = item.querySelector('.icon');
        const menuLink = item.querySelector('.menu-link');

        if (e.target !== icon) {
            if (e.target !== menuLink) {
                if (menuLink.classList.contains('show')) {
                    menuLink.classList.remove('show')
                }
            }
        }
    })
})





// PROGRESSBAR
const allProgress = document.querySelectorAll('main .card .progress');

allProgress.forEach(item => {
    item.style.setProperty('--value', item.dataset.value)
})


// APEXCHART
var options = {
    series: [{
        name: 'series1',
        data: [31, 40, 28, 51, 42, 109, 100]
    }, {
        name: 'series2',
        data: [11, 32, 45, 32, 34, 52, 41]
    }],
    chart: {
        height: 350,
        type: 'area'
    },
    dataLabels: {
        enabled: false
    },
    stroke: {
        curve: 'smooth'
    },
    xaxis: {
        type: 'datetime',
        categories: ["2018-09-19T00:00:00.000Z", "2018-09-19T01:30:00.000Z", "2018-09-19T02:30:00.000Z", "2018-09-19T03:30:00.000Z", "2018-09-19T04:30:00.000Z", "2018-09-19T05:30:00.000Z", "2018-09-19T06:30:00.000Z"]
    },
    tooltip: {
        x: {
            format: 'dd/MM/yy HH:mm'
        },
    },
};
var options = {
    chart: {
        type: 'area',  // Specify area chart type
        height: 400,   // Height of the chart
        zoom: {
            enabled: true, // Enable zooming
        }
    },
    legend: {
        colors: '#fd71ae' // Set color for legend labels
    },
    tooltip: {
        theme: 'light' // or 'light'
    },
    series: [
        {
            name: 'Series 1',
            data: [25, 13, 16, 13, 20, 13, 20, 18, 15, 10, 15, 5]  // Custom data for Series 1
        },
        {
            name: 'Series 2',
            labels: {
                colors: '#9f0849' // Set color for legend labels
            },
            data: [15, 5, 7, 15, 10, 18, 15, 9, 6.5, 3.5, 1, 0]  // Custom data for Series 2
        }
    ],
    colors: ['#fd71ae', '#9f0849'], // Shades of pink for the areas
    xaxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'], // X-axis labels
        title: {
            text: 'Months'
        }
    },
    yaxis: {
        title: {
            text: 'Values',
            style: {
                colors: '#FF4081', // Set the color for y-axis labels
            }
        },
        min: 0 // Set minimum value to 0
    },
    grid: {
        borderColor: '#9f0849', // Color of grid lines
        strokeDashArray: 5,     // Style of grid lines (dashed)
        position: 'back'        // Place grid lines behind the areas
    },
    dataLabels: {
        enabled: false // Disable data labels on points
    },
    stroke: {
        curve: 'smooth', // Smooth lines
        width: 2         // Line width
    },
    markers: {
        size: 6 // Size of markers on data points
    },
    tooltip: {
        shared: true, // Show a shared tooltip for both areas
        intersect: false
    }
};
var chart = new ApexCharts(document.querySelector("#chart"), options);
chart.render();

document.addEventListener("DOMContentLoaded", function () {
    // Get references to the product container and form
    const productsContainer = document.getElementById('productsContainer');
    const addProductForm = document.getElementById('addProductForm');

    // Initial list of products
    let products = [
        { name: "Nars foundation shade 304", price: 50.00, sale: "10%", image: "Girls/foundations/Nars.png" },
        { name: "Dior EyeLiner", price: 30.80, sale: "0%", image: "Girls/liner/Dior_liner.png" }
    ];


    // Initial render of products
    renderProducts();
    function renderProducts() {
        productsContainer.innerHTML = ''; // Clear the container before rendering
        products.forEach((product, index) => {
            const productDiv = document.createElement('div');
            productDiv.className = 'Item';

            // Check if the product is on sale
            const isOnSale = product.sale !== "0%";

            // Create the HTML based on whether the product is on sale
            productDiv.innerHTML = `
                ${isOnSale ? `
                    <div class="sale-badge">
                        <p>Sale <span class="sale_per">${product.sale}</span></p>
                    </div>
                ` : ''}
                <div class="item_img">
                    <img src="${product.image}" alt="${product.name}">
                </div>
                <div class="item_des">
                    <div class="des_name">
                        <p>${product.name}</p>
                    </div>
                    <div class="des_price">
                        ${isOnSale ? `
                            <span class="old_price">$${(product.price / (1 - parseFloat(product.sale) / 100)).toFixed(2)}</span>
                            <span class="new_price">$${product.price.toFixed(2)}</span>
                        ` : `
                            <p>$${product.price.toFixed(2)}</p>
                        `}
                    </div>
                </div>
                   <div class="item_button">
    <div class="actions">
        <button onclick="deleteProduct(${index})" class="btn btn-danger">Delete Product</button>
        <button onclick="removeSale(${index})" class="btn btn-secondary">Remove Sale</button>
    </div>
</div>
            `;

            productsContainer.appendChild(productDiv); // Append the product div to the container
        });
    }


    // Function to handle form submission and add a new product
    addProductForm.addEventListener('submit', function (e) {
        e.preventDefault(); // Prevent the default form submission

        const productName = document.getElementById('productName').value.trim();
        const productPrice = parseFloat(document.getElementById('productPrice').value);
        const productSale = document.getElementById('productSale').value.trim() || "0%";
        const productImage = document.getElementById('productImage').value.trim();

        // Check for duplicate product name
        const isDuplicate = products.some(product => product.name === productName);
        if (isDuplicate) {
            alert('Product name already exists. Please enter a unique product name.');
            return; // Exit the function to prevent adding a duplicate product
        }

        // Add the new product to the array
        products.push({ name: productName, price: productPrice, sale: productSale, image: productImage });

        // Render the updated products list
        renderProducts();

        // Reset the form after submission
        addProductForm.reset();
    });

    // Function to delete a product
    window.deleteProduct = function (index) {
        if (confirm("Are you sure you want to delete this product?")) {
            products.splice(index, 1); // Remove the product from the array
            renderProducts(); // Re-render the products
        }
    };

    // Function to remove the sale from a product
    window.removeSale = function (index) {
        if (confirm("Are you sure you want to remove the sale from this product?")) {
            products[index].sale = "0%"; // Set sale to 0%
            renderProducts(); // Re-render the products
        }
    };

    // Function to delete a user (Admin only)
    window.deleteUser = function () {
        const userNameToDelete = document.getElementById('userNameToDelete').value;
        if (userNameToDelete) {
            alert(`User ${userNameToDelete} would be deleted (this requires server-side logic).`);
            document.getElementById('userNameToDelete').value = '';
        } else {
            alert('Please enter a username to delete.');
        }
    };
});

document.addEventListener('DOMContentLoaded', () => {
    const chatForm = document.getElementById('chat-form');
    const chatInput = document.getElementById('chat-input');
    const chatBox = document.querySelector('.chat-box');

    chatForm.addEventListener('submit', (e) => {
        e.preventDefault(); // Prevent form from submitting the traditional way

        const messageText = chatInput.value.trim();
        if (messageText) {
            // Get current time in 24-hour format
            const now = new Date();
            const hours = String(now.getHours()).padStart(2, '0');
            const minutes = String(now.getMinutes()).padStart(2, '0');
            const timeString = `${hours}:${minutes}`;

            // Create a new message element
            const msgElement = document.createElement('div');
            msgElement.className = 'msg me'; // or 'msg' if not a sent message
            msgElement.innerHTML = `
               <div class="chat">
                    <div class="profile">
                        <span class="time">${timeString}</span>
                    </div>
                    <p>${messageText}</p>
                </div>
            `;

            // Append the new message to the chat box
            chatBox.appendChild(msgElement);

            // Clear the input
            chatInput.value = '';

            // Scroll to the bottom of the chat box
            chatBox.scrollTop = chatBox.scrollHeight;
        }
    });
});
document.addEventListener('DOMContentLoaded', function () {
    const text = document.querySelector('.logo_text p');
    text.innerHTML = text.innerText.split("").map(
        (char, i) => `<span style="transform:rotate(${i * 10}deg)">${char}</span>`
    ).join("");
});
