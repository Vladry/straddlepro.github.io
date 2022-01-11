import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { AppThunkDispatch } from '../types/AppState';
import Grid from '@mui/material/Grid';
import Logo from 'public/images/home/logo.png';
import Circle from 'public/images/home/circle.png';
import Triangle from 'public/images/home/triangle_2.png';
import Rhombus from 'public/images/home/rhombus_2.png';
import Square from 'public/images/home/square.png';
import ArrowLeft from 'public/images/home/arrow_left.png';
import ArrowRight from 'public/images/home/arrow_right.png';
import Section6 from 'public/images/home/section_6.png';
import Header from 'components/Header';
import Footer from 'components/Footer';
import TopSection from 'components/TopSection';
import { Section } from 'src/styledComponents/Section';
import {
  PhoneWrapperR,
  PhoneWrapperL,
  SectionWrapper,
  TagElement,
  TagWrapper,
  PhoneWrapperM,
  MobileWrapper
} from 'src/styledComponents/Wrapper';
import { SInput } from 'src/styledComponents/Input';
import { SButton } from 'src/styledComponents/Button';
import Lobby1 from 'public/images/home/lobby.png';
import Network1 from 'public/images/home/network.png';
import Register1 from 'public/images/home/register.png';
import Create1 from 'public/images/home/create_event.png';
import { FullPage, Slide } from 'react-full-page';
import { SImg } from 'src/styledComponents/Images';
const CreateEvent = Create1;
const Lobby = Lobby1;
const Network = Network1;
const Register = Register1;
const Home: React.FC = () => {
  const dispatch = useDispatch<AppThunkDispatch>();
  return (
    <>
      <Header />
      <div className='overlay'>
        <FullPage>
          <Slide>
            <TopSection message='Straddle is your trusted gaming assistant' />
          </Slide>
          <Slide>
            <Section>
              <PhoneWrapperR background={Circle}>
                <SectionWrapper>
                  <Grid container justifyContent='space-between' alignItems='center'>
                    <Grid item xs={12} md={6}>
                      <h3>Players find best game</h3>
                      <TagWrapper>
                        <TagElement>CS:GO</TagElement>
                        <TagElement>POKER</TagElement>
                        <TagElement>DOTA</TagElement>
                        <TagElement>FIFA</TagElement>
                        <TagElement>FORTNITE</TagElement>
                      </TagWrapper>
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <div>
                        <SImg delta={0.5} background={Lobby} />
                      </div>
                    </Grid>
                  </Grid>
                </SectionWrapper>
                <MobileWrapper>
                  <Grid container justifyContent='space-between' alignItems='center'>
                    <Grid item xs={12} md={6}>
                      <h3>Players find best game</h3>
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <div>
                        <SImg delta={0.5} background={Lobby} />
                      </div>
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <TagWrapper>
                        <TagElement>CS:GO</TagElement>
                        <TagElement>POKER</TagElement>
                        <TagElement>DOTA</TagElement>
                        <TagElement>FIFA</TagElement>
                        <TagElement>FORTNITE</TagElement>
                      </TagWrapper>
                    </Grid>
                  </Grid>
                </MobileWrapper>
              </PhoneWrapperR>
            </Section>
          </Slide>
          <Slide>
            <Section>
              <PhoneWrapperL background={Triangle}>
                <SectionWrapper>
                  <Grid container justifyContent='space-between' alignItems='center'>
                    <Grid item xs={12} md={6}>
                      <div>
                        <SImg delta={0.2} background={CreateEvent} />
                      </div>
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <div>
                        <h3>Organizers create games</h3>
                        <TagWrapper>
                          <TagElement>ONLINE</TagElement>
                          <TagElement>OFFLINE</TagElement>
                        </TagWrapper>
                      </div>
                    </Grid>
                  </Grid>
                </SectionWrapper>
                <MobileWrapper>
                  <Grid container justifyContent='space-between' alignItems='center'>
                    <Grid item xs={12} md={6}>
                      <h3>Organizers create games</h3>
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <div>
                        <SImg delta={0} background={CreateEvent} />
                      </div>
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <div>
                        <TagWrapper>
                          <TagElement>ONLINE</TagElement>
                          <TagElement>OFFLINE</TagElement>
                        </TagWrapper>
                      </div>
                    </Grid>
                  </Grid>
                </MobileWrapper>
              </PhoneWrapperL>
            </Section>
          </Slide>
          <Slide>
            <Section>
              <PhoneWrapperR background={Rhombus}>
                <SectionWrapper>
                  <Grid container justifyContent='space-between' alignItems='center'>
                    <Grid item xs={12} md={6}>
                      <div>
                        <h3>Professional players get funds for their games</h3>
                        <TagWrapper>
                          <TagElement>0%</TagElement>
                          <TagElement>CASH-IN</TagElement>
                          <TagElement>0%</TagElement>
                          <TagElement>CASH-OUT</TagElement>
                        </TagWrapper>
                      </div>
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <div>
                        <SImg delta={0} background={Network} />
                      </div>
                    </Grid>
                  </Grid>
                </SectionWrapper>
                <MobileWrapper>
                  <Grid container justifyContent='space-between' alignItems='center'>
                    <Grid item xs={12} md={6}>
                      <h3>Professional players get funds for their games</h3>
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <div>
                        <SImg delta={0} background={Network} />
                      </div>
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <div>
                        <TagWrapper>
                          <TagElement>0%</TagElement>
                          <TagElement>CASH-IN</TagElement>
                          <TagElement>0%</TagElement>
                          <TagElement>CASH-OUT</TagElement>
                        </TagWrapper>
                      </div>
                    </Grid>
                  </Grid>
                </MobileWrapper>
              </PhoneWrapperR>
            </Section>
          </Slide>
          <Slide>
            <Section>
              <PhoneWrapperL background={Square}>
                <SectionWrapper>
                  <Grid container justifyContent='space-between'>
                    <Grid item xs={12} md={6}>
                      <div>
                        <SImg delta={0} background={Register} />
                      </div>
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <div>
                        <h3>
                          Facilitate match
                          <br />
                          Manage finance
                          <br />
                          Ensure trust
                          <br />
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
                      </div>
                    </Grid>
                  </Grid>
                </SectionWrapper>
                <MobileWrapper>
                  <Grid container justifyContent='space-between'>
                    <Grid item xs={12} md={6}>
                      <h3>
                        Facilitate match
                        <br />
                        Manage finance
                        <br />
                        Ensure trust
                        <br />
                      </h3>
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <div>
                        <SImg delta={0} background={Register} />
                      </div>
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <div>
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
                      </div>
                    </Grid>
                  </Grid>
                </MobileWrapper>
              </PhoneWrapperL>
            </Section>
          </Slide>
          <Slide>
            <Section>
              <SectionWrapper>
                <Grid container justifyContent='center' alignItems='center'>
                  <Grid item xs={12}>
                    <h3>Games & Series enable ecosystem</h3>
                  </Grid>
                  <Grid item xs={10}>
                    <StyledImg src={Section6} alt='scheme' />
                  </Grid>
                </Grid>
              </SectionWrapper>
              <MobileWrapper>
                <Grid container justifyContent='center' alignItems='center'>
                  <Grid item xs={12}>
                    <h3>Games & Series enable ecosystem</h3>
                  </Grid>
                  <Grid item xs={10}>
                    <StyledImg src={Section6} alt='scheme' />
                  </Grid>
                </Grid>
              </MobileWrapper>
            </Section>
          </Slide>
          <Slide>
            <Section>
              <SectionWrapper>
                <Grid container justifyContent='center' alignItems='center'>
                  <Grid item xs={12}>
                    <StyledCenter>
                      <h3 className='section7__h3'>Join the beta</h3>
                    </StyledCenter>
                  </Grid>
                  <Grid item xs={12}>
                    <StyledCenter>
                      <SInput
                        id='email-input'
                        name='email-input'
                        type='email'
                        placeholder='Your e-mail'
                      />
                    </StyledCenter>
                  </Grid>
                  <Grid item xs={12}>
                    <StyledCenter>
                      <SButton>REQUEST</SButton>
                    </StyledCenter>
                  </Grid>
                  <Grid item xs={12}>
                    <Footer />
                  </Grid>
                </Grid>
              </SectionWrapper>
              <MobileWrapper>
                <Grid container justifyContent='center' alignItems='center'>
                  <Grid item xs={12}>
                    <StyledCenter>
                      <h3 className='section7__h3'>Join the beta</h3>
                    </StyledCenter>
                  </Grid>
                  <Grid item xs={12}>
                    <StyledCenter>
                      <SInput
                        id='email-input'
                        name='email-input'
                        type='email'
                        placeholder='Your e-mail'
                      />
                    </StyledCenter>
                  </Grid>
                  <Grid item xs={12}>
                    <StyledCenter>
                      <SButton>REQUEST</SButton>
                    </StyledCenter>
                  </Grid>
                  <Grid item xs={12}>
                    <Footer />
                  </Grid>
                </Grid>
              </MobileWrapper>
            </Section>
          </Slide>
        </FullPage>
      </div>
    </>
  );
};

const StyledCenter = styled.div`
  display: flex;
  justify-content: center;
`;

const StyledImg = styled.img`
  max-width: 85vw;
  position: relative;
  right: 5vw;
`;

export default Home;
