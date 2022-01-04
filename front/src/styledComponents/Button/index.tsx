import styled from 'styled-components';

export const SButton = styled.button`
  transform: translateY(-46px);
  padding: 30px 110px;
  border-radius: 50px;
  margin: 40px;
  font-weight: bold;
  font-size: 18px;
  line-height: 22px;
  display: flex;
  justify-self: center;
  color: #dadada;
  text-align: center;
  background: linear-gradient(270deg, #ec1b59 0%, #72147e 100%);
  transition: filter 0.4s;
  :hover {
    cursor: pointer;
    background: linear-gradient(270deg, #72147e 0%, #ec1b59 100%);
    filter: brightness(150%);
    transition: filter 0.6s;
  }
`;
