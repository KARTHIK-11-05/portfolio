// Scroll Reveal Animation
function reveal() {
    var reveals = document.querySelectorAll(".reveal");
    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 150;
        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active");
        }
    }
}

window.addEventListener("scroll", reveal);

// Initial reveal on load
window.addEventListener("load", () => {
    reveal();
    
    // Add reveal class to section titles and cards dynamically
    document.querySelectorAll('.section-title, .skill-card, .project-card, .contact-item, .contact-form').forEach(el => {
        el.classList.add('reveal');
    });
});

// Navbar background change on scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(2, 6, 23, 0.9)';
        navbar.style.padding = '0.7rem 0';
    } else {
        navbar.style.background = 'rgba(30, 41, 59, 0.7)';
        navbar.style.padding = '1rem 0';
    }
});

// Mobile Menu Toggle (Simplified placeholder)
const menuBtn = document.querySelector('.menu-btn');
const navLinks = document.querySelector('.nav-links');

menuBtn.addEventListener('click', () => {
    alert('Mobile menu functionality would be implemented here. For this demo, please view in desktop mode or resize browser.');
});

// Form Submission handling
const contactForm = document.getElementById('contact-form');
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('name').value;
    alert(`Thank you, ${name}! Your message has been sent successfully.`);
    contactForm.reset();
});
