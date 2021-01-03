import { getAge } from 'src/utils/getAge';
import gsap from 'gsap';
import { useRef, useEffect } from 'react';
import { SiLinkedin, SiGithub } from 'react-icons/si';
// Styles
import {
  StyledWrapper,
  StyledInnerWrapper,
  StyledImageWrapper,
  StyledImage,
  InfoWrapper,
  BasicInfo,
  StyledLinkWrapper,
  StyledLink,
} from './AboutMe.styled';

const basicInfo = [
  { id: 0, info: 'Name', content: 'Igor Dudek' },
  { id: 1, info: 'Age', content: getAge('1996/01/17') },
  { id: 2, info: 'Address', content: 'Wroclaw, Poland' },
  { id: 3, info: 'Email', content: 'dudekigor@gmail.com' },
  { id: 4, info: 'Language', content: 'Polish - Fluent, English - B1' },
];

// Handle Animation
const handleAnimation = (element) => {
  gsap.to(element, {
    x: 0,
    opacity: 1,
    duration: 0.7,
    scrollTrigger: {
      trigger: element,
      start: 'top 90%',
      toggleActions: 'play none none reverse',
    },
  });
};

const AboutMe = () => {
  const image = useRef();
  const content = useRef();
  useEffect(() => {
    const arrayOfConntet = [...content.current.children];
    arrayOfConntet.forEach((item) => handleAnimation(item));
    handleAnimation(image.current);
  }, []);
  return (
    <StyledWrapper id='aboutme'>
      <StyledInnerWrapper>
        <StyledImageWrapper ref={image}>
          <StyledImage
            src='/images/my_photo.jpeg'
            alt='Picture of the author'
            width={280}
            height={400}
          />
        </StyledImageWrapper>

        <InfoWrapper ref={content}>
          <h1>Basic Informations</h1>
          {basicInfo.map(({ id, info, content }) => (
            <BasicInfo key={id}>
              <p>{`${info} :`}</p>
              <p>{content}</p>
            </BasicInfo>
          ))}
          <StyledLinkWrapper>
            <StyledLink
              href='https://www.linkedin.com/in/igor-dudek'
              rel='noreferrer noopener'
              target='_blank'
            >
              <SiLinkedin />
            </StyledLink>
            <StyledLink
              href='https://github.com/dudek-igor'
              rel='noreferrer noopener'
              target='_blank'
            >
              <SiGithub />
            </StyledLink>
          </StyledLinkWrapper>

          <h1>About Me</h1>
          <p>
            A geneticist by education, a developer by passion. Currently I'm in
            postgraduate studies at the WSB University in the field of Front-End
            Developer with Angular. I got university degree in Genetics and
            Experimental Biology gained at the University of Wrocław.
          </p>
          <p>Aspiring to be Fullstack Dev in future.</p>
          <p>
            Changes in JavaScript is enormous, but I can say that I am keeping
            pace with them. My lack of corporate experience does not mean that I
            am not familiar with the SCRUM methodology, doing tasks from Jira or
            creating pull requests on GitHub. From experiences gained through
            playing basketball, I will be great in developers team.
          </p>
        </InfoWrapper>
      </StyledInnerWrapper>
    </StyledWrapper>
  );
};

export default AboutMe;
