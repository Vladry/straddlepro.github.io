import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { AppThunkDispatch } from '../types/AppState';
import Logo from 'public/images/home/logo.png';
import Three from 'public/images/about/3_.png';
import Two from 'public/images/about/2_.png';
import Header from 'components/Header';
import Footer from 'components/Footer';
import TopSection from 'components/TopSection';

const About: React.FC = () => {
  const dispatch = useDispatch<AppThunkDispatch>();
  return (
    <>
      <div className='wrapper'>
        <Header />
        <div className='overlay'>
          <TopSection message='We build better world of trust for gamers' />
          <div className='about__section2'>
            <div className='about__section2-flex-container'>
              <img className='about__section2-image' src={Two} alt='figure1' />
              <div className='about__section2-text-container'>
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
            </div>
          </div>

          <div className='about__section3'>
            <div className='about__section3_central-flex-container'>
              <div className='about__section3-left-container'>
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
              <div className='about__section3_right-container --flex-column'>
                <img className='about__section3-image' src={Three} alt='figure1' />
              </div>
            </div>
          </div>

          <div className='about__section4 --flex-column'>
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
        </div>
      </div>
    </>
  );
};

export default About;
