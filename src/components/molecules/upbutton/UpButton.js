import { useEffect, useRef } from 'react';
import { animateScroll as scroll } from 'react-scroll';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { IoIosArrowUp } from 'react-icons/io';
// Styles
import { StyledButton } from './UpButton.style';

const UpButton = () => {
  // Register Plugin
  gsap.registerPlugin(ScrollTrigger);
  const button = useRef();
  useEffect(() => {
    gsap.to(button.current, {
      x: 0,
      opacity: 1,
      display: 'block',
      scrollTrigger: {
        trigger: button.current,
        start: 'top 30%',
        markers: true,
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
