import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { AppThunkDispatch } from '../types/AppState';
import Carousel from 'react-elastic-carousel';
import { FullPage, Slide } from 'react-full-page';
import Grid from '@mui/material/Grid';
import Money from 'public/images/team/icon_money.png';
import Member_1 from 'public/images/team/t1.png';
import Member_2 from 'public/images/team/t2.png';
import Member_3 from 'public/images/team/t3.png';
import Member_4 from 'public/images/team/t4.png';
import Member_5 from 'public/images/team/t5.png';
import Header from 'components/Header';
import Footer from 'components/Footer';
import TopSection from 'components/TopSection';
import { SInput } from 'src/styledComponents/Input';
import { SButton } from 'src/styledComponents/Button';
import { SectionWrapper, SimpleWrapper } from 'src/styledComponents/Wrapper';
import { Section } from 'src/styledComponents/Section';
import { Stickyroll } from '@stickyroll/stickyroll';
import Instagram from './icons/instagram.svg';
import LinkedIn from './icons/linkedin.svg';
import Telegram from './icons/telegram.svg';
import WhatsUp from './icons/whatsup.svg';
import Skype from './icons/skype.svg';
import FaceBook from './icons/facebook.svg';
import Viber from './icons/viber.svg';
import YouTube from './icons/youtube.svg';
import Slack from './icons/slack.svg';

