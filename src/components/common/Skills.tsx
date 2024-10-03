import styled from "styled-components";
import Title from "./Title";
// interface Props {}

const Skills = () => {
  return (
    <SkillsStyle id="skills">
      <Title children={"skills"} />
      <div className="skill-set">
        <div className="language">Language</div>
        <div className="frontend">Frontend</div>
        <div className="backend">Backend</div>
      </div>
    </SkillsStyle>
  );
};

const SkillsStyle = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .skill-set {
    border: solid 1px ${({ theme }) => theme.color.white};
    box-shadow: 2px 2px 2px ${({ theme }) => theme.color.black};
    border-radius: 3px;
  }
`;

export default Skills;
