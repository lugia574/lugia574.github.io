// import { useState } from "react";

import Footer from "./components/layout/Footer";
import Header from "./components/layout/Header";
import Main from "./components/layout/Main";
import { PortfolioThemeProvider } from "./context/ThemeContext";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <>
      <PortfolioThemeProvider>
        <body>
          <Header />
          <Main />
          <Footer />
        </body>
      </PortfolioThemeProvider>
    </>
  );
}

export default App;

{
  /* <a href="./sprint1/index.html"> 프로젝트 1</a>
<a href="./sprint2/index.html"> 프로젝트 2</a> */
}
