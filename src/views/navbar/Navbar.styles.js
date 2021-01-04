import styled from 'styled-components';
import { Link } from 'react-scroll';

export const NavbarWrapper = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 999;
  color: ${({ theme }) => theme.fontColor};
  background-color: ${({ theme }) => theme.bodyColor};
`;

export const StyledList = styled.ul`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  @media (max-width: 767px) {
    position: fixed;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100vh;
    background-color: ${({ theme }) => theme.bodyColor};
    flex-direction: column;
    justify-content: center;
    transform: ${({ openMobileMenu }) =>
      openMobileMenu ? 'translateX(100%)' : 'translateX(0%)'};
    transition: all 250ms ease-in-out;
  }
`;

export const StyledListItem = styled.li`
  text-align: center;
  cursor: pointer;
  /* Padding add to anchor component */
  /* padding: 8px 24px; */
  margin: ${({ scaling }) => (scaling ? '4px 0' : '8px 0')};
  font-size: ${({ scaling }) => (scaling ? '16px' : '20px')};
  transition: all 250ms ease-in-out;
  position: relative;

  @media (max-width: 767px) {
    width: 100%;
    margin-right: 0px;
    margin: 8px 0;
    font-size: 32px;
    transition: none;
    &:last-child {
      margin-right: 0px;
    }
  }
`;

export const StyledLink = styled(Link)`
  display: block;
  padding: 8px 24px;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 10%;
    right: 10%;
    height: 1px;
    background-color: #191919;
    transform-origin: left 50%;
    transform: scaleX(0);
    transition: transform 300ms ease-in-out;
  }
  &:hover::after {
    transform: scaleX(1);
  }

  &.active::after {
    transform: scaleX(1);
  }
`;
