// Elenco ordinato delle slide
// name: etichetta leggibile
// file: percorso relativo dalla root del progetto
// slug: identificatore URL-friendly (facoltativo)
const slides = [
    { name: 'Proiezione H1', file: 'src/slides/proiezione-h1.html', slug: 'proiezione-h1' },
    { name: 'Confronto H1', file: 'src/slides/confronto-h1.html', slug: 'confronto-h1' },
];

function setNavLinks() {
    const path = window.location.pathname.replace(/\/+/g, '/');
    const current = path.endsWith('/') ? path + 'index.html' : path;
    const idx = slides.findIndex(s => current.toLowerCase().endsWith('/' + s.file.toLowerCase()));

    const prevLink = document.getElementById('prevLink');
    const nextLink = document.getElementById('nextLink');
    const titleEl = document.getElementById('slideTitle');

    if (titleEl && idx >= 0) {
        titleEl.textContent = (slides[idx].name || '').toUpperCase();
    }

    if (prevLink) {
        if (idx > 0) {
            prevLink.href = '/' + slides[idx - 1].file;
            prevLink.style.visibility = 'visible';
            prevLink.removeAttribute('aria-disabled');
        } else {
            prevLink.href = '#';
            prevLink.style.visibility = 'hidden';
            prevLink.setAttribute('aria-disabled', 'true');
        }
    }

    if (nextLink) {
        if (idx >= 0 && idx < slides.length - 1) {
            nextLink.href = '/' + slides[idx + 1].file;
            nextLink.style.visibility = 'visible';
            nextLink.removeAttribute('aria-disabled');
        } else {
            nextLink.href = '#';
            nextLink.style.visibility = 'hidden';
            nextLink.setAttribute('aria-disabled', 'true');
        }
    }
}

document.addEventListener('DOMContentLoaded', setNavLinks);


