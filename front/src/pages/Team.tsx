import React, { useCallback, useEffect, useState } from 'react';
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
import { StyledH3, StyledH4 } from 'src/styledComponents/Text';
import { getTeamPage } from 'src/store/teamPage/reducers';
import { thunkFetchTeam } from 'src/store/teamPage/actions';

const Team: React.FC = () => {
  const dispatch = useDispatch<AppThunkDispatch>();
  const content = useSelector(getTeamPage);
  const [condition, setCondition] = useState(500);
  const fetchData = useCallback(() => {
    setCondition(10000);
    dispatch(thunkFetchTeam());
  }, [dispatch]);
  useEffect(() => {
    const intervalValue = condition;
    if (content.length === 0) {
      setCondition(10000);
      dispatch(thunkFetchTeam());
    }
    const interval = setInterval(fetchData, intervalValue);
    return () => clearInterval(interval);
  }, [content, condition, dispatch, fetchData]);
  const defaultContent = {
    HeaderText: content.HeaderText || 'Our team is addicted to trust',
    SectionTitle1: content.SectionTitle1 || 'We build your skills to get finance!',
    SectionText1:
      content.SectionText1 ||
      'Fish text is used by designers, planners and front-end developers when they need to quickly fill mock-ups or prototypes with content.',
    SectionTitle3: content.SectionTitle3 || 'Ask us anythings!'
  };
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
    { width: 800, itemsToShow: 3, itemsToScroll: 1 },
    { width: 1000, itemsToShow: 4, itemsToScroll: 1 },
    { width: 1200, itemsToShow: 5, itemsToScroll: 1 },
    { width: 1500, itemsToShow: 5, itemsToScroll: 1 }
  ];

  return (
    <>
      <Header />
      <div className='overlay'>
        <TopSection message={defaultContent.HeaderText} />
        <Section>
          <SectionWrapper>
            <Grid container justifyContent='space-evenly' alignItems='center' textAlign='end'>
              <Grid item xs={12} md={6}>
                <div>
                  <StyledH3 style={{ textAlign: 'end' }} className='team__section2-h3'>
                    {defaultContent.SectionTitle1}
                  </StyledH3>
                  <StyledP>{defaultContent.SectionText1}</StyledP>
                </div>
              </Grid>
              <Grid item xs={12} md={5}>
                <StyledImg src={Money} alt='figure1' />
              </Grid>
            </Grid>
          </SectionWrapper>
          <MobileWrapper>
            <Grid container direction='column' justifyContent='space-evenly'>
              <Grid item xs={4}>
                <StyledImg src={Money} alt='figure1' />
              </Grid>
              <Grid item xs={5}>
                <div>
                  <StyledH3 className='team__section2-h3'>{defaultContent.SectionTitle1}</StyledH3>
                  <StyledP>{defaultContent.SectionText1}</StyledP>
                </div>
              </Grid>
            </Grid>
          </MobileWrapper>
        </Section>
        <Section>
          <MobileWrapper>
            <Grid container justifyContent='center' alignItems='center'>
              <Grid item xs={12}>
                <StyledH3 style={{ marginBottom: '60px' }}>Our team</StyledH3>
              </Grid>
              <Grid item xs={12}>
                <div className='team__section3-slider-container --flex-row'>
                  {members.map((el, index) => (
                    <MemberWrapper key={index}>
                      <StyledAvatar src={el.photo} alt='avatar' />
                      <div>
                        <StyledH4 className='team__section3-h4'>{`${el.firstName} ${el.lastName}`}</StyledH4>
                        <StyledDescription>{el.description}</StyledDescription>
                        <IconsContainer className='--flex-row'>
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
                        </IconsContainer>
                      </div>
                    </MemberWrapper>
                  ))}
                </div>
              </Grid>
            </Grid>
          </MobileWrapper>
          <SimpleWrapper>
            <Grid container justifyContent='center' alignItems='center'>
              <Grid item xs={12}>
                <StyledH3>Our team</StyledH3>
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
                    <MemberWrapper key={index}>
                      <StyledAvatar src={el.photo} alt='avatar' />
                      <div>
                        <StyledMemberName>
                          {el.firstName}
                          <br />
                          {el.lastName}
                        </StyledMemberName>
                        <StyledDescription>{el.description}</StyledDescription>
                        <IconsContainer className='--flex-row'>
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
                        </IconsContainer>
                      </div>
                    </MemberWrapper>
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
                  <StyledH3 className='section7__h3'>{defaultContent.SectionTitle3}</StyledH3>
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
                  <StyledH3 className='section7__h3'>{defaultContent.SectionTitle3}</StyledH3>
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

const StyledMemberName = styled.h4`
  @media (max-width: 1440px) {
    margin: 15px 0px;
  }
`;

const StyledAvatar = styled.img`
  @media (max-width: 1440px) {
    width: 200px;
  }
  @media (max-width: 768px) {
    width: 100%;
  }
`;

const StyledDescription = styled.p`
  font-weight: 600;
  font-size: 18px;
  line-height: 30px;
  margin-top: 40px;
  min-height: 90px;
  @media (max-width: 1440px) {
    margin: 20px 0px;
  }
  @media (max-width: 768px) {
    min-height: 60px;
    font-size: 14px;
    text-align: center;
  }
`;

const StyledP = styled.p`
  font-weight: 600;
  font-size: 24px;
  line-height: 48px;
  color: #dadada;
  margin-top: 55px;
  @media (max-width: 768px) {
    font-size: 14px;
    line-height: 16px;
    padding-left: 20px;
    padding-right: 20px;
  }
`;
const IconsContainer = styled.div`
  justify-content: flex-start;
  gap: 50px;
  @media (max-width: 768px) {
    justify-content: center;
  }
`;
const MemberWrapper = styled.div`
  max-width: 264px;
  padding-bottom: 30px;
  @media (max-width: 1440px) {
    max-width: 200px;
  }
  @media (max-width: 768px) {
    padding-bottom: 50px;
  }
  @media (max-width: 480px) {
    max-width: none;
  }
`;

const StyledCenter = styled.div`
  display: flex;
  justify-content: center;
`;

const StyledImg = styled.img`
  width: -webkit-fill-available;
  max-width: 90vw;
`;

export default Team;
