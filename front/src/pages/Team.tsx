import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { AppThunkDispatch } from '../types/AppState';
import Carousel from 'react-elastic-carousel';
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
import { MobileWrapper, SectionWrapper, SimpleWrapper } from 'src/styledComponents/Wrapper';
import { Section } from 'src/styledComponents/Section';
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
      socialMedia: ['instagram', 'whatsup', 'skype']
    },
    {
      firstName: 'Sergei',
      lastName: 'Boichun',
      photo: Member_3,
      description: 'IT-Developer and strategist',
      socialMedia: ['instagram', 'facebook', 'viber']
    },
    {
      firstName: 'Natasha',
      lastName: 'Pirak',
      photo: Member_4,
      description: ' Marketer, reputation management specialist',
      socialMedia: ['instagram', 'facebook', 'youtube']
    },
    {
      firstName: 'Vadim',
      lastName: 'Sushalskiy',
      photo: Member_5,
      description: 'Project manager, Scrum Master',
      socialMedia: ['instagram', 'telegram', 'slack']
    }
  ];
  const breakPoints = [
    { width: 800, itemsToShow: 2, itemsToScroll: 1 },
    { width: 1000, itemsToShow: 3, itemsToScroll: 1 },
    { width: 1200, itemsToShow: 4, itemsToScroll: 1 },
    { width: 1500, itemsToShow: 5, itemsToScroll: 1 },
    { width: 1800, itemsToShow: 6, itemsToScroll: 1 }
  ];

  return (
    <>
      <Header />
      <div className='overlay'>
        <TopSection message='Our team is addicted to trust' />
        <Section>
          <SectionWrapper>
            <Grid container justifyContent='space-evenly' alignItems='center'>
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
              <Grid item xs={12} md={5}>
                <StyledImg src={Money} alt='figure1' />
              </Grid>
            </Grid>
          </SectionWrapper>
          <MobileWrapper>
            <Grid container justifyContent='space-evenly' alignItems='center'>
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
          </MobileWrapper>
        </Section>
        <Section>
          <MobileWrapper>
            <Grid container justifyContent='center' alignItems='center'>
              <Grid item xs={12}>
                <h3>Our team</h3>
              </Grid>
              <Grid item xs={12}>
                <div className='team__section3-slider-container --flex-row'>
                  {members.map((el, index) => (
                    <div
                      key={index}
                      className='team__section3-slider-item'
                      style={{ paddingBottom: '30px' }}
                    >
                      <img className='team__section3-image' src={el.photo} alt='avatar' />
                      <div className='team__section3-text-container'>
                        <h4 className='team__section3-h4'>
                          {el.firstName}
                          <br />
                          {el.lastName}
                        </h4>
                        <p className='team__section3-text'>{el.description}</p>
                        <div className='team__section3-slider-icons-container  --flex-row'>
                          {el.socialMedia.map((social, index) => {
                            switch (social) {
                              case 'instagram':
                                return <Instagram className='team_section3-slider-icon-item' />;
                              case 'linkedin':
                                return <LinkedIn className='team_section3-slider-icon-item' />;
                              case 'telegram':
                                return <Telegram className='team_section3-slider-icon-item' />;
                              case 'whatsup':
                                return <WhatsUp className='team_section3-slider-icon-item' />;
                              case 'skype':
                                return <Skype className='team_section3-slider-icon-item' />;
                              case 'facebook':
                                return <FaceBook className='team_section3-slider-icon-item' />;
                              case 'viber':
                                return <Viber className='team_section3-slider-icon-item' />;
                              case 'youtube':
                                return <YouTube className='team_section3-slider-icon-item' />;
                              case 'slack':
                                return <YouTube className='team_section3-slider-icon-item' />;
                            }
                          })}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </Grid>
            </Grid>
          </MobileWrapper>
          <SimpleWrapper>
            <Grid container justifyContent='center' alignItems='center'>
              <Grid item xs={12}>
                <h3>Our team</h3>
              </Grid>
              <Grid item xs={12}>
                <Carousel
                  isRTL={false}
                  pagination={false}
                  breakPoints={breakPoints}
                  disableArrowsOnEnd={false}
                  itemPadding={[0, 0, 40, 0]}
                >
                  {members.map((el, index) => (
                    <div
                      key={index}
                      className='team__section3-slider-item'
                      style={{ paddingBottom: '30px' }}
                    >
                      <img className='team__section3-image' src={el.photo} alt='avatar' />
                      <div className='team__section3-text-container'>
                        <h4 className='team__section3-h4'>
                          {el.firstName}
                          <br />
                          {el.lastName}
                        </h4>
                        <p className='team__section3-text'>{el.description}</p>
                        <div className='team__section3-slider-icons-container  --flex-row'>
                          {el.socialMedia.map((social, index) => {
                            switch (social) {
                              case 'instagram':
                                return <Instagram className='team_section3-slider-icon-item' />;
                              case 'linkedin':
                                return <LinkedIn className='team_section3-slider-icon-item' />;
                              case 'telegram':
                                return <Telegram className='team_section3-slider-icon-item' />;
                              case 'whatsup':
                                return <WhatsUp className='team_section3-slider-icon-item' />;
                              case 'skype':
                                return <Skype className='team_section3-slider-icon-item' />;
                              case 'facebook':
                                return <FaceBook className='team_section3-slider-icon-item' />;
                              case 'viber':
                                return <Viber className='team_section3-slider-icon-item' />;
                              case 'youtube':
                                return <YouTube className='team_section3-slider-icon-item' />;
                              case 'slack':
                                return <YouTube className='team_section3-slider-icon-item' />;
                            }
                          })}
                        </div>
                      </div>
                    </div>
                  ))}
                </Carousel>
              </Grid>
            </Grid>
          </SimpleWrapper>
        </Section>
        <Section>
          <SectionWrapper>
            <Grid container justifyContent='center' alignItems='center'>
              <Grid item xs={12}>
                <StyledCenter>
                  <h3 className='section7__h3'>Ask us anythings!</h3>
                </StyledCenter>
              </Grid>
              <Grid item xs={12}>
                <StyledCenter>
                  <SInput
                    id='email-input'
                    name='email-input'
                    type='email'
                    placeholder='Your question'
                  />
                </StyledCenter>
              </Grid>
              <Grid item xs={12}>
                <StyledCenter>
                  <SButton>Send</SButton>
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
                  <h3 className='section7__h3'>Ask us anythings!</h3>
                </StyledCenter>
              </Grid>
              <Grid item xs={12}>
                <StyledCenter>
                  <SInput
                    id='email-input'
                    name='email-input'
                    type='email'
                    placeholder='Your question'
                  />
                </StyledCenter>
              </Grid>
              <Grid item xs={12}>
                <StyledCenter>
                  <SButton>Send</SButton>
                </StyledCenter>
              </Grid>
              <Grid item xs={12}>
                <Footer />
              </Grid>
            </Grid>
          </MobileWrapper>
        </Section>
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
`;

export default Team;
