import styled, { css } from 'styled-components';

export const StyledSkillWrapper = styled.div`
  width: 450px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 48px;
  div {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    svg {
      width: 48px;
      height: 48px;
    }
    span {
      font-size: 20px;
      font-weight: bold;
      text-align: right;
      &:first-child {
        margin: 0 16px;
      }
    }
  }
  // For GSAP
  opacity: 0;
  transform: translateX(-5px);
  ${({ hardSkill }) =>
    hardSkill &&
    css`
      width: 250px;
      margin-bottom: 8px;
      @media (max-width: 540px) {
        width: 180px;
      }
      @media (max-width: 410px) {
        width: 150px;
      }
      // For Loader
      div {
        justify-content: center;
      }
      h2 {
        text-align: center;
      }
      svg {
        width: 80px;
        height: auto;
        fill: ${({ color }) => color};
      }
    `}
`;
