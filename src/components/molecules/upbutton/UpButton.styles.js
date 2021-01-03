import styled from 'styled-components';

export const StyledButton = styled.button`
  display: none;
  opacity: 0;
  transform: translateX(-10px);
  width: 48px;
  height: 48px;
  border: none;
  border-radius: 50%;
  position: fixed;
  bottom: 48px;
  right: 48px;
  background-color: ${({ theme }) => theme.iconsColor};
  color: ${({ theme }) => theme.bodyColor};
  box-shadow: 0px 5px 5px 0px rgba(0, 0, 0, 0.3);
  svg {
    height: 60%;
    width: 100%;
  }
`;
