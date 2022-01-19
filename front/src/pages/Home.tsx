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
import { StyledH3 } from 'src/styledComponents/Text';
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
                  <Grid container justifyContent='flex-end' alignItems='center'>
                    <Grid item xs={5}>
                      <StyledH3 style={{ textAlign: 'start', maxWidth: '80%' }}>
                        Players find best game
                      </StyledH3>
                      <TagWrapper side='flex-start'>
                        <TagElement>CS:GO</TagElement>
                        <TagElement>POKER</TagElement>
                        <TagElement>DOTA</TagElement>
                        <TagElement>FIFA</TagElement>
                        <TagElement>FORTNITE</TagElement>
                      </TagWrapper>
                    </Grid>
                    <Grid item xs={6}>
                      <div>
                        <SImg rotate='L' delta={0.5} background={Lobby} />
                      </div>
                    </Grid>
                  </Grid>
                </SectionWrapper>
                <MobileWrapper>
                  <Grid container justifyContent='space-between' alignItems='center'>
                    <Grid item xs={12} md={6}>
                      <StyledH3>Players find best game</StyledH3>
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <PhoneWrapperM background={Circle}>
                        <SImg rotate='L' delta={0.5} background={Lobby} />
                      </PhoneWrapperM>
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <TagWrapper side='center'>
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
                    <Grid item xs={6}>
                      <div>
                        <SImg rotate='R' delta={0.2} background={CreateEvent} />
                      </div>
                    </Grid>
                    <Grid item xs={5}>
                      <div>
                        <StyledH3 style={{ textAlign: 'start' }}>Organizers create games</StyledH3>
                        <TagWrapper side='flex-start'>
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
                      <StyledH3>Organizers create games</StyledH3>
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <PhoneWrapperM background={Triangle}>
                        <SImg rotate='R' delta={0} background={CreateEvent} />
                      </PhoneWrapperM>
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <div>
                        <TagWrapper side='center'>
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
                  <Grid container justifyContent='flex-end' alignItems='center'>
                    <Grid item xs={5}>
                      <div>
                        <StyledH3 style={{ textAlign: 'start' }}>
                          Professional players get funds for their games
                        </StyledH3>
                        <TagWrapper side='flex-start'>
                          <TagElement>0%</TagElement>
                          <TagElement>CASH-IN</TagElement>
                          <TagElement>0%</TagElement>
                          <TagElement>CASH-OUT</TagElement>
                        </TagWrapper>
                      </div>
                    </Grid>
                    <Grid item xs={6}>
                      <div>
                        <SImg rotate='L' delta={0} background={Network} />
                      </div>
                    </Grid>
                  </Grid>
                </SectionWrapper>
                <MobileWrapper>
                  <Grid container justifyContent='space-between' alignItems='center'>
                    <Grid item xs={12} md={6}>
                      <StyledH3>Professional players get funds for their games</StyledH3>
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <PhoneWrapperM background={Rhombus}>
                        <SImg rotate='L' delta={0} background={Network} />
                      </PhoneWrapperM>
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <div>
                        <TagWrapper side='center'>
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
                  <Grid container justifyContent='space-between' alignItems='center'>
                    <Grid item xs={6}>
                      <div>
                        <SImg rotate='R' delta={0} background={Register} />
                      </div>
                    </Grid>
                    <Grid item xs={5}>
                      <div>
                        <StyledH3 style={{ textAlign: 'start' }}>
                          Facilitate match
                          <br />
                          Manage finance
                          <br />
                          Ensure trust
                          <br />
                        </StyledH3>
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
                      <StyledH3>
                        Facilitate match
                        <br />
                        Manage finance
                        <br />
                        Ensure trust
                        <br />
                      </StyledH3>
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <PhoneWrapperM background={Square}>
                        <SImg rotate='R' delta={0} background={Register} />
                      </PhoneWrapperM>
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <div>
                        <div className='submenu5 --flex-row' style={{ justifyContent: 'center' }}>
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
                    <StyledH3 style={{ marginTop: '10%' }}>
                      Games & Series enable ecosystem
                    </StyledH3>
                  </Grid>
                  <Grid item xs={12}>
                    <div>
                      <StyledImg src={Section6} alt='scheme' />
                    </div>
                  </Grid>
                </Grid>
              </SectionWrapper>
              <MobileWrapper>
                <Grid container direction='column' justifyContent='flex-end' alignItems='center'>
                  <Grid item xs={2}>
                    <StyledH3>Games & Series enable ecosystem</StyledH3>
                  </Grid>
                  <Grid item xs={6}>
                    <StyledImg src={Section6} alt='scheme' />
                  </Grid>
                </Grid>
              </MobileWrapper>
            </Section>
          </Slide>
          <Slide>
            <Section>
              <SectionWrapper>
                <Grid container justifyContent='center' alignItems='flex-end'>
                  <Grid item xs={12}>
                    <Grid container justifyContent='center' alignItems='flex-start'>
                      <Grid item xs={12}>
                        <StyledCenter>
                          <StyledH3 className='section7__h3'>Join the beta</StyledH3>
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
                    </Grid>
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
                      <StyledH3 className='section7__h3'>Join the beta</StyledH3>
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
  display: block;
  margin-left: auto;
  margin-right: auto;
  max-width: 80vw;
`;

export default Home;
