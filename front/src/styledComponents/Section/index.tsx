import styled from 'styled-components';

export const Section = styled.div`
  background: radial-gradient(50% 50% at 50% 50%, #1a012b 0%, #040013 100%);
  color: #dadada;
  font-family: 'Monserrat', serif;
  min-height: 100vh;
  max-height: 100vh;
  @media (max-width: 768px) {
    max-height: fit-content;
  }
`;
