import { useState } from 'react';
import { NavbarWrapper, StyledList, StyledListItem } from './Navbar.styles';

const Navbar = () => {
  return (
    <NavbarWrapper>
      <StyledList>
        <StyledListItem>About Me</StyledListItem>
        <StyledListItem>Skills</StyledListItem>
        <StyledListItem>Portfolio</StyledListItem>
        <StyledListItem>Contact</StyledListItem>
      </StyledList>
    </NavbarWrapper>
  );
};

export default Navbar;
