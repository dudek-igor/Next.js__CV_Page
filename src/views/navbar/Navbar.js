import { useState } from 'react';
import { useScrollPosition } from '@n8tb1t/use-scroll-position';
// Components
import { Hamburger } from 'src/components';
// Styles
import {
  NavbarWrapper,
  StyledList,
  StyledListItem,
  StyledLink,
} from './Navbar.styles';

// Menu Items
const menuItems = [
  { id: 0, to: 'aboutme', text: 'About Me' },
  { id: 1, to: 'skills', text: 'Skills' },
  { id: 2, to: 'portfolio', text: 'Portfolio' },
  { id: 3, to: 'contact', text: 'Contact' },
];

const Navbar = () => {
  // State for scale navbar
  const [scale, setScale] = useState(false);
  // State for open/close mobile menu
  const [openMobileMenu, setOpenMobileMenu] = useState(false);

  // Handle Scale Navbar
  useScrollPosition(({ prevPos, currPos }) => {
    if (currPos.y === 0) {
      setScale(false);
    } else if (prevPos.y <= currPos.y) {
      setScale(false);
    } else setScale(true);
  });

  return (
    <>
      <NavbarWrapper>
        <StyledList openMobileMenu={openMobileMenu}>
          {menuItems.map((item) => (
            <StyledListItem scale={scale} key={item.id}>
              <StyledLink
                // Close Mobile Menu
                onClick={() => setOpenMobileMenu(false)}
                // activeClass='active'
                // spy={true}
                smooth='easeInOutQuint'
                to={item.to}
                ignoreCancelEvents={true}
              >
                {item.text}
              </StyledLink>
            </StyledListItem>
          ))}
        </StyledList>
        <Hamburger
          openMobileMenu={openMobileMenu}
          setOpenMobileMenu={setOpenMobileMenu}
        />
      </NavbarWrapper>
    </>
  );
};

export default Navbar;
