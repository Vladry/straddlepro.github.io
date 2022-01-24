import React, { useCallback, useEffect, useState } from 'react';
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
import { getHomePage } from 'src/store/homePage/reducers';
import { thunkFetchHome } from 'src/store/homePage/actions';
const CreateEvent = Create1;
const Lobby = Lobby1;
const Network = Network1;
const Register = Register1;
const Home: React.FC = () => {
  const dispatch = useDispatch<AppThunkDispatch>();
  const content = useSelector(getHomePage);
  const [condition, setCondition] = useState(500);
  const fetchData = useCallback(() => {
    setCondition(10000);
    dispatch(thunkFetchHome());
  }, [dispatch]);
  useEffect(() => {
    const intervalValue = condition;
    if (content.length === 0) {
      setCondition(10000);
      dispatch(thunkFetchHome());
    }
    const interval = setInterval(fetchData, intervalValue);
    return () => clearInterval(interval);
  }, [content, condition, dispatch, fetchData]);
  const defaultContent = {
    HeaderText: content.HeaderText || 'Straddle is your trusted gaming assistant',
    SectionTitle1: content.SectionTitle1 || 'Players find best game',
    SectionTitle2: content.SectionTitle2 || 'Organizers create games',
    SectionTitle3: content.SectionTitle3 || 'Professional players get funds for their games',
    SectionTitle4: content.SectionTitle4 || 'Facilitate match \n Manage finance \n Ensure trust',
    SectionTitle5: content.SectionTitle5 || 'Games & Series enable ecosystem',
    SectionTitle6: content.SectionTitle6 || 'Join the beta'
  };
  return (
    <>
      <Header />
      <div className='overlay'>
        <FullPage>
          <Slide>
            <TopSection message={defaultContent.HeaderText} />
          </Slide>
          <Slide>
            <Section>
              <PhoneWrapperR background={Circle}>
                <SectionWrapper>
                  <Grid container justifyContent='flex-end' alignItems='center'>
                    <Grid item xs={5}>
                      <StyledH3 style={{ textAlign: 'start', maxWidth: '80%' }}>
                        {defaultContent.SectionTitle1}
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
                        <SImg rotate='L' delta={5} background={Lobby} />
                      </div>
                    </Grid>
                  </Grid>
                </SectionWrapper>
                <MobileWrapper>
                  <Grid
                    container
                    direction='column'
                    justifyContent='space-around'
                    alignItems='center'
                  >
                    <Grid item xs={3}>
                      <StyledH3>{defaultContent.SectionTitle1}</StyledH3>
                    </Grid>
                    <Grid item xs={4}>
                      <PhoneWrapperM background={Circle}>
                        <SImg rotate='L' delta={1.5} background={Lobby} />
                      </PhoneWrapperM>
                    </Grid>
                    <Grid item xs={3}>
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
                        <SImg rotate='R' delta={1} background={CreateEvent} />
                      </div>
                    </Grid>
                    <Grid item xs={5}>
                      <div>
                        <StyledH3 style={{ textAlign: 'start' }}>
                          {defaultContent.SectionTitle2}
                        </StyledH3>
                        <TagWrapper side='flex-start'>
                          <TagElement>ONLINE</TagElement>
                          <TagElement>OFFLINE</TagElement>
                        </TagWrapper>
                      </div>
                    </Grid>
                  </Grid>
                </SectionWrapper>
                <MobileWrapper>
                  <Grid
                    container
                    direction='column'
                    justifyContent='space-around'
                    alignItems='center'
                  >
                    <Grid item xs={3}>
                      <StyledH3>{defaultContent.SectionTitle2}</StyledH3>
                    </Grid>
                    <Grid item xs={4}>
                      <PhoneWrapperM background={Triangle}>
                        <SImg rotate='R' delta={1} background={CreateEvent} />
                      </PhoneWrapperM>
                    </Grid>
                    <Grid item xs={3}>
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
                          {defaultContent.SectionTitle3}
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
                        <SImg rotate='L' delta={2} background={Network} />
                      </div>
                    </Grid>
                  </Grid>
                </SectionWrapper>
                <MobileWrapper>
                  <Grid
                    container
                    direction='column'
                    justifyContent='space-around'
                    alignItems='center'
                  >
                    <Grid item xs={3}>
                      <StyledH3>{defaultContent.SectionTitle3}</StyledH3>
                    </Grid>
                    <Grid item xs={4}>
                      <PhoneWrapperM background={Rhombus}>
                        <SImg rotate='L' delta={2} background={Network} />
                      </PhoneWrapperM>
                    </Grid>
                    <Grid item xs={3}>
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
                        <SImg rotate='R' delta={5} background={Register} />
                      </div>
                    </Grid>
                    <Grid item xs={5}>
                      <div>
                        <StyledH3 style={{ textAlign: 'start', marginBottom: '20px' }}>
                          {defaultContent.SectionTitle4}
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
                  <Grid container direction='column' justifyContent='space-around'>
                    <Grid item xs={3}>
                      <StyledH3>{defaultContent.SectionTitle4}</StyledH3>
                    </Grid>
                    <Grid item xs={4}>
                      <PhoneWrapperM background={Square}>
                        <SImg rotate='R' delta={5} background={Register} />
                      </PhoneWrapperM>
                    </Grid>
                    <Grid item xs={3}>
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
                    <StyledH3 style={{ marginTop: '10%' }}>{defaultContent.SectionTitle5}</StyledH3>
                  </Grid>
                  <Grid item xs={12}>
                    <div>
                      <StyledImg style={{ maxWidth: '80vw' }} src={Section6} alt='scheme' />
                    </div>
                  </Grid>
                </Grid>
              </SectionWrapper>
              <MobileWrapper>
                <Grid container direction='column' justifyContent='flex-end' alignItems='center'>
                  <Grid item xs={4}>
                    <StyledH3>{defaultContent.SectionTitle5}</StyledH3>
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
                          <StyledH3 className='section7__h3'>
                            {defaultContent.SectionTitle6}
                          </StyledH3>
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
                      <StyledH3 className='section7__h3'>{defaultContent.SectionTitle6}</StyledH3>
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
  max-width: 90vw;
`;

export default Home;
