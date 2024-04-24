//Este codigo es para cuando baje con el scroll aparezca la barra del navbar
const header = document.querySelector("header");

window.addEventListener("scroll", function(){
    header.classList.toggle("sticky", window.scrollY > 120);
});

//Este codigo hace que dandole click al menu(=) se desplega el navbar lateral
let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.navlist');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navlist.classList.toggle('active');
}

//Este codigo hace que aparezca la "X" de cerrar el navbar
window.onscroll = () => {
    menu.classList.remove('bx-x');
    navlist.classList.remove('active');
}