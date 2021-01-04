import { StyledSkillWrapper } from './Skill.styled';

const Skill = ({ svg, text, color }) => {
  return (
    <StyledSkillWrapper color={color}>
      {svg}
      <h2>{text}</h2>
    </StyledSkillWrapper>
  );
};

export default Skill;
