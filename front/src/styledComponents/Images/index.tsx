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
    width: -webkit-fill-available;
    min-height: 50vh;
    max-height: 70vh;
    left: 0px;
  }
`;

const StyledImg = styled.img`
  max-width: 85vw;
`;
