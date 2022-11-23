const navMenu = document.querySelector('.nav-menu');
const btnMenu = document.querySelector('.btn-menu');

/* ===== Menu de navegación ===== */
btnMenu.addEventListener('click', () => {
    if (btnMenu.classList.contains('not-active')) {
        btnMenu.classList.remove('not-active');
        btnMenu.classList.add('active');
        navMenu.classList.remove('not-active');
        navMenu.classList.add('active');
    } else {
        btnMenu.classList.remove('active');
        btnMenu.classList.add('not-active');
        navMenu.classList.remove('active');
        navMenu.classList.add('not-active');
    }
})