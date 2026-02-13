// Menu burger responsive
const burger = document.getElementById('burger-menu');
const navLinks = document.getElementById('nav-links');
burger.addEventListener('click', () => {
    navLinks.classList.toggle('open');
    burger.classList.toggle('open');
});

// Initialisation de tous les carrousels au chargement de la page
document.addEventListener('DOMContentLoaded', function() {
    const carousels = document.querySelectorAll('.carousel-container');
    carousels.forEach(carousel => initCarousel(carousel));
});

function initCarousel(container) {
    const track = container.querySelector('.carousel-track');
    const slides = Array.from(track.children);
    const nextButton = container.querySelector('.carousel-btn.next');
    const prevButton = container.querySelector('.carousel-btn.prev');
    const indicators = container.querySelectorAll('.indicator');

    if (!track || slides.length === 0) return;

    let currentIndex = 0;
    let autoSlideInterval;

    // Fonction pour déplacer le carrousel (en pourcentage)
    const moveToSlide = (index) => {
        // Gestion des limites circulaires
        if (index < 0) index = slides.length - 1;
        if (index >= slides.length) index = 0;
        currentIndex = index;

        // Déplacement par transformation CSS
        track.style.transform = `translateX(-${currentIndex * 100}%)`;

        // Mise à jour des indicateurs
        indicators.forEach((indicator, i) => {
            if (i === currentIndex) {
                indicator.classList.add('active');
            } else {
                indicator.classList.remove('active');
            }
        });
    };

    // Événements des boutons
    if (nextButton) {
        nextButton.addEventListener('click', () => moveToSlide(currentIndex + 1));
    }
    if (prevButton) {
        prevButton.addEventListener('click', () => moveToSlide(currentIndex - 1));
    }

    // Événements des indicateurs
    indicators.forEach((indicator, index) => {
        indicator.addEventListener('click', () => moveToSlide(index));
    });

    // Auto-rotation (optionnelle)
    const startAutoSlide = () => {
        autoSlideInterval = setInterval(() => moveToSlide(currentIndex + 1), 5000);
    };
    const stopAutoSlide = () => clearInterval(autoSlideInterval);

    startAutoSlide();

    // Pause au survol
    container.addEventListener('mouseenter', stopAutoSlide);
    container.addEventListener('mouseleave', startAutoSlide);

    // Initialisation de la position
    moveToSlide(0);
}