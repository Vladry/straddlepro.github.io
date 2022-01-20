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
import { StyledH2, StyledH3 } from 'src/styledComponents/Text';
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
                      <StyledH3 style={{ textAlign: 'start' }} className='about__section2-h3'>
                        Merging game &
                        <br />
                        tech to control
                        <br />
                        finance
                      </StyledH3>
                      <StyledP>
                        Fish text is used by designers, planners and front-end
                        <br />
                        developers when they need to quickly fill mock-ups
                        <br />
                        or prototypes with content.
                      </StyledP>
                    </div>
                  </Grid>
                </Grid>
              </SectionWrapper>
              <MobileWrapper>
                <Grid container direction='column' justifyContent='space-evenly'>
                  <Grid item xs={4}>
                    <StyledImg src={Two} alt='figure1' />
                  </Grid>
                  <Grid item xs={5}>
                    <div>
                      <StyledH3 className='about__section2-h3'>
                        Merging game &
                        <br />
                        tech to control
                        <br />
                        finance
                      </StyledH3>
                      <StyledP>
                        Fish text is used by designers, planners and front-end
                        <br />
                        developers when they need to quickly fill mock-ups
                        <br />
                        or prototypes with content.
                      </StyledP>
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
                      <StyledH3 style={{ textAlign: 'end' }} className='about__section3-h3'>
                        <span>Imminent ledger</span>
                        <br />
                        for trust
                      </StyledH3>
                      <StyledP>
                        Fish text is used by designers, planners and front-end
                        <br />
                        developers when they need to quickly fill mock-ups
                        <br />
                        or prototypes with content.
                      </StyledP>
                    </div>
                  </Grid>
                  <Grid item xs={12} md={5}>
                    <StyledImg style={{ maxWidth: '100%', left: 0 }} src={Three} alt='figure1' />
                  </Grid>
                </Grid>
              </SectionWrapper>
              <MobileWrapper>
                <Grid container direction='column' justifyContent='space-evenly'>
                  <Grid item xs={4}>
                    <StyledImg src={Three} alt='figure1' />
                  </Grid>
                  <Grid item xs={5}>
                    <div>
                      <StyledH3 className='about__section3-h3'>
                        <span>Imminent ledger</span>
                        <br />
                        for trust
                      </StyledH3>
                      <StyledP>
                        Fish text is used by designers, planners and front-end
                        <br />
                        developers when they need to quickly fill mock-ups
                        <br />
                        or prototypes with content.
                      </StyledP>
                    </div>
                  </Grid>
                </Grid>
              </MobileWrapper>
            </Section>
          </Slide>
          <Slide>
            <Section>
              <SectionWrapper>
                <Grid container direction='row' justifyContent='space-between' alignItems='center'>
                  <Grid item xs={12}>
                    <StyledCenter>
                      <StyledH2 style={{ margin: '0px 0px 40px 0px' }}>Download</StyledH2>
                    </StyledCenter>
                  </Grid>
                  <Grid item xs={12}>
                    <div
                      style={{ gap: '10px' }}
                      className='about__section4-container --flex-column'
                    >
                      <AboutButton className='about__submit-btn1' type='submit'>
                        WHITE PAPER
                      </AboutButton>
                      <StyledP style={{ fontFamily: 'Monserrat-Regular' }}>OR</StyledP>
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
                      <StyledH3>Download</StyledH3>
                    </StyledCenter>
                  </Grid>
                  <Grid item xs={12}>
                    <Grid container justifyContent='center' alignItems='center'>
                      <Grid item xs={12}>
                        <StyledCenter>
                          <AboutButton className='about__submit-btn1' type='submit'>
                            WHITE PAPER
                          </AboutButton>
                        </StyledCenter>
                      </Grid>
                      <Grid item xs={12}>
                        <StyledCenter>
                          <StyledP>OR</StyledP>
                        </StyledCenter>
                      </Grid>
                      <Grid item xs={12}>
                        <StyledCenter>
                          <AboutButton className='about__submit-btn2' type='submit'>
                            YELLOW PAPER
                          </AboutButton>
                        </StyledCenter>
                      </Grid>
                    </Grid>
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
const StyledP = styled.p`
  font-weight: 600;
  font-size: 24px;
  line-height: 48px;
  color: #dadada;
  margin-top: 10px;
  @media (max-width: 768px) {
    font-size: 14px;
    line-height: 16px;
    margin: 10px 0px;
    padding-left: 20px;
    padding-right: 20px;
  }
`;
const StyledImg = styled.img`
  width: -webkit-fill-available;
  max-width: 60%;
  position: relative;
  left: 20%;
`;

export default About;
