import React, { useState } from 'react';
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
import { SectionWrapper, StyledWrapper } from 'src/styledComponents/Wrapper';
import { SInput } from 'src/styledComponents/Input';
import { SButton } from 'src/styledComponents/Button';
import Lobby1 from 'public/images/home/lobby.png';
import Network1 from 'public/images/home/network.png';
import Register1 from 'public/images/home/register.png';
import Create1 from 'public/images/home/create_event.png';
import Create2 from 'public/images/home/create_event_2.png';
import Create3 from 'public/images/home/create_event_3.png';
import Create4 from 'public/images/home/create_event_4.png';
import { Stickyroll } from '@stickyroll/stickyroll';
import { SImg } from 'src/styledComponents/Images';
import { url } from 'inspector';
const CreateEvent = [Create1, Create2, Create3, Create4];
const Lobby = [Lobby1];
const Network = [Network1];
const Register = [Register1];
const Home: React.FC = () => {
  const dispatch = useDispatch<AppThunkDispatch>();
  const className = (progress) => `custom-trigger custom-trigger--${Math.round(progress * 3)}`;
  return (
    <>
      <Header />
      <div className='overlay'>
        <TopSection message='Straddle is your trusted gaming assistant' />
        <Stickyroll pages={Lobby} factor={2} throttle={0} anchors=''>
          {({ page, pageIndex, pages, progress }) => {
            return (
              <Section>
                <SectionWrapper>
                  <Grid container justifyContent='space-between' alignItems='center'>
                    <Grid item xs={12} md={6}>
                      <h3>Players find best game</h3>
                      <div className='submenu2'>
                        <div className='submenu2__item'>CS:GO</div>
                        <div className='submenu2__item'>POKER</div>
                        <div className='submenu2__item'>DOTA</div>
                        <div className='submenu2__item'>FIFA</div>
                        <div className='submenu2__item'>FORTNITE</div>
                      </div>
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <div style={{ background: `url(${Cirle}) 50% 50% no-repeat` }}>
                        <div>
                          <SImg progress={progress} background={Lobby[pageIndex]} />
                        </div>
                      </div>
                    </Grid>
                  </Grid>
                </SectionWrapper>
              </Section>
            );
          }}
        </Stickyroll>
        <Stickyroll pages={CreateEvent} factor={2} throttle={0} anchors=''>
          {({ page, pageIndex, pages, progress }) => {
            return (
              <Section>
                <SectionWrapper>
                  <Grid container justifyContent='space-between' alignItems='center'>
                    <Grid item xs={12} md={6}>
                      <div style={{ background: `url(${Triangle}) 50% 50% no-repeat` }}>
                        <div>
                          <SImg progress={progress} background={CreateEvent[pageIndex]} />
                        </div>
                      </div>
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <div>
                        <h3 className='section3__h3'>Organizers create games</h3>
                        <div className='submenu3'>
                          <div className='submenu3__item'>ONLINE</div>
                          <div className='submenu3__item'>OFLINE</div>
                        </div>
                      </div>
                    </Grid>
                  </Grid>
                </SectionWrapper>
              </Section>
            );
          }}
        </Stickyroll>
        <Stickyroll pages={Network} factor={2} throttle={0} anchors=''>
          {({ page, pageIndex, pages, progress }) => {
            return (
              <Section>
                <SectionWrapper>
                  <Grid container justifyContent='space-between' alignItems='center'>
                    <Grid item xs={12} md={6}>
                      <div>
                        <h3>Professional players get funds for their games</h3>
                        <div className='submenu4'>
                          <div className='submenu4__item'>0%</div>
                          <div className='submenu4__item'>CASH-IN</div>
                          <div className='submenu4__item'>0%</div>
                          <div className='submenu4__item'>CASH-OUT</div>
                        </div>
                      </div>
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <div style={{ background: `url(${Rhombus}) 50% 50% no-repeat` }}>
                        <div>
                          <SImg progress={progress} background={Network[pageIndex]} />
                        </div>
                      </div>
                    </Grid>
                  </Grid>
                </SectionWrapper>
              </Section>
            );
          }}
        </Stickyroll>
        <Stickyroll pages={Register} factor={2} throttle={0} anchors=''>
          {({ page, pageIndex, pages, progress }) => {
            return (
              <Section>
                <SectionWrapper>
                  <Grid container justifyContent='space-between'>
                    <Grid item xs={12} md={6}>
                      <div style={{ background: `url(${Square}) 50% 50% no-repeat` }}>
                        <div>
                          <SImg progress={progress} background={Register[pageIndex]} />
                        </div>
                      </div>
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <StyledWrapper>
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
                      </StyledWrapper>
                    </Grid>
                  </Grid>
                </SectionWrapper>
              </Section>
            );
          }}
        </Stickyroll>
        <Stickyroll pages={['']} factor={1} throttle={0} anchors=''>
          {({ page, pageIndex, pages, progress }) => {
            return (
              <Section>
                <SectionWrapper>
                  <div>
                    <h3 className='section6__h3'>Games & Series enable ecosystem</h3>
                    <img className='section6__image1' src={Section6} alt='scheme' />
                  </div>
                </SectionWrapper>
              </Section>
            );
          }}
        </Stickyroll>
        <Stickyroll pages={['']} factor={1} throttle={0} anchors=''>
          {({ page, pageIndex, pages, progress }) => {
            return (
              <Section>
                <SectionWrapper>
                  <div>
                    <h3 className='section7__h3'>Join the beta</h3>
                    <SInput
                      id='email-input'
                      name='email-input'
                      type='email'
                      placeholder='Your e-mail'
                    />
                    <SButton>REQUEST</SButton>
                  </div>
                  <Footer />
                </SectionWrapper>
              </Section>
            );
          }}
        </Stickyroll>
      </div>
    </>
  );
};

export default Home;
