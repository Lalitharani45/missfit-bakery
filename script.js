
const menuIcon=document.querySelector('.menu-icon');
const navBar=document.querySelector('.navbar');



menuIcon.addEventListener('click',()=>{
    navBar.classList.add('active');
    cartItemsContainer.classList.remove('active');
   
});

const cartIcon=document.querySelector('.cart-icon');
const cartItemsContainer=document.querySelector('.cart-items-container');

cartIcon.addEventListener('click',()=>{
    cartItemsContainer.classList.add('active');
    
    navBar.classList.remove('active');
});


window.onscroll=()=>{
    cartItemsContainer.classList.remove('active');
    
    navBar.classList.remove('active');
}


document.addEventListener('DOMContentLoaded', function() {
    const addToCartButtons = document.querySelectorAll('.cake-card .btn, .donut-card .btn');
    const cartItemsContainer = document.querySelector('.cart-items-container');

    addToCartButtons.forEach(button => {
        button.addEventListener('click', function(event) {
            event.preventDefault();

            const product = this.parentElement;
            const productName = product.querySelector('h3').textContent;
            const productPrice = product.querySelector('.price').textContent;

            // Create cart item HTML
            const cartItem = `
                <div class="cart-item">
                    <span class="fa-solid fa-xmark"></span>
                    <img src="${product.querySelector('img').src}" alt=""/>
                    <div class="content">
                        <h3>${productName}</h3>
                        <div class="price">${productPrice}</div>
                    </div>
                </div>
            `;

            // Append cart item to cart items container
            cartItemsContainer.insertAdjacentHTML('beforeend', cartItem);

            // Remove the item from cakes/donuts section
            product.remove();
        });
    });
});





// Select all 'add to cart' buttons
const addToCartButtons = document.querySelectorAll('.cake-card .btn, .donut-card .btn');

// Select the cart total display element
const cartTotalDisplay = document.getElementById('cart-total');

// Initialize total amount
let totalAmount = 0;

// Add event listeners to each 'add to cart' button
addToCartButtons.forEach(button => {
    button.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent default behavior of the link click
        
        // Extract the price from the clicked item
        const priceString = this.previousElementSibling.textContent.trim();
        const price = parseFloat(priceString.replace('₹', '').replace('/-', '').trim());
        
        // Add the price to the total amount
        totalAmount += price;
        
        // Update the cart total display
        cartTotalDisplay.textContent = `Total: ₹${totalAmount.toFixed(2)}/-`;
    });
});




// Vanilla JavaScript for smooth scrolling to anchor links
document.addEventListener("DOMContentLoaded", () => {
    const navbarLinks = document.querySelectorAll(".navbar a");

    navbarLinks.forEach((link) => {
        link.addEventListener("click", smoothScroll);
    });

    function smoothScroll(e) {
        e.preventDefault();
        const targetId = e.currentTarget.getAttribute("href").substring(1);
        const targetSection = document.getElementById(targetId);

        if (targetSection) {
            targetSection.scrollIntoView({
                behavior: "smooth",
                block: "start",
            });
        }
    }
});



document.querySelectorAll('.nav-link').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        const targetSectionId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetSectionId);

        window.scrollTo({
            top: targetSection.offsetTop - 100,
            behavior: 'smooth'
        });
    });
});


// script.js

document.addEventListener('DOMContentLoaded', function() {
    const orderBtn = document.getElementById('order-btn');
    const cartTotal = document.getElementById('cart-total');

    // Event listener for order now button
    orderBtn.addEventListener('click', function(event) {
        event.preventDefault();
        
        // Example: You can add logic here to calculate the total based on items in cart
        // For now, let's assume a sample total
        let total = 0;
        // Example calculation: total += price of each item in cart

        // Display the total
        cartTotal.textContent = `Total: ₹${total}/-`;
    });
});


