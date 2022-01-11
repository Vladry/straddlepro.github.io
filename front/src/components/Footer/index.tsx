import React, { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Grid from '@mui/material/Grid';
import { AppThunkDispatch } from '../../types/AppState';
import Logo from 'public/images/home/logo.png';
import Twitter from './twitter.svg';
import Facebook from './facebook.svg';
import Linkedin from './linkedin.svg';

const Footer: React.FC = () => {
  const dispatch = useDispatch<AppThunkDispatch>();
  return (
    <>
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
      <MobileFooter>
        <Grid container justifyContent='center'>
          <Grid item xs={12}>
            <div className='footer__logo-container'>
              <img className='logo-img' src={Logo} alt='logo' />
              <p className='footer__logo-text'>STRADDLE</p>
            </div>
          </Grid>
          <Grid item xs={12}>
            <div className='footer__social-icon-container --flex-row'>
              <Twitter className='footer__social-icon-item' />
              <Facebook className='footer__social-icon-item' />
              <Linkedin className='footer__social-icon-item' />
            </div>
          </Grid>
          <Grid item xs={12}>
            <MobileFooterText>
              <div>
                <p>Copyright 2021-2022 by Straddle.</p>
                <p>All rights reserved</p>
              </div>
            </MobileFooterText>
          </Grid>
        </Grid>
      </MobileFooter>
    </>
  );
};

const MobileFooterText = styled.div`
  font-size: 8px;
  display: flex !important;
  position: relative;
  bottom: 0px;
  justify-content: center;
  text-align: center;
`;

const MobileFooter = styled.footer`
  display: none;
  @media (max-width: 768px) {
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
  }
`;
const StyledFooter = styled.footer`
  /* position: relative;
  bottom: 0; */
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
  @media (max-width: 768px) {
    display: none;
  }
`;

export default Footer;