const Team: React.FC = () => {
  const dispatch = useDispatch<AppThunkDispatch>();
  const members = [
    {
      firstName: 'Andrey',
      lastName: 'Favorov',
      photo: Member_1,
      description: 'Angel investor',
      socialMedia: ['instagram', 'linkedin', 'telegram']
    },
    {
      firstName: 'Pavel',
      lastName: 'Favorov',
      photo: Member_2,
      description: 'Hands-on and delivery oriented tech expert',
      socialMedia: ['instagram', 'linkedin', 'telegram']
    },
    {
      firstName: 'Sergei',
      lastName: 'Boichun',
      photo: Member_3,
      description: 'IT-Developer and strategist',
      socialMedia: ['instagram', 'linkedin', 'telegram']
    },
    {
      firstName: 'Natasha',
      lastName: 'Pirak',
      photo: Member_4,
      description: ' Marketer, reputation management specialist',
      socialMedia: ['instagram', 'linkedin', 'telegram']
    },
    {
      firstName: 'Vadim',
      lastName: 'Sushalskiy',
      photo: Member_5,
      description: 'Project manager, Scrum Master',
      socialMedia: ['instagram', 'linkedin', 'telegram']
    }
  ];
  return (
    <>
      <Header />
      <div className='overlay'>
        <FullPage>
          <Slide>
            <TopSection message='Our team is addicted to trust' />
          </Slide>
          <Slide>
            <Section>
              <SectionWrapper>
                <Grid container justifyContent='space-between' alignItems='center'>
                  <Grid item xs={12} md={6}>
                    <div>
                      <h3 className='team__section2-h3'>
                        We build your skills
                        <br />
                        to get finance!
                      </h3>
                      <p className='team__section2-text'>
                        Fish text is used by designers, planners and front-end
                        <br />
                        developers when they need to quickly fill mock-ups
                        <br />
                        or prototypes with content.
                      </p>
                    </div>
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <StyledImg src={Money} alt='figure1' />
                  </Grid>
                </Grid>
              </SectionWrapper>
            </Section>
          </Slide>
          <Slide>
          <Section>
            <SimpleWrapper>
              <Grid container justifyContent='center' alignItems='center'>
                <Grid item xs={12}>
                  <h3>Our team</h3>
                </Grid>
                <Grid item xs={12}>
                  
                    <Carousel itemsToShow={5}>
                      {/* <div className='team__section3-slider-container --flex-row'> */}
                        {members.map((el, index) => (
                          <div key={index} className='team__section3-slider-item'>
                            <img className='team__section3-image' src={el.photo} alt='avatar' />
                            <div className='team__section3-text-container'>
                              <h4 className='team__section3-h4'>
                                {el.firstName}
                                <br />
                                {el.lastName}
                              </h4>
                              <p className='team__section3-text'>{el.description}</p>
                              <div className='team__section3-slider-icons-container  --flex-row --drop'>
                                <Instagram className='team_section3-slider-icon-item' />
                                <LinkedIn className='team_section3-slider-icon-item' />
                                <Telegram className='team_section3-slider-icon-item' />
                              </div>
                            </div>
                          </div>
                        ))}
                      {/* </div> */}
                    </Carousel>
                    {/* <div className='team__section3-slider-item'>
                      <img className='team__section3-image' src={Member_2} alt='avatar' />
                      <div className='team__section3-text-container'>
                        <h4 className='team__section3-h4'>
                          Pavel
                          <br />
                          Favorov
                        </h4>
                        <p className='team__section3-text'>
                          Hands-on and delivery
                          <br />
                          oriented tech expert
                        </p>
                        <div className='team__section3-slider-icons-container  --flex-row'>
                          <Instagram className='team_section3-slider-icon-item' />
                          <WhatsUp className='team_section3-slider-icon-item' />
                          <Skype className='team_section3-slider-icon-item' />
                        </div>
                      </div>
                    </div> */}
                    {/* <div className='team__section3-slider-item'>
                      <img className='team__section3-image' src={Member_3} alt='avatar' />
                      <div className='team__section3-text-container'>
                        <h4 className='team__section3-h4'>
                          Sergei
                          <br />
                          Boichun
                        </h4>
                        <p className='team__section3-text'>IT-Developer and strategist</p>
                        <div className='team__section3-slider-icons-container  --flex-row --drop'>
                          <Instagram className='team_section3-slider-icon-item' />
                          <FaceBook className='team_section3-slider-icon-item' />
                          <Viber className='team_section3-slider-icon-item' />
                        </div>
                      </div>
                    </div> */}
                    {/* <div className='team__section3-slider-item'>
                      <img className='team__section3-image' src={Member_4} alt='avatar' />
                      <div className='team__section3-text-container'>
                        <h4 className='team__section3-h4'>
                          Natasha
                          <br />
                          Pirak
                        </h4>
                        <p className='team__section3-text'>
                          Marketer, reputation
                          <br />
                          management specialist
                        </p>
                        <div className='team__section3-slider-icons-container  --flex-row'>
                          <Instagram className='team_section3-slider-icon-item' />
                          <FaceBook className='team_section3-slider-icon-item' />
                          <YouTube className='team_section3-slider-icon-item' />
                        </div>
                      </div>
                    </div> */}

                    {/* <div className='team__section3-slider-item'>
                      <img className='team__section3-image' src={Member_5} alt='avatar' />
                      <div className='team__section3-text-container'>
                        <h4 className='team__section3-h4'>
                          Vadim
                          <br />
                          Sushalskiy
                        </h4>
                        <p className='team__section3-text'>
                          Project manager, Scrum
                          <br />
                          Master
                        </p>
                        <div className='team__section3-slider-icons-container  --flex-row'>
                          <Instagram className='team_section3-slider-icon-item' />
                          <Telegram className='team_section3-slider-icon-item' />
                          <Slack className='team_section3-slider-icon-item' />
                        </div>
                      </div>
                    </div> */}
                  {/* </div> */}
                </Grid>
              </Grid>
            </SimpleWrapper>
          </Section>
        </Slide>
        <Slide>
          <Section>
            <SectionWrapper>
              <Grid container justifyContent='center' alignItems='center'>
                <Grid item xs={12}>
                  <h3 className='section7__h3'>Ask us anythings!</h3>
                  <SInput
                    id='email-input'
                    name='email-input'
                    type='email'
                    placeholder='Your question'
                  />
                  <SButton>Send</SButton>
                </Grid>
                <Grid item xs={12}>
                  <Footer />
                </Grid>
              </Grid>
            </SectionWrapper>
          </Section>
        </Slide>
        </FullPage>
      </div>
    </>
  );
};

const StyledImg = styled.img`
  width: -webkit-fill-available;
`;

export default Team;
