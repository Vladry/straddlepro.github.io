import styled from 'styled-components';

export const SButton = styled.button`
  padding: 30px 20px;
  border-radius: 50px;
  margin: 40px;
  font-weight: bold;
  font-size: 18px;
  line-height: 22px;
  max-width: 40vw;
  display: flex;
  width: -webkit-fill-available;
  color: #dadada;
  text-align: center;
  justify-content: center;
  background: linear-gradient(270deg, #ec1b59 0%, #72147e 100%);
  transition: filter 0.4s;
  :hover {
    cursor: pointer;
    background: linear-gradient(270deg, #72147e 0%, #ec1b59 100%);
    filter: brightness(150%);
    transition: filter 0.6s;
  }
`;

export const AboutButton = styled.button`
  padding: 40px 140px;
  border-radius: 46px;
  font-weight: bold;
  font-size: 18px;
  line-height: 22px;
  color: #dadada;
  transition: filter 0.4s;
  @media (max-width: 768px) {
    padding: 20px 70px;
  }
  :hover {
    cursor: pointer;
    filter: brightness(150%);
    transition: filter 0.6s;
  }
`;
