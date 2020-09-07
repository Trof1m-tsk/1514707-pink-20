let header = document.querySelector('.header');
let headerWrapper = header.querySelector('.header__wrapper');
let openMenuButton = document.querySelector('.header__toggle');
let burger = document.querySelector('.header__burger');
let cross = document.querySelector('.header__cross');
let menu = document.querySelector('.header__menu');

openMenuButton.addEventListener('click', function() {
  menu.classList.toggle('header__menu--closed');
  headerWrapper.classList.toggle('header__wrapper--open_menu');
  burger.classList.toggle('hidden');
  cross.classList.toggle('hidden');
});
