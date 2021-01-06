import styled from 'styled-components';

export const StyledWrapper = styled.section`
  min-height: 100vh;
  padding: 48px 24px;
  // For GSAP
  & > * {
    opacity: 0;
    transform: translateX(-10px);
  }
  h1,
  h2 {
    margin: 32px 0;
    text-align: center;
    width: 100%;
  }
  h1 {
    font-size: 40px;
  }
  h2 {
    font-size: 32px;
  }
  p {
    text-align: justify;

    @media (min-width: 768px) {
      padding: 0 64px;
      font-size: 18px;
    }
    @media (min-width: 1024px) {
      padding: 0 128px;
      font-size: 20px;
    }
  }
  a {
    font-weight: bold;
    transition: color 300ms ease-out;
    &:hover {
      color: #1877f2;
    }
  }
`;

export const StyledEducationWrapper = styled.div`
  text-align: center;
  margin-bottom: 32px;
  display: flex;
  flex-direction: column;
  span {
    margin: 4px 0;
  }
  span:first-child {
    font-weight: bold;
    font-size: 18px;
  }
  span:not(:first-child) {
    margin: 0 24px;
  }
`;

export const StyledGithubWrapper = styled.a`
  max-width: 700px;
  margin: 0 auto;
  margin-bottom: 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  span {
    display: block;
    width: 48px;
    height: 48px;
    svg {
      transform: rotate(90deg) translateY(0px);
      width: 48px;
      height: 48px;
      transition: all 300ms ease-out;
    }
  }
  p {
    font-size: 16px;
    word-break: break-all;
    text-align: right;
    transition: color 300ms ease-out;
    padding: 0;
  }
  &:hover {
    svg {
      fill: #1877f2;
      transform: rotate(90deg) translateY(-10px);
    }
    p {
      color: #1877f2;
    }
  }
`;
