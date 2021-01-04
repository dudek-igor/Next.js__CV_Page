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
import { StyledWrapper, StyledSkillsWrapper } from './Skills.styled';

const hardSkills = [
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
const softSkills = [
  { id: 0, text: 'English - B1' },
  { id: 1, text: 'Reading documentations' },
  { id: 2, text: 'Skilful usage RWD & Pixel-Perfect' },
  { id: 3, text: 'Writing highest quality JS code' },
  { id: 4, text: 'Understanding OOP - DRY, KISS, SOLID...' },
  { id: 5, text: 'Team-Player - Scrum/Agile' },
  { id: 6, text: 'Follow trends, Knowledge hungry' },
  { id: 7, text: '...and much more.' },
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
      start: 'top 90%',
    },
  });
};

const Skills = () => {
  // Ref
  const hardSkillsRef = useRef();
  const softSkillsRef = useRef();
  // Effect
  useEffect(() => {
    const animateElements = [
      ...hardSkillsRef.current.children,
      ...softSkillsRef.current.children,
    ];
    handleAnimation(animateElements);
  }, []);
  return (
    <StyledWrapper id='skills'>
      {/* Hard Skills */}
      <StyledSkillsWrapper ref={hardSkillsRef}>
        <h1>My Skills...</h1>
        {hardSkills.map(({ id, svg, text, color }) => (
          <Skill
            key={id}
            hardSkill={true}
            svg={svg}
            text={text}
            color={color}
          />
        ))}
      </StyledSkillsWrapper>
      {/* Soft Skills */}
      <StyledSkillsWrapper ref={softSkillsRef}>
        <h1>Also...</h1>
        {softSkills.map(({ id, text }) => (
          <Skill key={id} text={text} />
        ))}
      </StyledSkillsWrapper>
    </StyledWrapper>
  );
};

export default Skills;
