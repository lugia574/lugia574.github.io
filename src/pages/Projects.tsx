import styled from "styled-components";
import Title from "../components/common/Title";
import ProjectCard from "../components/common/ProjectCard";
// interface Props {}

const PROJECTLIST = [
  {
    name: "여행 관리/ 공유 웹 서비스",
    imgSrc: "/images/7days-main.png",
    summary:
      "Google Map API 를 이용하여 국내외 여행지를 계획하고 공유하는 커뮤니티 웹 서비스 팀 프로젝트",
    period: "24.04.23~24.05.24",
    tech: "TypeScript, react.js, Zutand, React-Query ...",
    source: "https://github.com/7days-routrip/routrip",
  },

  {
    name: "도서 구매사이트",
    imgSrc: "/images/bookstore-main.png",
    summary: "도서 구매사이트 프로젝트입니다.",
    period: "23.12.11 ~ 24.01.15",
    tech: "TypeScript, react.js, Zutand, React-Query ...",
    source: "https://github.com/lugia574/book-store",
  },

  {
    name: "커뮤니티 웹 개발",
    imgSrc: "/images/react-spring.png",
    summary: "커뮤니티 웹 게시판 개발",
    period: "24.12.26~25.01.10",
    tech: "Java, Spring Boot, JPA, react.js, Zutand, React-Query ...",
    source: "https://github.com/lugia574/spring-react",
  },
  {
    name: "모멤텀 앱 클론 사이트",
    imgSrc: "/images/momentum_main.png",
    summary: "모멤텀 앱 클론 사이트 프로젝트입니다.",
    period: "24.04.23~24.05.24",
    tech: "HTML, JavaScript, CSS",
    source: "https://github.com/lugia574/Rugia_momentum.github.io",
  },
];

const Projects = () => {
  return (
    <ProjectsStyle id="project">
      <div className="project-wrapper">
        <Title children={"Projects"} />
        <div className="project-items">
          {PROJECTLIST.map((item, idx) => (
            <ProjectCard key={idx} item={item} />
          ))}
        </div>
      </div>
    </ProjectsStyle>
  );
};

const ProjectsStyle = styled.div`
  background-color: ${({ theme }) => theme.color.backGroundGray};
  width: 75%;
  z-index: 2;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 4rem 1.5rem;

  .project-wrapper {
    width: 80%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 3rem;
  }

  .project-items {
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
