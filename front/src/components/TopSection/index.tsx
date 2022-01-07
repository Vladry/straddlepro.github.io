import React, { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { AppThunkDispatch } from '../../types/AppState';
import Logo from 'public/images/home/logo.png';
import Background from 'public/images/home/1.jpg';
import { Section } from 'src/styledComponents/Section';
import Header from 'components/Header';

interface SectionProps {
  image: string;
}

interface TopSectionProps {
  message: string;
}

const TopSection: React.FC<TopSectionProps> = ({ message }) => {
  const dispatch = useDispatch<AppThunkDispatch>();
  return (
    <StyledSection image={Background}>
      <div className='logo-container'>
        <a className='menu__ref' href='/home'>
          <img className='logo-img' src={Logo} alt='logo' />
        </a>
        <p className='logo-text'>STRADDLE</p>
      </div>
      <h2 className='section1__title'>{message}</h2>
    </StyledSection>
  );
};

const StyledSection = styled(Section)<SectionProps>`
  height: 100vh;
  background-position: 50% 50%;
  background-repeat: no-repeat;
  margin: 0;
  background-image: ${(props) => `url(${props.image})`};
  background-size: cover;
`;

export default TopSection;
