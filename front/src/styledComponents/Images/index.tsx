import styled from 'styled-components';
import React, { useCallback, useEffect, useState } from 'react';
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
  const [offset, setOffset] = useState(-1);
  const [condition, setCondition] = useState(-1);
  const fetchData = useCallback(() => {
    if (offset === 100) {
      setCondition(condition * -1);
      return setOffset(99);
    }
    if (offset === 0) {
      setCondition(condition * -1);
      return setOffset(1);
    }
    if (offset === -1) {
      setOffset(1);
    } else {
      setOffset(offset + 1 * condition);
    }
  }, [offset, condition, setCondition, setOffset]);
  useEffect(() => {
    const interval = setInterval(fetchData, 100);
    return () => clearInterval(interval);
  }, [fetchData]);

  return (
    <StyledContainer offset={offset} background={background}>
      <StyledImg src={IPhone} />
    </StyledContainer>
  );
};

const StyledContainer = styled.div<ContainerProps>`
  position: relative;
  left: calc(50% - 155px);
  max-height: inherit;
  background: ${(props) => `url(${props.background}) 50% ${props.offset}% no-repeat`};
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
