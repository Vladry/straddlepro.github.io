import React, { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { AppThunkDispatch } from '../../types/AppState';
import Grid from '@mui/material/Grid';
import BurgerMenu from 'public/images/home/burger-menu-open-tab.png';
import Close from 'public/images/home/menu-close-btn.png';
import Open from 'public/images/home/burger-menu-open-tab.png';
import { StyledWrapper } from 'src/styledComponents/Wrapper';

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
        <StyledMenuWrapper>
          <Grid container justifyContent='center' alignItems='center'>
            <Grid item xs={12}>
              <Link className='menu__ref' to='/home'>
                HOME
              </Link>
            </Grid>
            <Grid item xs={12}>
              <Link className='menu__ref' to='/team'>
                TEAM
              </Link>
            </Grid>
            <Grid item xs={12}>
              <Link className='menu__ref' to='/about'>
                ABOUT
              </Link>
            </Grid>
          </Grid>
        </StyledMenuWrapper>
      </menu>

      <div className='menu__burger' onClick={() => toggleMenu()}>
        <img className='menu__burger-image' src={BurgerMenu} alt='burger' />
      </div>
    </div>
  );
};

const StyledMenuWrapper = styled.div`
  position: relative;
  left: 30%;
  top: 30%;
  @media (max-width: 768px) {
    left: 5%;
  }
`;

export default Header;
