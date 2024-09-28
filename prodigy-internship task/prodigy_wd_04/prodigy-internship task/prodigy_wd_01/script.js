const nav = document.getElementById('nav');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }
});

nav.addEventListener('mouseover', (e) => {
    if (e.target.tagName === 'A') {
        e.target.style.color = '#ccc';
        e.target.parentNode.style.backgroundColor = '#444';
    }
});

nav.addEventListener('mouseout', (e) => {
    if (e.target.tagName === 'A') {
        e.target.style.color = '#fff';
        e.target.parentNode.style.backgroundColor = '';
    }
});