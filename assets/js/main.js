"use strict";

var menuSwitch = document.getElementsByClassName('menu__burger-image')[0];
var _menu = document.getElementsByTagName('menu')[0];
var overlay = document.querySelector('.overlay');

var toggleMenu = function toggleMenu() {
  if (menuSwitch.getAttribute('src') === '../../assets/img/home/burger-menu-open-tab.png') {
    menuSwitch.setAttribute('src', '../../assets/img/home/menu-close-btn.jpg');
    menuSwitch.classList.add('menu__burger-image--close'); // _menu.classList.remove('--invisible');

    _menu.classList.add('--menu-active');

    overlay.classList.add('--shadowed');
  } else {
    menuSwitch.setAttribute('src', '../../assets/img/home/burger-menu-open-tab.png');
    menuSwitch.classList.remove('menu__burger-image--close'); // _menu.classList.add('--invisible');

    _menu.classList.remove('--menu-active');

    overlay.classList.remove('--shadowed');
  }
};

menuSwitch.addEventListener('click', toggleMenu);
var header = document.getElementsByTagName('header')[0];
var burgerMenuMobile = document.createElement("menu");
burgerMenuMobile.className = 'burger-menu-mobile';
var burgerMenuSwitch = document.getElementsByClassName("main-nav__burger-menu-tab")[0];
var burgerMenu = "    <li class=\"burger-menu-mobile__item\"><a href=\"#\">Overview</a></li>\n    <li class=\"burger-menu-mobile__item\"><a href=\"#\">About Fork</a></li>\n    <li class=\"burger-menu-mobile__item\"><a href=\"#\">Buying Options</a></li>\n    <li class=\"burger-menu-mobile__item\"><a href=\"#\">Support</a></li>";

var showMobileBurgerMenu = function showMobileBurgerMenu() {
  if (burgerMenuSwitch.getAttribute('src') === 'dist/img/burger-menu-close-tab.svg') burgerMenuSwitch.setAttribute('src', "dist/img/burger-menu-start-tab.png");else burgerMenuSwitch.setAttribute('src', 'dist/img/burger-menu-close-tab.svg');
  burgerMenuMobile.innerHTML = burgerMenu;
  header.append(burgerMenuMobile);
  burgerMenuMobile.classList.toggle('active');
};

burgerMenuSwitch.addEventListener('click', showMobileBurgerMenu);
console.log('выполнен 001_burger_menu_switch.js');