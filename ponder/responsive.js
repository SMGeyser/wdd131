let menu = document.querySelector("nav")
let button = document.querySelector(".menu-btn")

button.addEventListener('click', toggleMenu);

function toggleMenu() {
    menu.classList.toggle('hide');
    button.classList.toggle('change');
}