import styled, { css } from 'styled-components';

export const NavbarWrapper = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 999;
  color: white;
  /* background-color: white; */
  /* transition: transform 300ms ease-in-out; */
  /* transform: scaleY(0.5); */
`;

export const StyledList = styled.ul`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

export const StyledListItem = styled.li`
  text-align: center;
  cursor: pointer;
  padding: 8px 24px;
  margin: 16px 0;
  position: relative;
  &:last-child {
    margin-right: 48px;
  }
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 10%;
    right: 10%;
    height: 1px;
    background-color: white;
    transform-origin: left 50%;
    transform: scale(0);
    transition: transform 300ms ease-in-out;
  }
  &:hover::after {
    transform: scaleX(1);
  }
`;
