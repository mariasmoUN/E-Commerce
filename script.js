const navMenu = document.querySelector('.nav-menu');
const btnMenu = document.querySelector('.btn-menu');
const btnBuscar = document.querySelector('.search-btn');
const inputBuscar = document.querySelector('.container-search');
const cerrarBuscar = document.querySelector('.btn-close');

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

/* ===== Botón de busqueda ===== */
btnBuscar.addEventListener('click', () => {
    btnBuscar.classList.remove('not-active');
    btnBuscar.classList.add('active');
    inputBuscar.classList.remove('not-active');
    inputBuscar.classList.add('active'); 
})

cerrarBuscar.addEventListener('click', () => {
    btnBuscar.classList.remove('active');
    btnBuscar.classList.add('not-active');
    inputBuscar.classList.remove('active');
    inputBuscar.classList.add('not-active');
})