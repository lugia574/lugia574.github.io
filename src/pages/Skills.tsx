import styled from "styled-components";
import Title from "../components/common/Title";
// interface Props {}

const Skills = () => {
  return (
    <SkillsStyle id="skills">
      <div className="skills-wrapper">
        <Title children={"skills"} />
        <div className="skill-set">
          <section className="section language">
            <div className="label">Language</div>
            <ul className="skill-set-contents">
              <li>JavaScript</li>
              <li>TypeScript</li>
              <li>Python</li>
              <li>Java</li>
            </ul>
          </section>
          <section className="section frontend">
            <div className="label">Frontend</div>
            <ul className="skill-set-contents">
              <li>React.js</li>
              <li>Zustand</li>
              <li>React-Hook-Form</li>
              <li>TanStack Query</li>
              <li>styled-components</li>
              <li>Sass</li>
            </ul>
          </section>
          <section className="section backend">
            <div className="label">Backend</div>
            <ul className="skill-set-contents">
              <li>MariaDB</li>
              <li>Firebase</li>
              <li>MongoDB</li>
            </ul>
          </section>
        </div>
      </div>
    </SkillsStyle>
  );
};

const SkillsStyle = styled.div`
  .skills-wrapper {
    display: flex;
    width: 100%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 4rem 0;
  }

  /* gap: 3rem; */
  /* .skills-wrapper {
    padding: 3rem;
  } */
  .skill-set {
    border: solid 1px ${({ theme }) => theme.color.white};
    box-shadow: 2px 2px 2px ${({ theme }) => theme.color.black};
    border-radius: 3px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
  }

  .label {
    padding: 1rem;
    margin-right: 1.5rem;
  }

  .section {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .skill-set-contents {
    display: flex;
    padding: 0;
    justify-content: flex-start;
    align-items: center;
    flex-wrap: wrap;
  }

  .skill-set-contents li {
    padding: 1rem;
  }
`;

export default Skills;

{
  /* <section className="section backend">
<div className="label">DevOps</div>
<ul className="skill-set-contents">
  <li>Docker</li>
  <li>AWS</li>
</ul>
</section> */
}
