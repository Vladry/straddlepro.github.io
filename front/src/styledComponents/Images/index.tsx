import styled from 'styled-components';
import React, { useCallback, useEffect, useState } from 'react';
import IPhone from 'public/images/home/iPhone2.png';
interface SImgProps {
  delta: number;
  background: string;
  rotate: string;
}

interface ContainerProps {
  offset?: number;
  background?: string;
  rotate?: number;
}

export const SImg: React.FC<SImgProps> = ({ delta, background, rotate }) => {
  const [offset, setOffset] = useState(-1);
  const [condition, setCondition] = useState(-1);
  const fetchData = useCallback(() => {
    if (offset >= 101) {
      setCondition(condition * -1);
      return setOffset(100);
    }
    if (offset <= 0) {
      setCondition(condition * -1);
      return setOffset(1);
    }
    if (offset <= -1) {
      setOffset(1);
    } else {
      setOffset(offset + delta * condition);
    }
  }, [offset, condition, delta, setCondition, setOffset]);
  useEffect(() => {
    const interval = setInterval(fetchData, 100);
    return () => clearInterval(interval);
  }, [fetchData]);

  return (
    <StyledBox rotate={rotate === 'L' ? 75 : 25}>
      <StyledContainer offset={offset} background={background}>
        <StyledImg src={IPhone} />
      </StyledContainer>
    </StyledBox>
  );
};

const StyledBox = styled.div<ContainerProps>`
  position: absolute;
  left: ${(props) => `calc(${props.rotate}vw - 168px)`};
  @media (max-width: 768px) {
    position: relative;
    left: 0px;
  }
`;

const StyledContainer = styled.div<ContainerProps>`
  position: relative;
  bottom: 350px;
  background: ${(props) => `url(${props.background}) 50% ${props.offset}% no-repeat`};
  transition: 1s linear;
  transition-property: background-position;
  justify-content: center;
  display: flex;
  min-height: 700px;
  width: 337px;
  border-radius: 45px;
  max-height: 896px;
  @media (max-width: 768px) {
    position: relative;
    width: 115px;
    bottom: 0px;
    min-height: 200px;
    max-height: 250px;
    left: calc(50% - 57px - 0.5px);
    background-size: 33vw auto;
    border-radius: 25px;
  }
  @media (max-height: 400px) {
    width: 115px;
    min-height: 249px;
    max-height: 250px;
    left: calc(50% - 57px - 0.5px);
    background-size: 33vw auto;
    border-radius: 35px;
  }
`;

const StyledImg = styled.img`
  max-width: 80vw;
  max-height: 700px;
  @media (max-width: 768px) {
    position: relative;
    width: 125px;
    max-height: 250px;
  }
  @media (max-height: 400px) {
    position: relative;
    width: 125px;
    max-height: 250px;
  }
`;
