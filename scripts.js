// scripts.js

// Mobile menu toggle
const menuToggle = document.querySelector('.menu-toggle');
const navMenu = document.querySelector('nav ul');

menuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

// Form validation
function validateForm() {
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
    const errorMessage = document.getElementById('error-message');

    if (!name || !email || !message) {
        errorMessage.textContent = 'Please fill out all fields.';
        return false;
    }

    errorMessage.textContent = ''; // Clear errors if valid
    alert('Your message has been sent successfully!');
    return true;
}
