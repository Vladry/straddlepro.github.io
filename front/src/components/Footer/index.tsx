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
        <IconsWrapper>
          <Twitter className='footer__social-icon-item' />
          <Facebook className='footer__social-icon-item' />
          <Linkedin className='footer__social-icon-item' />
        </IconsWrapper>

        <FooterLogoContainer style={{ paddingLeft: '10%', paddingRight: '10%' }}>
          <img className='logo-img' src={Logo} alt='logo' />
          <StyledP>STRADDLE</StyledP>
        </FooterLogoContainer>
        <div className='footer__copyright'>
          Copyright 2021-2022 by Straddle.
          <br />
          All rights reserved
        </div>
      </StyledFooter>
      <MobileFooter>
        <Grid container justifyContent='center'>
          <Grid item xs={12}>
            <FooterLogoContainer>
              <img className='logo-img' src={Logo} alt='logo' />
              <p className='footer__logo-text' style={{ margin: '0px' }}>
                STRADDLE
              </p>
              <IconsWrapper>
                <Twitter className='footer__social-icon-item' />
                <Facebook className='footer__social-icon-item' />
                <Linkedin className='footer__social-icon-item' />
              </IconsWrapper>
              <MobileFooterText>
                <div>
                  <p>Copyright 2021-2022 by Straddle.</p>
                  <p>All rights reserved</p>
                </div>
              </MobileFooterText>
            </FooterLogoContainer>
          </Grid>
        </Grid>
      </MobileFooter>
    </>
  );
};

const FooterLogoContainer = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  gap: 20px;
  color: #dadada;
  transition: color 0.3s;
  @media (max-width: 768px) {
    gap: 10px;
  }
`;

const StyledP = styled.p`
  font-weight: 800;
  font-size: 30px;
  line-height: 37px;
  margin-bottom: 20px;
  margin-top: 0px;
`;

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

const IconsWrapper = styled.div`
  justify-content: space-around;
  gap: 50px;
  width: 270px;
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
  @media (max-width: 768px) {
    width: -webkit-fill-available;
    padding-top: 10px;
    padding-bottom: 10px;
    gap: 50px;
  }
`;
const StyledFooter = styled.footer`
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
  justify-content: space-evenly;
  align-items: center;
  @media (max-width: 768px) {
    display: none;
  }
`;

export default Footer;
