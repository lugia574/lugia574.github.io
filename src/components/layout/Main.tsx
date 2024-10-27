import styled from "styled-components";
import Intro from "../../pages/Intro";
import Skills from "../../pages/Skills";
import Archiving from "../../pages/Archiving";
import Projects from "../../pages/Projects";
import Career from "../../pages/Career";
import AboutMe from "../../pages/AboutMe";
import TopButton from "../common/TopButton";
import TwinkleStar from "../effects/TwinkleStar";
// import Star from "../effects/Star";
// interface Props {}

const Main = () => {
  return (
    <MainStyle>
      <Intro />
      <AboutMe />
      <Skills />
      <Archiving />
      <Projects />
      <Career />
      <TopButton />
      <TwinkleStar />
    </MainStyle>
  );
};

const MainStyle = styled.div`
  background-color: ${({ theme }) => theme.color.black};
  color: ${({ theme }) => theme.color.white};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export default Main;
