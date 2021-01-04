import { StyledSkillWrapper } from './Skill.styled';
import { IoBookOutline } from 'react-icons/io5';

const Skill = ({ hardSkill, svg, text, color }) => {
  if (hardSkill) {
    return (
      <StyledSkillWrapper hardSkill={hardSkill} color={color}>
        {svg}
        <h2>{text}</h2>
      </StyledSkillWrapper>
    );
  } else {
    return (
      <StyledSkillWrapper>
        <div>
          <span>
            <IoBookOutline />
          </span>
          <span>{text}</span>
        </div>
      </StyledSkillWrapper>
    );
  }
};

export default Skill;
