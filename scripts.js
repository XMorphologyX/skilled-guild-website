// JavaScript for additional interactivity (optional for future enhancements)
// For now, it can be used to add dynamic content or effects

document.addEventListener('DOMContentLoaded', function () {
    console.log('Skilled Guild Website Loaded!');
    
    // Example: Smooth Scroll for Navigation Links
    const navLinks = document.querySelectorAll('nav ul li a');
    navLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            
            window.scrollTo({
                top: targetElement.offsetTop - 50,
                behavior: 'smooth'
            });
        });
    });
});
