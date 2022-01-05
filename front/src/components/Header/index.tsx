import React, { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { AppThunkDispatch } from '../../types/AppState';

import BurgerMenu from 'public/images/home/burger-menu-open-tab.png';
import Close from 'public/images/home/menu-close-btn.jpg';
import Open from 'public/images/home/burger-menu-open-tab.png';

const Header: React.FC = () => {
  const dispatch = useDispatch<AppThunkDispatch>();
  const toggleMenu = () => {
    const menuSwitch = document.getElementsByClassName('menu__burger-image')[0];
    const _menu = document.getElementsByTagName('menu')[0];
    const overlay = document.querySelector('.overlay');
    if (menuSwitch.getAttribute('src') === BurgerMenu) {
      menuSwitch.setAttribute('src', Close);
      menuSwitch.classList.add('menu__burger-image--close');
      _menu.classList.add('--menu-active');
      overlay.classList.add('--shadowed');
    } else {
      menuSwitch.setAttribute('src', Open);
      menuSwitch.classList.remove('menu__burger-image--close');
      _menu.classList.remove('--menu-active');
      overlay.classList.remove('--shadowed');
    }
  };
  return (
    <div>
      <menu className='menu  --invisible'>
        <li className='menu__item'>
          <a className='menu__ref' href='/home'>
            HOME
          </a>
        </li>
        <li className='menu__item'>
          <a className='menu__ref' href='/team'>
            TEAM
          </a>
        </li>
        <li className='menu__item'>
          <a className='menu__ref' href='/about'>
            ABOUT
          </a>
        </li>
      </menu>

      <div className='menu__burger' onClick={() => toggleMenu()}>
        <img className='menu__burger-image' src={BurgerMenu} alt='burger' />
      </div>
    </div>
  );
};

export default Header;
