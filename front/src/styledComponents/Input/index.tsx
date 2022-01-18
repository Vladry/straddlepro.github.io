import styled from 'styled-components';

export const SInput = styled.input`
  padding: 34px 20px;
  width: 45vw;
  margin: 60px 0px;
  font-weight: 500;
  font-size: 24px;
  /* justify-self: center; */
  /* display: flex; */
  line-height: 29px;
  color: #DADADA;
  border: 3px solid #8D039E;
  border-radius: 6px;
  background: none;
  transition: background 0.2s; }
  :hover {
    cursor: pointer;
    background: #44152e;
    transition: background 0.2s;
  }
  ::placeholder {
    color: #DADADA;
    text-align: center;
  }
  @media (max-width: 768px) {
    margin: 30px 0px;
    padding: 20px 20px;
  }
`;
