import { useRef, useEffect } from 'react';
import { SiLinkedin, SiFacebook, SiGithub } from 'react-icons/si';
import { gsapAnimation } from 'src/utils';
//Styles
import {
  StyledHeader,
  Content,
  StyledH1,
  StyledP,
  SocialLinks,
} from './Header.styled';

// Main Component
const Header = () => {
  const content = useRef(null);
  useEffect(() => {
    // GSAP Animations
    const animateElements = [...content.current.children];
    gsapAnimation(animateElements);
  }, []);
  return (
    <StyledHeader>
      <Content ref={content}>
        <StyledH1>Hello World</StyledH1>
        <StyledH1>I'm Igor Dudek</StyledH1>
        <StyledP>JavaScript Developer</StyledP>
        <SocialLinks>
          <li>
            <a
              href='https://www.linkedin.com/in/igor-dudek'
              rel='noreferrer noopener'
              target='_blank'
            >
              <SiLinkedin />
            </a>
          </li>
          <li>
            <a
              href='https://www.facebook.com/dudekigor'
              rel='noreferrer noopener'
              target='_blank'
            >
              <SiFacebook />
            </a>
          </li>
          <li>
            <a
              href='https://github.com/dudek-igor'
              rel='noreferrer noopener'
              target='_blank'
            >
              <SiGithub />
            </a>
          </li>
        </SocialLinks>
      </Content>
    </StyledHeader>
  );
};

export default Header;
