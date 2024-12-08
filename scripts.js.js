// scripts.js

// Mobile menu toggle
const menuToggle = document.querySelector('.menu-toggle');
const navMenu = document.querySelector('nav ul');

menuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

// Simple form validation for the contact form
function validateForm() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (!name || !email || !message) {
        document.getElementById('error-message').textContent = 'Please fill out all fields.';
        return false;
    }
    return true;
}
// JavaScript to show an alert or custom interaction when clicking the Discord link
document.getElementById('discord-link').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent the default link action (optional, you can let it open too)
    
    // Display a custom alert or message before redirecting
    alert("You are about to join our Discord! Welcome to the Skilled community!");
    
    // Redirect to Discord after the message
    window.open('https://discord.gg/qzAyheAHGr', '_blank');
});
