import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { AppThunkDispatch } from '../types/AppState';
import BurgerMenu from 'public/images/home/burger-menu-open-tab.png';
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

const Home: React.FC = () => {
  const dispatch = useDispatch<AppThunkDispatch>();
  return (
    <>
      <div className='wrapper'>
        <header>
          <menu className='menu  --invisible'>
            <li className='menu__item'>
              <a className='menu__ref' href='/team'>
                TEAM
              </a>
            </li>
            <li className='menu__item'>
              <a className='menu__ref' href='/about'>
                ABOUT
              </a>
            </li>
          </menu>

          <div className='menu__burger'>
            <img className='menu__burger-image' src={BurgerMenu} alt='burger' />
          </div>
        </header>

        <div className='overlay'>
          <div className='section1'>
            <div className='logo-container'>
              <a className='menu__ref' href='/home'>
                <img className='logo-img' src={Logo} alt='logo' />
              </a>
              <p className='logo-text'>STRADDLE</p>
            </div>
            <h2 className='section1__title'>
              Straddle is your trusted
              <br />
              gaming assistant
            </h2>
          </div>
          <div className='section2'>
            <div className='section2__flex-container'>
              <div className='section2__left-part'>
                <h3>Players find best game</h3>
                <div className='submenu2'>
                  <div className='submenu2__item'>CS:GO</div>
                  <div className='submenu2__item'>POKER</div>
                  <div className='submenu2__item'>DOTA</div>
                  <div className='submenu2__item'>FIFA</div>
                  <div className='submenu2__item'>FORTNITE</div>
                </div>
              </div>
              <div className='section2__right-part'>
                <div className='section2__image1-container'>
                  <img className='section2__image1' src={Cirle} alt='circle' />
                  <img className='section2__image2' src={IPhone} alt='mobile1-frame' />
                  <div className='animated-container  section2__animated-container'>
                    <img className='section2__animated-screen' src={Scroll} alt='scrolled screen' />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='section3'>
            <div className='section3__flex-container'>
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
            </div>
          </div>
          <div className='section4'>
            <div className='section4__flex-container'>
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
            </div>
          </div>
          <div className='section5'>
            <div className='section5__left-part'>
              <img className='section5__image1' src={Square} alt='mobile' />
              <img className='section5__image2' src={IPhone} alt='iPhone2.png' />
              <div className='animated-container section5__animated-container'>
                <img className='section5__animated-screen' src={Scroll} alt='scrolled screen' />
              </div>
            </div>
            <div className='section5__right-part'>
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
            </div>
          </div>

          <div className='section6'>
            <h3 className='section6__h3'>Games & Series enable ecosystem</h3>
            <img className='section6__image1' src={Section6} alt='scheme' />
          </div>
          <div className='section7'>
            <h3 className='section7__h3'>Join the beta</h3>
            <label id='email-input'></label>
            <input
              id='email-input'
              className='section7__email-form email-input-field'
              name='email-input'
              type='email'
              placeholder='Your e-mail'
            />
            <button className='submit-btn' type='submit'>
              REQUEST
            </button>
          </div>
          <footer>
            <div className='footer__social-icon-container --flex-row'>
              <svg
                className='footer__social-icon-item'
                width='24'
                height='20'
                viewBox='0 0 24 20'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path d='M21.5156 5.125C22.4531 4.42188 23.2969 3.57812 23.9531 2.59375C23.1094 2.96875 22.125 3.25 21.1406 3.34375C22.1719 2.73438 22.9219 1.79688 23.2969 0.625C22.3594 1.1875 21.2812 1.60938 20.2031 1.84375C19.2656 0.859375 18 0.296875 16.5938 0.296875C13.875 0.296875 11.6719 2.5 11.6719 5.21875C11.6719 5.59375 11.7188 5.96875 11.8125 6.34375C7.73438 6.10938 4.07812 4.14062 1.64062 1.1875C1.21875 1.89062 0.984375 2.73438 0.984375 3.67188C0.984375 5.35938 1.82812 6.85938 3.1875 7.75C2.39062 7.70312 1.59375 7.51562 0.9375 7.14062V7.1875C0.9375 9.57812 2.625 11.5469 4.875 12.0156C4.5 12.1094 4.03125 12.2031 3.60938 12.2031C3.28125 12.2031 3 12.1562 2.67188 12.1094C3.28125 14.0781 5.10938 15.4844 7.26562 15.5312C5.57812 16.8438 3.46875 17.6406 1.17188 17.6406C0.75 17.6406 0.375 17.5938 0 17.5469C2.15625 18.9531 4.73438 19.75 7.54688 19.75C16.5938 19.75 21.5156 12.2969 21.5156 5.78125C21.5156 5.54688 21.5156 5.35938 21.5156 5.125Z' />
              </svg>

              <svg
                className='footer__social-icon-item'
                width='14'
                height='24'
                viewBox='0 0 14 24'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path d='M12.5781 13.5L13.2344 9.1875H9.0625V6.375C9.0625 5.15625 9.625 4.03125 11.5 4.03125H13.4219V0.328125C13.4219 0.328125 11.6875 0 10.0469 0C6.625 0 4.375 2.10938 4.375 5.85938V9.1875H0.53125V13.5H4.375V24H9.0625V13.5H12.5781Z' />
              </svg>

              <svg
                className='footer__social-icon-item'
                width='21'
                height='21'
                viewBox='0 0 21 21'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path d='M4.6875 21V6.98438H0.328125V21H4.6875ZM2.48438 5.10938C3.89062 5.10938 5.01562 3.9375 5.01562 2.53125C5.01562 1.17188 3.89062 0.046875 2.48438 0.046875C1.125 0.046875 0 1.17188 0 2.53125C0 3.9375 1.125 5.10938 2.48438 5.10938ZM20.9531 21H21V13.3125C21 9.5625 20.1562 6.65625 15.75 6.65625C13.6406 6.65625 12.2344 7.82812 11.625 8.90625H11.5781V6.98438H7.40625V21H11.7656V14.0625C11.7656 12.2344 12.0938 10.5 14.3438 10.5C16.5938 10.5 16.6406 12.5625 16.6406 14.2031V21H20.9531Z' />
              </svg>
            </div>

            <div className='footer__logo-container'>
              <img className='logo-img' src={Logo} alt='logo' />
              <p className='footer__logo-text'>STRADDLE</p>
            </div>
            <div className='footer__copyright'>
              <p>
                Copyright 2021-2022 by
                <br />
                Straddle.
              </p>
              <p>All rights reserved</p>
            </div>
          </footer>
        </div>
      </div>
    </>
  );
};

export default Home;
