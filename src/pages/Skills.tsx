import styled from "styled-components";
import Title from "../components/common/Title";
// interface Props {}

const Skills = () => {
  return (
    <SkillsStyle id="skills">
      <div className="skills-wrapper">
        <Title children={"Skills"} />
        <div className="skill-set">
          <section className="section language">
            <div className="label label-language">Language</div>
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
              {/* <li>React-Hook-Form</li> */}
              <li>TanStack Query</li>
              <li>styled-components</li>
              <li>Sass</li>
            </ul>
          </section>
          <section className="section backend">
            <div className="label">Backend</div>
            <ul className="skill-set-contents">
              <li>Express.js</li>
              <li>Spring Boot</li>
              <li>MyBatis</li>
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
  background-color: ${({ theme }) => theme.color.backGroundGray};
  width: 75%;
  z-index: 2;
  display: flex;
  justify-content: center;

  .skills-wrapper {
    width: 750px;
    display: flex;
    gap: 5rem;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 4rem 1rem;
  }

  .skill-set {
    width: 100%;
    color: ${({ theme }) => theme.color.white};
    border: solid 1px ${({ theme }) => theme.color.white};
    box-shadow: 2px 2px 2px ${({ theme }) => theme.color.black};
    border-radius: 3px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
  }

  .language {
    > ul {
      > li:first-child {
        color: #f3cc83;
      }

      > li:nth-child(2) {
        color: #40bef0;
      }

      > li:nth-child(3) {
        color: #1e6d53;
      }

      > li:last-child {
        color: orange;
      }
    }
  }

  .frontend {
    > ul {
      > li:first-child {
        color: #147298;
      }

      > li:nth-child(2) {
        color: #987b14;
      }

      > li:nth-child(3) {
        color: #ec683b;
      }
      > li:nth-child(4) {
        color: #e3aa97;
      }

      > li:last-child {
        color: #b63409;
      }
    }
  }

  .backend {
    > ul {
      > li:first-child {
        color: #bdd8ea;
      }
      > li:nth-child(2) {
        color: #3d6977;
      }

      > li:nth-child(3) {
        color: #dc8a34;
      }

      > li:last-child {
        color: #3d7740;
      }
    }
  }

  .label {
    padding: 1rem;
    margin-right: 1.5rem;
  }

  .section {
    display: flex;
    justify-content: start;
    align-items: center;
    width: 100%;
  }

  .section:nth-child(2),
  .section:first-child {
    border-bottom: 1px solid;
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
