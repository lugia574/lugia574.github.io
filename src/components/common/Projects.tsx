import styled from "styled-components";
import Title from "./Title";
import ProjectCard from "./ProjectCard";
// interface Props {}

const PROJECTLIST = [
  {
    name: "TEST",
    summary: "설명하는 글입니다.",
    period: "24.04.23~24.05.24",
    tech: "TypeScript, react.js, Zutand, React-Query ...",
    source: "https://github.com/7days-routrip/routrip",
  },

  {
    name: "TEST2",
    summary: "설명하는 글입니다.",
    period: "24.04.23~24.05.24",
    tech: "TypeScript, react.js, Zutand, React-Query ...",
    source: "https://github.com/7days-routrip/routrip",
  },

  {
    name: "TEST3",
    summary: "설명하는 글입니다.",
    period: "24.04.23~24.05.24",
    tech: "TypeScript, react.js, Zutand, React-Query ...",
    source: "https://github.com/7days-routrip/routrip",
  },
  {
    name: "TEST4",
    summary: "설명하는 글입니다.",
    period: "24.04.23~24.05.24",
    tech: "TypeScript, react.js, Zutand, React-Query ...",
    source: "https://github.com/7days-routrip/routrip",
  },
];

const Projects = () => {
  return (
    <ProjectsStyle id="project">
      <div className="project-wrapper">
        <Title children={"Projects"} />
        <div className="project-items">
          {PROJECTLIST.map((item, idx) => (
            <ProjectCard key={idx} name={item.name} />
          ))}
        </div>
      </div>
    </ProjectsStyle>
  );
};

const ProjectsStyle = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 4rem 1.5rem;

  .project-wrapper {
    width: 70%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .project-items {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 2rem;
    margin-top: 2rem;
    justify-content: center;
    align-items: center;
  }
`;

export default Projects;
