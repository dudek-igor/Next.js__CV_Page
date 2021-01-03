import styled from 'styled-components';

export const StyledButton = styled.button`
  display: none;
  opacity: 0;
  transform: translateX(-10px);
  width: 48px;
  height: 48px;
  border: none;
  border: 1px solid black;
  border-radius: 50%;
  position: fixed;
  bottom: 56px;
  left: 56px;
  color: black;
  box-shadow: 0px 5px 5px 0px rgba(0, 0, 0, 0.3);
  svg {
    height: 60%;
    width: 100%;
  }
`;
