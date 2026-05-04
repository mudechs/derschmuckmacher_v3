/**
 * Viewport Toggle
 * Zeigt/versteckt Elemente basierend auf ihrer Position im Viewport
 *
 * Usage: Füge die Klasse 'viewport-toggle' zu einem Element hinzu
 */

document.addEventListener('DOMContentLoaded', function() {
    const elements = document.querySelectorAll('.viewport-toggle');

    if (elements.length === 0) return;


    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 1 // Element ist sichtbar wenn 10% im Viewport
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Element ist im Viewport
                entry.target.classList.add('in-viewport');
                entry.target.classList.remove('out-viewport');
            } else {
                // Element ist außerhalb des Viewports
                entry.target.classList.add('out-viewport');
                entry.target.classList.remove('in-viewport');
            }
        });
    }, observerOptions);

    elements.forEach(element => {
        // Initial state
        element.classList.add('out-viewport');
        observer.observe(element);
    });
});
