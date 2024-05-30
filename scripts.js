// scripts.js

// Dark mode toggle
const toggleButton = document.getElementById('dark-mode-toggle');
toggleButton.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});

// Back to top button
const backToTopButton = document.getElementById('back-to-top');
backToTopButton.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Live Chat
const chatToggle = document.getElementById('chat-toggle');
const chatBox = document.getElementById('chat-box');
chatToggle.addEventListener('click', () => {
    chatBox.classList.toggle('hidden');
});

// Parallax Scrolling
window.addEventListener('scroll', () => {
    const parallaxElements = document.querySelectorAll('.parallax');
    parallaxElements.forEach(el => {
        let scrollPosition = window.pageYOffset;
        el.style.backgroundPositionY = scrollPosition * 0.5 + 'px';
    });
});

// Intersection Observer for animations
const animateOnScroll = (entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate__fadeIn');
            observer.unobserve(entry.target);
        }
    });
};

const observer = new IntersectionObserver(animateOnScroll, {
    threshold: 0.1,
});

document.querySelectorAll('section').forEach(section => {
    observer.observe(section);
});

// Testimonials Carousel
$(document).ready(function(){
    $('.testimonial-carousel').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: false,
        dots: true
    });

    $('.team-carousel').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: true,
        dots: false,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });
});

// Form Submission for Newsletter Signup
document.getElementById('newsletter-signup').addEventListener('submit', function(e) {
    e.preventDefault();
    const email = document.getElementById('email').value;
    alert('Thank you for subscribing, ' + email + '!');
    document.getElementById('newsletter-signup').reset();
});
