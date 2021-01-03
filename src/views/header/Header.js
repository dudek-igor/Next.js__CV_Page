// import Image from 'next/image';
// import {
//   SiHtml5,
//   SiCss3,
//   SiSass,
//   SiGit,
//   SiJavascript,
//   SiTypescript,
//   SiWebpack,
//   SiEslint,
//   SiPrettier,
//   SiReact,
//   SiRedux,
//   SiGatsby,
//   SiNextDotJs,
//   SiNodeDotJs,
//   SiMongodb,
//   SiElectron,
// } from 'react-icons/si';
import gsap from 'gsap';
import { useRef, useEffect } from 'react';
import { SiLinkedin, SiFacebook, SiGithub } from 'react-icons/si';
//Styles
import {
  StyledHeader,
  Content,
  StyledH1,
  StyledP,
  SocialLinks,
} from './Header.styled';

// Handle Animation
const handleAnimation = (parentElements) => {
  const children = [...parentElements.children];
  gsap.to(children, {
    x: 0,
    opacity: 1,
    duration: 1,
    stagger: { each: 0.3 },
  });
};
// Main Component
const Header = () => {
  const content = useRef(null);
  useEffect(() => {
    handleAnimation(content.current);
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
