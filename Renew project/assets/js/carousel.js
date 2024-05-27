// Carousel functionality
document.addEventListener('DOMContentLoaded', function () {
    const carousel = document.querySelector('.carousel');
    const items = document.querySelectorAll('.carousel-item');
    const next = document.getElementById('next');
    const prev = document.getElementById('prev');
    let currentIndex = 0;

    function updateCarousel() {
        items.forEach((item, index) => {
            item.classList.remove('active');
            if (index === currentIndex) {
                item.classList.add('active');
            }
        });
    }

    next.addEventListener('click', function () {
        currentIndex = (currentIndex + 1) % items.length;
        updateCarousel();
    });

    prev.addEventListener('click', function () {
        currentIndex = (currentIndex - 1 + items.length) % items.length;
        updateCarousel();
    });
});

// Smooth scroll functionality
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});