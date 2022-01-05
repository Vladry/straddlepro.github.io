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
import { SectionWrapper } from 'src/styledComponents/Wrapper';

const About: React.FC = () => {
  const dispatch = useDispatch<AppThunkDispatch>();
  return (
    <>
      <div className='wrapper'>
        <Header />
        <div className='overlay'>
          <TopSection message='We build better world of trust for gamers' />
          <Section>
            <SectionWrapper>
              <Grid container justifyContent='space-between'>
                <Grid item xs={12} md={6}>
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
            </SectionWrapper>
          </Section>
          <Section>
            <SectionWrapper>
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
            </SectionWrapper>
          </Section>
          <Section>
            <SectionWrapper>
              <div>
                <h3 className='section4__h3'>Download</h3>
                <div className='about__section4-container --flex-column'>
                  <button className='about__btn about__submit-btn1' type='submit'>
                    WHITE PAPER
                  </button>
                  <p className='about__section4-text'>OR</p>
                  <button className='about__btn about__submit-btn2' type='submit'>
                    YELLOW PAPER
                  </button>
                </div>
              </div>
              <Footer />
            </SectionWrapper>
          </Section>
        </div>
      </div>
    </>
  );
};

const StyledImg = styled.img`
  width: -webkit-fill-available;
`;

export default About;
