// Styles
import { HamburgerWrapper, StyledBurger } from './Hamburger.styles';

const Hamburger = ({ openMobileMenu, setOpenMobileMenu }) => {
  return (
    <HamburgerWrapper>
      <StyledBurger
        open={openMobileMenu}
        onClick={() => setOpenMobileMenu(!openMobileMenu)}
      >
        <div />
        <div />
        <div />
      </StyledBurger>
    </HamburgerWrapper>
  );
};

export default Hamburger;
