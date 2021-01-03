import styled from 'styled-components';

export const StyledHeader = styled.header`
  width: 100%;
  position: relative;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: url('/images/header_background.jpg');
  color: white;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 0 95%);
`;
export const Content = styled.div`
  width: 100%;
  min-height: 100vh;
  padding-top: 48px;
  background-color: rgba(0, 0, 0, 0.3);
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media (min-width: 767px) {
    align-items: flex-end;
    padding-right: 48px;
  }
  // All child - For Animations via GSAP
  & > * {
    transform: translateX(-10px);
    opacity: 0;
  }
`;

export const StyledH1 = styled.h1`
  margin: 16px 0;
  font-size: 32px;
  @media (min-width: 767px) {
    font-size: 64px;
  }
`;
export const StyledP = styled.p`
  margin: 16px 0;
  font-size: 24px;
  @media (min-width: 767px) {
    font-size: 54px;
  }
`;

export const SocialLinks = styled.ul`
  margin: 24px 0;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  li {
    width: 48px;
    height: 48px;
    @media (min-width: 767px) {
      width: 56px;
      height: 56px;
      margin-left: 10vw;
    }
    a {
      display: block;
      svg {
        width: 100%;
        height: 100%;
      }
    }
  }
  @media (min-width: 767px) {
    width: 50%;
    justify-content: flex-end;
  }
`;
