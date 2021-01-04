import styled from 'styled-components';
import Image from 'next/image';

export const StyledWrapper = styled.main`
  min-height: 100vh;
  padding: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const StyledInnerWrapper = styled.div`
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.6);
  border-radius: 30px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media (min-width: 769px) {
    flex-direction: row;
    justify-content: space-evenly;
  }
`;
export const StyledImageWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  // for GSAP
  transform: translateX(-10px);
  opacity: 0;
  @media (min-width: 769px) {
    width: 35%;
    & > * {
      box-shadow: 0px 0px 50px 15px rgba(0, 0, 0, 0.4);
      border-radius: 30px;
    }
  }
`;

export const StyledImage = styled(Image)`
  border-radius: 30px;
`;

export const InfoWrapper = styled.div`
  padding: 0 16px;
  h1 {
    text-align: center;
  }
  p {
    text-align: justify;
  }
  & > * {
    // for GSAP
    transform: translateX(-10px);
    opacity: 0;
  }
  @media (min-width: 769px) {
    width: 65%;
    & > * {
      // for GSAP
      transform: translateX(10px);
    }
  }
`;
export const BasicInfo = styled.span`
  display: flex;
  flex-wrap: wrap;
  margin: 8px 0;
  p {
    flex-basis: 50%;
    padding-left: 5px;
    margin: 4px 0;
  }
  p:first-child {
    font-weight: bold;
  }
  p:last-child {
    text-align: left;
  }
`;
export const StyledLinkWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  svg {
    transition: fill 300ms ease-out;
  }
  svg:hover {
    fill: #1877f2;
  }
`;

export const StyledLink = styled.a`
  display: block;
  flex-basis: 50%;
  padding: 32px 0;
  text-align: center;
  svg {
    width: 48px;
    height: 48px;
  }
`;
