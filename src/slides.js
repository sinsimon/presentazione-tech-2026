// Elenco ordinato delle slide
// name: etichetta leggibile
// file: nome file HTML relativo alla cartella presentation
// slug: identificatore URL-friendly (facoltativo)
const slides = [
    { name: 'Proiezione H1', file: 'index.html', slug: 'proiezione-h1' },
    // Aggiungi qui le prossime slide, esempio:
    // { name: 'Confronto H1', file: 'confronto-h1.html', slug: 'confronto-h1' },
];

function setNavLinks() {
    const current = (window.location.pathname.split('/').pop() || 'index.html').toLowerCase();
    const idx = slides.findIndex(s => s.file.toLowerCase() === current);

    const prevLink = document.getElementById('prevLink');
    const nextLink = document.getElementById('nextLink');
    const titleEl = document.getElementById('slideTitle');

    if (titleEl && idx >= 0) {
        titleEl.textContent = (slides[idx].name || '').toUpperCase();
    }

    if (prevLink) {
        if (idx > 0) {
            prevLink.href = slides[idx - 1].file;
            prevLink.removeAttribute('aria-disabled');
        } else {
            prevLink.href = '#';
            prevLink.setAttribute('aria-disabled', 'true');
        }
    }

    if (nextLink) {
        if (idx >= 0 && idx < slides.length - 1) {
            nextLink.href = slides[idx + 1].file;
            nextLink.removeAttribute('aria-disabled');
        } else {
            nextLink.href = '#';
            nextLink.setAttribute('aria-disabled', 'true');
        }
    }
}

document.addEventListener('DOMContentLoaded', setNavLinks);


