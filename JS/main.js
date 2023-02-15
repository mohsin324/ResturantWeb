// Get DOM element
const navIconEl = document.querySelector('.nav__icon');
const navCloseEl = document.querySelector('.nav__close');
const navList = document.querySelector('.nav__list');
const navBgOverlayEl = document.querySelector('.nav__bgOverlay');

// create functions   navOpen()
const navOpen = () => {
    navList.classList.add("show");
    navBgOverlayEl.classList.add("active");
    document.body.style = 'visibility: visible; height: 100vh; width: 100vw; overflow-x: hidden;';

}
const navClose = () => {
    navList.classList.remove("show");
    navBgOverlayEl.classList.remove("active");
    document.body.style = 'visibility: visible; height: 100vh; width: 100vw; overflow-x: hidden;';

}

navIconEl.addEventListener('click', navOpen);
navCloseEl.addEventListener('click', navClose);
navBgOverlayEl.addEventListener('click', navClose);


// aos init
AOS.init({
    offset: 200,
    delay: 100,
    duration: 400,
    easing: 'ease',
    once: false, 
    mirror: false,
    anchorPlacement: 'top-bottom'
});