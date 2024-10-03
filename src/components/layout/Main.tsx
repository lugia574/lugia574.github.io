import styled from "styled-components";
import Intro from "../common/Intro";
import Skills from "../common/Skills";
import Archiving from "../common/Archiving";
import Projects from "../common/Projects";
import Career from "../common/Career";
import AboutMe from "../common/AboutMe";
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
    </MainStyle>
  );
};

const MainStyle = styled.div``;

export default Main;
