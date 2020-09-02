let openMenuButton = document.querySelector('.header__toggle img');
let menu = document.querySelector('.menu');
let header = document.querySelector('.header');
let headerWrapper = document.querySelector('.header__wrapper');

openMenuButton.addEventListener('click', function() {
  menu.classList.toggle('menu--closed');
  header.classList.toggle('header--dark-bg');
  headerWrapper.classList.toggle('header__wrapper--border');
});
