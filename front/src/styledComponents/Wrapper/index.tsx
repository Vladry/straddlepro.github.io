import styled from 'styled-components';

interface WrapperProps {
  background: string;
}

export const SectionWrapper = styled.div`
  justify-content: center;
  display: flex;
  padding: 40px;
  align-items: center;
  min-height: 100vh;
  max-height: 100vh;
  @media (max-width: 768px) {
    display: none;
  }
`;

export const MobileWrapper = styled.div`
  justify-content: center;
  display: none;
  padding: 40px;
  align-items: center;
  min-height: 100vh;
  max-height: 100vh;
  @media (max-width: 768px) {
    display: flex;
  }
`;

export const SimpleWrapper = styled.div`
  justify-content: center;
  display: flex;
  padding: 40px;
  align-items: center;
  min-height: 100vh;
  @media (max-width: 768px) {
    padding-top: 10px;
  }
`;

export const SegmentWrapper = styled.div`
  max-width: 40%;
`;

export const StyledWrapper = styled.div`
  position: relative;
  top: 200px;
`;

export const PhoneWrapperR = styled.div<WrapperProps>`
  background: ${(props) => `url(${props.background}) calc(75vw - 533px) 50% no-repeat`};
  @media (max-width: 768px) {
    background: ${(props) => `url(${props.background}) 0% 50% no-repeat`};
    background-size: 100vw 100vw;
  }
`;

export const PhoneWrapperL = styled.div<WrapperProps>`
  background: ${(props) => `url(${props.background}) calc(27vw - 533px) 50% no-repeat`};
  @media (max-width: 768px) {
    background: ${(props) => `url(${props.background}) 0% 50% no-repeat`};
    background-size: 100vw 100vw;
  }
`;

export const PhoneWrapperM = styled.div<WrapperProps>`
  background: ${(props) => `url(${props.background}) calc(50vw - 533px) 50% no-repeat`};
  @media (max-width: 768px) {
    background: none;
  }
`;

export const TagWrapper = styled.div`
  margin-top: 70px;
  display: flex;
  justify-content: center;
  gap: 10px;
  align-items: center;
  flex-flow: row nowrap;
  @media (max-width: 768px) {
    margin-top: 0px;
  }
`;

export const TagElement = styled.div`
  border: 1px solid #48025e;
  padding-top: 20px;
  padding-bottom: 20px;
  width: 120px;
  min-width: fit-content;
  color: #ec1b59;
  font-weight: 600;
  font-size: 18px;
  line-height: 22px;
  text-align: center;
  @media (max-width: 768px) {
    font-size: 14px;
    padding-top: 10px;
    padding-bottom: 10px;
  }
`;
