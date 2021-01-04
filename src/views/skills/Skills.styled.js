import styled from 'styled-components';

export const StyledWrapper = styled.section`
  min-height: 100vh;
  padding: 48px 24px;
  h1 {
    margin: 32px 0 24px;
    font-size: 40px;
    text-align: center;
    // For GSAP
    opacity: 0;
    transform: translateX(-5px);
  }
  @media (min-width: 767px) {
    padding: 64px;
  }
`;

export const StyledSVGSkillsWrapper = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-evenly;
  align-items: center;
`;
