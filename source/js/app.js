let headerToggle = document.querySelector('.header__toggle');
let headerWrapper = document.querySelector('.header__wrapper');
let openMenuButton = document.querySelector('.header__toggle');
let burger = document.querySelector('.header__burger');
let cross = document.querySelector('.header__cross');
let menu = document.querySelector('.header__menu');

menu.classList.add('header__menu--closed');
headerWrapper.classList.remove('header__wrapper--open_menu');
headerToggle.classList.remove('header__toggle--nojs');

openMenuButton.addEventListener('click', function() {
  menu.classList.toggle('header__menu--closed');
  headerWrapper.classList.toggle('header__wrapper--open_menu');
  burger.classList.toggle('hidden');
  cross.classList.toggle('hidden');
});
