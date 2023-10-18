const burger = document.querySelector('#burger');
const menu = document.querySelector('#menu');
const closeMenu = document.querySelector('.close-burger-img')
const burgerMenu = document.querySelector('.burger-menu-img')

burger.addEventListener('click', () => {
    
    if (burgerMenu.classList.contains('off') === true) {
        burgerMenu.classList.remove('off')
        burgerMenu.classList.add('on')
        closeMenu.classList.remove('on')
        closeMenu.classList.add('off')
    } 

    else {
        burgerMenu.classList.remove('on')
        burgerMenu.classList.add('off')
        closeMenu.classList.remove('off')
        closeMenu.classList.add('on')
    }

    menu.classList.toggle('disp')
    
})

