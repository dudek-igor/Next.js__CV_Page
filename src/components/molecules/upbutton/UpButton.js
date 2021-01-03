import { useEffect, useRef } from 'react';
import { animateScroll as scroll } from 'react-scroll';
import gsap from 'gsap';

import { IoIosArrowUp } from 'react-icons/io';
// Styles
import { StyledButton } from './UpButton.styles';

const UpButton = () => {
  const button = useRef();

  useEffect(() => {
    const trigger = document.querySelector('#aboutme');
    gsap.to(button.current, {
      x: 0,
      opacity: 1,
      display: 'block',
      scrollTrigger: {
        trigger: trigger,
        start: 'top 20%',
        toggleActions: 'play none none reverse none',
      },
    });
  }, []);
  const handleClick = () => {
    scroll.scrollToTop();
  };
  return (
    <StyledButton ref={button} onClick={handleClick}>
      <IoIosArrowUp />
    </StyledButton>
  );
};

export default UpButton;
