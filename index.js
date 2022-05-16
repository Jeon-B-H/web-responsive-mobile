const menuToggle = document.querySelector('#menu-toggle i');
const navMenu = document.querySelector('.nav__list');
const HIDDEN = 'hidden';

// handler : handleShowMenu
const handleShowMenu = () => {
    navMenu.classList.toggle('active-side-bar');
}

// addEventListener of menu toggle
menuToggle.addEventListener('click', handleShowMenu);