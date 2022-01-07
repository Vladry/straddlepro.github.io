import styled from 'styled-components';
import React from 'react';
import IPhone from 'public/images/home/iPhone2.png';
interface SImgProps {
  progress: number;
  background: string;
}

interface ContainerProps {
  offset: number;
  background: string;
}

export const SImg: React.FC<SImgProps> = ({ progress, background }) => {
  return (
    <StyledContainer offset={progress} background={background}>
      <StyledImg src={IPhone} />
    </StyledContainer>
  );
};

const StyledContainer = styled.div<ContainerProps>`
  position: relative;
  left: calc(50% - 155px);
  max-height: inherit;
  background: ${(props) => `url(${props.background}) 50% ${props.offset * 100}% no-repeat`};
  justify-content: center;
  display: flex;
  min-height: 80vh;
  width: 337px;
  border-radius: 45px;
  z-index: 9;
  @media (max-width: 768px) {
    width: 33vw;
    min-height: 30vh;
    max-height: 30vh;
    left: calc(50% - 16vw);
    background-size: 33vw auto;
    border-radius: 35px;
  }
`;

const StyledImg = styled.img`
  max-width: 85vw;
  @media (max-width: 768px) {
    position: relative;
    width: 34vw;
    max-height: 30vh;
    /* left: calc(50% - 84px); */
  }
`;
