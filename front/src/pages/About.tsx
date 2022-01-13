import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { AppThunkDispatch } from '../types/AppState';
import Grid from '@mui/material/Grid';
import Three from 'public/images/about/3_.png';
import Two from 'public/images/about/2_.png';
import Header from 'components/Header';
import Footer from 'components/Footer';
import TopSection from 'components/TopSection';
import { Section } from 'src/styledComponents/Section';
import { MobileWrapper, SectionWrapper } from 'src/styledComponents/Wrapper';
import { FullPage, Slide } from 'react-full-page';
import { AboutButton } from 'src/styledComponents/Button';
const About: React.FC = () => {
  const dispatch = useDispatch<AppThunkDispatch>();
  return (
    <>
      <Header />
      <div className='overlay'>
        <FullPage>
          <Slide>
            <TopSection message='We build better world of trust for gamers' />
          </Slide>
          <Slide>
            <Section>
              <SectionWrapper>
                <Grid container justifyContent='space-evenly' alignItems='center' textAlign='start'>
                  <Grid item xs={12} md={5} alignItems='center'>
                    <StyledImg src={Two} alt='figure1' />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <div>
                      <h3 style={{ textAlign: 'start' }} className='about__section2-h3'>
                        Merging game &
                        <br />
                        tech to control
                        <br />
                        finance
                      </h3>
                      <p className='about__section2-text'>
                        Fish text is used by designers, planners and front-end
                        <br />
                        developers when they need to quickly fill mock-ups
                        <br />
                        or prototypes with content.
                      </p>
                    </div>
                  </Grid>
                </Grid>
              </SectionWrapper>
              <MobileWrapper>
                <Grid container justifyContent='space-between'>
                  <Grid item xs={12} md={5}>
                    <StyledImg src={Two} alt='figure1' />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <div>
                      <h3 className='about__section2-h3'>
                        Merging game &
                        <br />
                        tech to control
                        <br />
                        finance
                      </h3>
                      <p className='about__section2-text'>
                        Fish text is used by designers, planners and front-end
                        <br />
                        developers when they need to quickly fill mock-ups
                        <br />
                        or prototypes with content.
                      </p>
                    </div>
                  </Grid>
                </Grid>
              </MobileWrapper>
            </Section>
          </Slide>
          <Slide>
            <Section>
              <SectionWrapper>
                <Grid container justifyContent='space-evenly' alignItems='center' textAlign='end'>
                  <Grid item xs={12} md={6}>
                    <div>
                      <h3 style={{ textAlign: 'end' }} className='about__section3-h3'>
                        <span>Imminent ledger</span>
                        <br />
                        for trust
                      </h3>
                      <p className='about__section3-text'>
                        Fish text is used by designers, planners and front-end
                        <br />
                        developers when they need to quickly fill mock-ups
                        <br />
                        or prototypes with content.
                      </p>
                    </div>
                  </Grid>
                  <Grid item xs={12} md={5}>
                    <StyledImg style={{ maxWidth: '100%', left: 0 }} src={Three} alt='figure1' />
                  </Grid>
                </Grid>
              </SectionWrapper>
              <MobileWrapper>
                <Grid container justifyContent='space-between'>
                  <Grid item xs={12} md={6}>
                    <div>
                      <h3 className='about__section3-h3'>
                        <span>Imminent ledger</span>
                        <br />
                        for trust
                      </h3>
                      <p className='about__section3-text'>
                        Fish text is used by designers, planners and front-end
                        <br />
                        developers when they need to quickly fill mock-ups
                        <br />
                        or prototypes with content.
                      </p>
                    </div>
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <StyledImg src={Three} alt='figure1' />
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
                      <h3>Download</h3>
                    </StyledCenter>
                    <div className='about__section4-container --flex-column'>
                      <AboutButton className='about__submit-btn1' type='submit'>
                        WHITE PAPER
                      </AboutButton>
                      <p className='about__section4-text'>OR</p>
                      <AboutButton className='about__submit-btn2' type='submit'>
                        YELLOW PAPER
                      </AboutButton>
                    </div>
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
                      <h3 className='section4__h3'>Download</h3>
                    </StyledCenter>
                  </Grid>
                  <Grid item xs={12}>
                    <div className='about__section4-container --flex-column'>
                      <AboutButton className='about__submit-btn1' type='submit'>
                        WHITE PAPER
                      </AboutButton>
                      <p className='about__section4-text'>OR</p>
                      <AboutButton className='about__submit-btn2' type='submit'>
                        YELLOW PAPER
                      </AboutButton>
                    </div>
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
  width: -webkit-fill-available;
  max-width: 60%;
  position: relative;
  left: 20%;
`;

export default About;
