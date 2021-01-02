import styled, { css } from 'styled-components';

export const StyledHeader = styled.header`
  width: 100%;
  height: 100vh;
  position: relative;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: url('/images/header_background.jpg');
  color: white;
`;
export const Shade = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.4);
`;
export const Content = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  color: white;
  padding: 128px;
  text-align: right;
  h1 {
    font-size: 64px;
  }
  p {
    font-size: 36px;
  }
  @media (max-width: 767px) {
    text-align: center;
    padding: 0;
    padding-top: 128px;
    h1 {
      font-size: 32px;
    }
    p {
      font-size: 24px;
    }
  }
  @media (max-width: 823px) and (orientation: landscape) {
    padding-top: 80px;
    h1 {
      font-size: 32px;
    }
    p {
      font-size: 24px;
    }
  }
`;
