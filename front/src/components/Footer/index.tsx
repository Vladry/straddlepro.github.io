import React, { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { AppThunkDispatch } from '../../types/AppState';
import Logo from 'public/images/home/logo.png';
import Twitter from './twitter.svg';
import Facebook from './facebook.svg';
import Linkedin from './linkedin.svg';

const Footer: React.FC = () => {
  const dispatch = useDispatch<AppThunkDispatch>();
  return (
    <StyledFooter>
      <div className='footer__social-icon-container --flex-row'>
        <Twitter className='footer__social-icon-item' />
        <Facebook className='footer__social-icon-item' />
        <Linkedin className='footer__social-icon-item' />
      </div>

      <div className='footer__logo-container'>
        <img className='logo-img' src={Logo} alt='logo' />
        <p className='footer__logo-text'>STRADDLE</p>
      </div>
      <div className='footer__copyright'>
        <p>
          Copyright 2021-2022 by
          <br />
          Straddle.
        </p>
        <p>All rights reserved</p>
      </div>
    </StyledFooter>
  );
};

const StyledFooter = styled.footer`
  position: absolute;
  bottom: 0;
  width: 100%;
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  vertical-align: baseline;
  display: flex;
  background-position: center;
  background-repeat: no-repeat;
  margin: 0 auto;
  height: auto;
  background-color: none;
  flex-flow: row nowrap;
  justify-content: space-around;
  align-items: center;
`;

export default Footer;
