import { useEffect, useRef } from 'react';
import gsap from 'gsap';
// Components
import { Skill } from 'src/components';
// Icons
import {
  SiHtml5,
  SiCss3,
  SiSass,
  SiGit,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiWebpack,
  SiNodeDotJs,
} from 'react-icons/si';
import Loader from 'react-loader-spinner';
// Styles
import { StyledWrapper, StyledSVGSkillsWrapper } from './Skills.styled';

const skills = [
  { id: 0, svg: <SiHtml5 />, text: 'HTML5', color: '#E34F26' },
  { id: 1, svg: <SiCss3 />, text: 'CSS3', color: '#1572B6' },
  { id: 2, svg: <SiSass />, text: 'SASS', color: '#CC6699' },
  { id: 3, svg: <SiGit />, text: 'Git', color: '#F05032' },
  { id: 4, svg: <SiJavascript />, text: 'JavaDcript', color: '#F7DF1E' },
  { id: 5, svg: <SiTypescript />, text: 'TypeScript', color: '#007ACC' },
  { id: 6, svg: <SiWebpack />, text: 'Webpack', color: '#8DD6F9' },
  { id: 7, svg: <SiReact />, text: 'React', color: '#61DAFB' },
  { id: 8, svg: <SiNodeDotJs />, text: 'Node.js', color: '#339933' },
  {
    id: 9,
    svg: <Loader type='Circles' color='#00BFFF' height={80} width={80} />,
    text: '...and still learning.',
    color: '#000000',
  },
];

const handleAnimation = (elements) => {
  const trigger = elements[0];
  gsap.to(elements, {
    x: 0,
    opacity: 1,
    duration: 0.8,
    stagger: { each: 0.2 },
    scrollTrigger: {
      trigger: trigger,
      start: 'top center',
    },
  });
};

const Skills = () => {
  // Ref
  const skillHeader = useRef();
  const svgSkills = useRef();
  // Effect
  useEffect(() => {
    const animateElements = [
      skillHeader.current,
      ...svgSkills.current.children,
    ];
    handleAnimation(animateElements);
  }, []);
  return (
    <StyledWrapper id='skills'>
      <h1 ref={skillHeader}> My Skills</h1>
      <StyledSVGSkillsWrapper ref={svgSkills}>
        {skills.map(({ id, svg, text, color }) => (
          <Skill key={id} svg={svg} text={text} color={color} />
        ))}
      </StyledSVGSkillsWrapper>
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus
      excepturi, ex architecto natus modi sunt fuga error nostrum laboriosam,
      saepe qui assumenda rerum culpa laborum. Perferendis repellendus
      perspiciatis porro sit!
    </StyledWrapper>
  );
};

export default Skills;
