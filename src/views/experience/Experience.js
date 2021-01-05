import { gsapAnimation } from 'src/utils';
import { useRef, useEffect, useState } from 'react';
import axios from 'axios';
import { SiGithub } from 'react-icons/si';
import { IoIosArrowUp } from 'react-icons/io';

// Styles
import {
  StyledWrapper,
  StyledEducationWrapper,
  StyledGithubWrapper,
} from './Experience.styled';

const Experience = () => {
  // State
  const [githubRepos, setGitHubRepos] = useState([]);
  // Ref
  const experienceWrapper = useRef();
  gsapAnimation;
  // Effect
  useEffect(async () => {
    // Fetch Repos then animations
    const { data } = await axios.get(
      'https://api.github.com/users/dudek-igor/repos?sort=created:asc&per_page=5'
    );
    setGitHubRepos(data);
    // Animations
    const animateElements = [...experienceWrapper.current.children];
    const trigger = animateElements[0];
    gsapAnimation(animateElements, trigger);
  }, []);
  return (
    <StyledWrapper id='experience' ref={experienceWrapper}>
      <h1>Experience</h1>
      <p>
        Unfortunately.... I'am lack of corporate experience, however it doesn't
        mean i'm not familiar with SCRUM methodology, handling version control -
        GIT, or doing tasks from JIRA. Always, I try to turn my every single
        minus into a plus as soon as possible. When I was studying genetics, I
        discovered Javascript (with a little help from my friends, of course).
        Then I decided to change my career path and become a
        <strong> developer</strong>. To verify my skills check my{' '}
        <a href='https://github.com/dudek-igor'>GitHub Profile. </a>
      </p>
      <h2>Education</h2>
      <StyledEducationWrapper>
        <span>WSB University of Wrocław</span>
        <span>Postgraduate Study</span>
        <span>Front-End Developer with Angular.</span>
        <span>2020 - now</span>
      </StyledEducationWrapper>
      <StyledEducationWrapper>
        <span>University of Wrocław</span>
        <span>Bachelor's degree</span>
        <span>Genetics and Experimental Biology</span>
        <span>2015 - 2020</span>
      </StyledEducationWrapper>
      <h2>Check my latest github repos</h2>
      {githubRepos.map((repo) => (
        <StyledGithubWrapper href='*' key={repo.id}>
          <span>
            <IoIosArrowUp />
          </span>
          <p>{repo.name}</p>
        </StyledGithubWrapper>
      ))}
    </StyledWrapper>
  );
};

export default Experience;
