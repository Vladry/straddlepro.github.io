const menuSwitch = document.getElementsByClassName('menu__burger-image')[0];
const _menu = document.getElementsByTagName('menu')[0];
const overlay = document.querySelector('.overlay');

const toggleMenu = () => {
    if (menuSwitch.getAttribute('src') === '../../assets/img/home/burger-menu-open-tab.png') {
        menuSwitch.setAttribute('src', '../../assets/img/home/menu-close-btn.jpg');
            menuSwitch.classList.add('menu__burger-image--close');
            // _menu.classList.remove('--invisible');
            _menu.classList.add('--menu-active');
            overlay.classList.add('--shadowed');

    } else {
        menuSwitch.setAttribute('src', '../../assets/img/home/burger-menu-open-tab.png');
        menuSwitch.classList.remove('menu__burger-image--close');
        // _menu.classList.add('--invisible');
        _menu.classList.remove('--menu-active');
        overlay.classList.remove('--shadowed');
    }
}

menuSwitch.addEventListener('click', toggleMenu);