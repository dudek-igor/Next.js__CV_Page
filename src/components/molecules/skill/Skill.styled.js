import styled from 'styled-components';

export const StyledSkillWrapper = styled.div`
  width: 250px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 8px;
  svg {
    width: 80px;
    height: auto;
    fill: ${({ color }) => color};
  }
  // For GSAP
  opacity: 0;
  transform: translateX(-5px);
`;
