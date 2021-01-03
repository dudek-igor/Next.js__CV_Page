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
  return (
    <NavbarWrapper>
      <StyledList>
        {menuItems.map((item) => (
          <StyledListItem key={item.id}>
            <StyledLink
              activeClass='active'
              spy={true}
              smooth='linear'
              to={item.to}
              ignoreCancelEvents={true}
            >
              {item.text}
            </StyledLink>
          </StyledListItem>
        ))}
      </StyledList>
    </NavbarWrapper>
  );
};

export default Navbar;
