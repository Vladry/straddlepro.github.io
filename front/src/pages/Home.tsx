import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { AppThunkDispatch } from '../types/AppState';
import Grid from '@mui/material/Grid';
import Logo from 'public/images/home/logo.png';
import Cirle from 'public/images/home/circle.png';
import Triangle from 'public/images/home/triangle.png';
import IPhone from 'public/images/home/iPhone2.png';
import Scroll from 'public/images/home/mob_scroll_screen.jpg';
import Rhombus from 'public/images/home/rhombus.png';
import Square from 'public/images/home/square.png';
import ArrowLeft from 'public/images/home/arrow_left.png';
import ArrowRight from 'public/images/home/arrow_right.png';
import Section6 from 'public/images/home/section_6.png';
import Header from 'components/Header';
import Footer from 'components/Footer';
import TopSection from 'components/TopSection';
import { Section } from 'src/styledComponents/Section';
import {
  SectionReverseLeft,
  SectionReverseRight,
  SectionTwoLeft,
  SectionTwoRight,
  SectionWrapper
} from 'src/styledComponents/Wrapper';
import { SInput } from 'src/styledComponents/Input';
import { SButton } from 'src/styledComponents/Button';

const Home: React.FC = () => {
  const dispatch = useDispatch<AppThunkDispatch>();
  const scrollHandler = (e) => {
    console.log('scroll', e.pageY + window.innerHeight, e);
    window.scrollTo(0, e.pageY + window.innerHeight);
  };
  return (
    <>
      <div className='wrapper' onWheel={scrollHandler}>
        <Header />
        <div className='overlay'>
          <TopSection message='Straddle is your trusted gaming assistant' />
          <Section>
            <SectionWrapper>
              <SectionTwoLeft>
                <h3>Players find best game</h3>
                <div className='submenu2'>
                  <div className='submenu2__item'>CS:GO</div>
                  <div className='submenu2__item'>POKER</div>
                  <div className='submenu2__item'>DOTA</div>
                  <div className='submenu2__item'>FIFA</div>
                  <div className='submenu2__item'>FORTNITE</div>
                </div>
              </SectionTwoLeft>
              <SectionTwoRight>
                <div className='section2__image1-container'>
                  <img className='section2__image1' src={Cirle} alt='circle' />
                  <img className='section2__image2' src={IPhone} alt='mobile1-frame' />
                  <div className='animated-container  section2__animated-container'>
                    <img className='section2__animated-screen' src={Scroll} alt='scrolled screen' />
                  </div>
                </div>
              </SectionTwoRight>
            </SectionWrapper>
          </Section>
          <Section>
            <SectionWrapper>
              <div className='section3__left-part'>
                <img className='section3__image1' src={Triangle} alt='triangle' />
                <img className='section3__image2' src={IPhone} alt='mobile' />
                <div className='animated-container section3__animated-container'>
                  <img className='section3__animated-screen' src={Scroll} alt='scrolled screen' />
                </div>
              </div>
              <div className='section3__right-part'>
                <h3 className='section3__h3'>Organizers create games</h3>
                <div className='submenu3'>
                  <div className='submenu3__item'>ONLINE</div>
                  <div className='submenu3__item'>OFLINE</div>
                </div>
              </div>
            </SectionWrapper>
          </Section>
          <Section>
            <SectionWrapper>
              <div className='section4__left-part'>
                <h3>Professional players get funds for their games</h3>
                <div className='submenu4'>
                  <div className='submenu4__item'>0%</div>
                  <div className='submenu4__item'>CASH-IN</div>
                  <div className='submenu4__item'>0%</div>
                  <div className='submenu4__item'>CASH-OUT</div>
                </div>
              </div>
              <div className='section4__right-part'>
                <img className='section4__image1' src={Rhombus} alt='mobile1-screen1' />
                <img className='section4__image2' src={IPhone} alt='mobile' />
                <div className='animated-container section4__animated-container'>
                  <img className='section4__animated-screen' src={Scroll} alt='scrolled screen' />
                </div>
              </div>
            </SectionWrapper>
          </Section>
          <Section>
            <SectionWrapper>
              <SectionReverseRight>
                <img className='section5__image1' src={Square} alt='mobile' />
                <img className='section5__image2' src={IPhone} alt='iPhone2.png' />
                <div className='animated-container section5__animated-container'>
                  <img className='section5__animated-screen' src={Scroll} alt='scrolled screen' />
                </div>
              </SectionReverseRight>
              <SectionReverseLeft>
                <h3>
                  <span>Facilitate match</span>
                  <br />
                  <span>Manage finance</span>
                  <br />
                  <span>Ensure trust</span>
                </h3>
                <div className='submenu5 --flex-row'>
                  <div className='submenu5__item'>
                    <span>CASH-IN</span>
                  </div>
                  <img className='submenu5__item --arrowed' src={ArrowRight} alt='arrow' />
                  <img className='submenu5__item --arrowed_logo' src={Logo} alt='logo' />
                  <img className='submenu5__item --arrowed' src={ArrowLeft} alt='arrow' />
                  <div className='submenu5__item'>
                    <span>CASH-OUT</span>
                  </div>
                </div>
              </SectionReverseLeft>
            </SectionWrapper>
          </Section>
          <Section>
            <SectionWrapper>
              <div>
                <h3 className='section6__h3'>Games & Series enable ecosystem</h3>
                <img className='section6__image1' src={Section6} alt='scheme' />
              </div>
            </SectionWrapper>
          </Section>
          <Section>
            <SectionWrapper>
              <Grid container justifyContent='center'>
                <Grid item xs={12}>
                  <h3 className='section7__h3'>Join the beta</h3>
                </Grid>
                <Grid item xs={12}>
                  <SInput
                    id='email-input'
                    name='email-input'
                    type='email'
                    placeholder='Your e-mail'
                  />
                </Grid>
                <Grid item xs={12}>
                  <SButton>REQUEST</SButton>
                </Grid>
              </Grid>
            </SectionWrapper>
            <Footer />
          </Section>
        </div>
      </div>
    </>
  );
};

export default Home;
