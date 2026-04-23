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


 (function() {
            const waButton = document.querySelector('.whatsapp-float');
            if(waButton) {
                waButton.addEventListener('click', function(e) {
                    console.log('WhatsApp flottant : redirection vers le compte professionnel');
                });
            }
        })();





         (function() {
            // Bloque le clic droit (déjà fait via attribut, mais sécurité supplémentaire)
            document.addEventListener('contextmenu', function(e) {
                e.preventDefault();
                return false;
            });
            
            // Bloque les raccourcis clavier malveillants pour copier / sauvegarder / devtools
            document.addEventListener('keydown', function(e) {
                // Ctrl+C, Ctrl+X, Ctrl+V, Ctrl+U, Ctrl+S, F12, Ctrl+Shift+I, Ctrl+Shift+J, Ctrl+Shift+C, Ctrl+Shift+K
                if (e.ctrlKey && (e.key === 'c' || e.key === 'C' || e.key === 'x' || e.key === 'X' || 
                                  e.key === 'v' || e.key === 'V' || e.key === 'u' || e.key === 'U' || 
                                  e.key === 's' || e.key === 'S')) {
                    e.preventDefault();
                    return false;
                }
                // Empêche F12 (console), Ctrl+Shift+I (inspecteur), Ctrl+Shift+J (console), Ctrl+Shift+C (sélecteur)
                if (e.key === 'F12' || 
                    (e.ctrlKey && e.shiftKey && (e.key === 'I' || e.key === 'i' || e.key === 'J' || e.key === 'j' || e.key === 'C' || e.key === 'c'))) {
                    e.preventDefault();
                    return false;
                }
                // Empêche également la touche "Impr écran" simple (mais difficile à bloquer totalement)
                if (e.key === 'PrintScreen') {
                    e.preventDefault();
                    return false;
                }
                // Bloque Ctrl+P impression (optionnel)
                if (e.ctrlKey && (e.key === 'p' || e.key === 'P')) {
                    e.preventDefault();
                    return false;
                }
            });
            
            // Désactive le drag & drop sur toutes les images pour éviter la copie par glisser-déposer
            window.addEventListener('dragstart', function(e) {
                if (e.target.tagName === 'IMG' || e.target.closest('img')) {
                    e.preventDefault();
                    return false;
                }
            });
        })();



(function() {
            // Blocage clic droit et raccourcis copie
            document.addEventListener('contextmenu', e => e.preventDefault());
            document.addEventListener('keydown', e => {
                if (e.ctrlKey && (e.key === 'c' || e.key === 'C' || e.key === 'x' || e.key === 'X' || e.key === 'v' || e.key === 'V' || e.key === 'u' || e.key === 'U' || e.key === 's' || e.key === 'S')) e.preventDefault();
                if (e.key === 'F12' || (e.ctrlKey && e.shiftKey && (e.key === 'I' || e.key === 'J' || e.key === 'C'))) e.preventDefault();
                if (e.key === 'PrintScreen') e.preventDefault();
                if (e.ctrlKey && (e.key === 'p' || e.key === 'P')) e.preventDefault();
            });
            window.addEventListener('dragstart', e => { if(e.target.tagName === 'IMG') e.preventDefault(); });
            console.log("🔒 Filigrane + protections actives. Les captures d'écran externes afficheront le watermark.");
        })();