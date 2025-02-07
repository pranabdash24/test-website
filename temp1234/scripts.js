// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
});

// Mobile Menu Toggle
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    menuToggle.classList.toggle('active');
});

// Close Mobile Menu
document.querySelectorAll('.nav-links a').forEach(item => {
    item.addEventListener('click', () => {
        navLinks.classList.remove('active');
        menuToggle.classList.remove('active');
    });
});

// Scroll Reveal Animations
window.addEventListener('scroll', reveal);

function reveal() {
    const reveals = document.querySelectorAll('.reveal');
    reveals.forEach(element => {
        const windowHeight = window.innerHeight;
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;

        if (elementTop < windowHeight - elementVisible) {
            element.classList.add('active');
        } else {
            if(!element.classList.contains('repeat-reveal')) {
                element.classList.remove('active');
            }
        }
    });
}

// Parallax Effect
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const parallaxElements = document.querySelectorAll('.parallax');
    
    parallaxElements.forEach(element => {
        const speed = parseFloat(element.dataset.speed) || 0.3;
        element.style.transform = `translateY(${scrolled * speed}px)`;
    });
});

// Dynamic Gradient Effects
document.querySelectorAll('[data-gradient]').forEach(element => {
    element.addEventListener('mousemove', (e) => {
        const rect = element.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        element.style.background = `radial-gradient(circle at ${x}px ${y}px, 
            rgba(114, 56, 61, 0.2) 0%, 
            rgba(172, 156, 141, 0.1) 100%)`;
    });

    element.addEventListener('mouseleave', () => {
        element.style.background = "var(--glass-bg)";
    });
});

// Back to Top Button
const backToTopButton = document.getElementById('back-to-top');

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        backToTopButton.classList.add('visible');
    } else {
        backToTopButton.classList.remove('visible');
    }
});

backToTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Form Submission
document.querySelector('form').addEventListener('submit', (e) => {
    e.preventDefault();
    // Add form submission logic here
    alert('Thank you for your message! We will respond shortly.');
});

// Page Loader
window.addEventListener('load', () => {
    const loader = document.querySelector('.loader');
    loader.style.opacity = '0';
    setTimeout(() => {
        loader.style.display = 'none';
    }, 500);
});

// Initialize Animations
document.addEventListener('DOMContentLoaded', () => {
    reveal();
    document.querySelectorAll('.service-card, .mv-card, .testimonial-card').forEach(el => {
        el.classList.add('reveal');
    });
});