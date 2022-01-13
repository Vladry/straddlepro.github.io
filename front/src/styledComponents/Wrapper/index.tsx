import styled from 'styled-components';

interface WrapperProps {
  background: string;
}

interface TagWrapperProps {
  side: string;
}

export const SectionWrapper = styled.div`
  justify-content: center;
  display: flex;
  max-height: 100vh;
  min-height: 100vh;
  @media (max-width: 768px) {
    display: none;
    width: 0px;
    padding: 8px;
  }
`;

export const MobileWrapper = styled.div`
  justify-content: center;
  display: none;
  padding: 0px;
  @media (max-width: 768px) {
    display: flex;
    padding: 8px;
    min-height: 100vh;
    /* max-height: 100vh; */
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
    display: none;
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
  background: ${(props) => `url(${props.background}) calc(25vw - 523px) 50% no-repeat`};
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

export const TagWrapper = styled.div<TagWrapperProps>`
  /* margin-top: 70px; */
  /* display: flex; */
  /* justify-content: center; */
  gap: 10px;
  /* align-items: center; */
  /* flex-flow: row nowrap; */
  /* margin: 0px 24px 0px 30px !important; */
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -ms-flex-direction: row;
  flex-direction: row;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: ${(props) => props.side};
  list-style: none;
  margin: 0;
  padding: 0;
  height: auto;
  width: auto;
  @media (max-width: 768px) {
    margin-top: 30px;
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
