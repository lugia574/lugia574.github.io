// import { useState } from "react";
import { PortfolioThemeProvider } from './context/ThemeContext';
import { Route, Routes } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Skills from './pages/Skills';
import Archiving from './pages/Archiving';
import Career from './pages/Career';
import Intro from './pages/Intro';
import AboutMe from './pages/AboutMe';
import Projects from './pages/Projects';

function App() {
  return (
    <>
      <PortfolioThemeProvider>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Intro />} />
            <Route path="/about" element={<AboutMe />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/archiving" element={<Archiving />} />
            <Route path="/project" element={<Projects />} />
            <Route path="/career" element={<Career />} />
          </Route>
        </Routes>
      </PortfolioThemeProvider>
    </>
  );
}

export default App;

{
  /* <a href="./sprint1/index.html"> 프로젝트 1</a>
<a href="./sprint2/index.html"> 프로젝트 2</a> */
}
