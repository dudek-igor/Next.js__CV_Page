import styled from 'styled-components';
export const HamburgerWrapper = styled.div`
  display: none;
  @media (max-width: 767px) {
    position: fixed;
    top: 48px;
    right: 48px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }
  @media (max-width: 360px) {
    top: 32px;
    right: 32px;
  }
`;

export const StyledBurger = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 48px;
  height: 48px;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 10;
  &:focus {
    outline: none;
  }
  div {
    width: 100%;
    height: 4px;
    background: ${({ theme }) => theme.iconsColor};
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;
    :first-child {
      transform: ${({ open }) => (open ? 'rotate(45deg)' : 'rotate(0)')};
    }
    :nth-child(2) {
      opacity: ${({ open }) => (open ? '0' : '1')};
      transform: ${({ open }) => (open ? 'translateX(20px)' : 'translateX(0)')};
    }
    :nth-child(3) {
      transform: ${({ open }) => (open ? 'rotate(-45deg)' : 'rotate(0)')};
    }
  }
`;
