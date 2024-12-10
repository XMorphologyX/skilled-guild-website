// scripts.js

// Mobile menu toggle
const menuToggle = document.querySelector('.menu-toggle');
const navMenu = document.querySelector('nav ul');

menuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');

    // Rotate the menu toggle button for a visual cue
    menuToggle.classList.toggle('rotated');
});

// Simple form validation for a contact form (if it exists)
function validateForm() {
    const name = document.getElementById('name')?.value;
    const email = document.getElementById('email')?.value;
    const message = document.getElementById('message')?.value;

    if (!name || !email || !message) {
        document.getElementById('error-message').textContent = 'Please fill out all fields.';
        return false;
    }

    // Ensure a valid email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        document.getElementById('error-message').textContent = 'Please enter a valid email address.';
        return false;
    }

    return true;
}

// Add animation to scroll behavior for internal anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (event) {
        event.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Custom interaction when clicking the Discord link
document.getElementById('discord-link').addEventListener('click', function (event) {
    event.preventDefault(); // Prevent the default link action (optional, you can let it open too)

    // Show a custom modal or confirmation dialog
    const confirmation = confirm("You are about to join our Discord! Welcome to the Skilled community!");

    if (confirmation) {
        // Redirect to Discord after confirmation
        window.open('https://discord.gg/qzAyheAHGr', '_blank');
    }
});

// Add fade-in effect for elements with AOS when they enter the viewport
window.addEventListener('load', () => {
    const aosElements = document.querySelectorAll('[data-aos]');
    aosElements.forEach(element => {
        element.classList.add('aos-init', 'aos-animate');
    });
});

// Close mobile menu when clicking on a navigation link (optional)
document.querySelectorAll('nav ul li a').forEach(link => {
    link.addEventListener('click', () => {
        if (navMenu.classList.contains('active')) {
            navMenu.classList.remove('active');
            menuToggle.classList.remove('rotated');
        }
    });
});
