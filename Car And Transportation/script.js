//search
let serach = document.querySelector('.search-box');

document.querySelector('#search-icon').onclick = () => {
    serach.classList.toggle('active');
    menu.classList.remove('active');
}

let menu = document.querySelector('.navbar');

document.querySelector('#menu-icon').onclick = () => {
    menu.classList.toggle('active');
    serach.classList.remove('active');
}

//hide menu and search box on scroll
window.onscroll = () =>{
    menu.classList.remove('active');
    serach.classList.remove('active');
}


//header

let header = document.querySelector('header');

window.addEventListener('scroll' , () =>{
    header.classList.toggle('shadow' , window.scrollY > 0);
} );