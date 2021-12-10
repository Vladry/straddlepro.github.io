const menuSwitch = document.getElementsByClassName('menu__burger-image')[0];
const _menu = document.querySelector('.menu');


const toggleMenu = () => {
    if (menuSwitch.getAttribute('src') === '../../assets/img/home/burger-menu-open-tab.png') {
            menuSwitch.setAttribute('src', '../../assets/img/home/burger-menu-close-tab.svg')
            menuSwitch.classList.add('menu__burger-image--close');
            _menu.classList.remove('--invisible');
            _menu.classList.add('--menu-active');
    } else {
        menuSwitch.setAttribute('src', '../../assets/img/home/burger-menu-open-tab.png');
        menuSwitch.classList.remove('menu__burger-image--close');
        _menu.classList.add('--invisible');
        _menu.classList.remove('--menu-active');
    }
}

menuSwitch.addEventListener('click', toggleMenu);