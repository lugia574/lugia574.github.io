// interface Props {}

import { useState } from "react";
import styled from "styled-components";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleScrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) section.scrollIntoView({ behavior: "smooth" });

    if (menuOpen) setMenuOpen((prev) => !prev);
  };
  return (
    <HeaderStyle>
      <div className="header">
        <div className="header-main">
          <div className="logo">My Logo</div>
          <nav className="desktop-nav">
            <div className="" onClick={() => handleScrollToSection("about-me")}>
              About me
            </div>
            <div className="" onClick={() => handleScrollToSection("skills")}>
              Skills
            </div>
            <div
              className=""
              onClick={() => handleScrollToSection("archiving")}
            >
              Archiving
            </div>
            <div className="" onClick={() => handleScrollToSection("project")}>
              Project
            </div>
            <div className="" onClick={() => handleScrollToSection("career")}>
              Career
            </div>
          </nav>
          <div
            className="hamburger modile"
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </div>
        </div>
        <div className="modile-nav modile">
          <nav className={`nav-links ${menuOpen ? "open" : ""}`}>
            <div className="" onClick={() => handleScrollToSection("about-me")}>
              About me
            </div>
            <div className="" onClick={() => handleScrollToSection("skills")}>
              Skills
            </div>
            <div
              className=""
              onClick={() => handleScrollToSection("archiving")}
            >
              Archiving
            </div>
            <div className="" onClick={() => handleScrollToSection("project")}>
              Project
            </div>
            <div className="" onClick={() => handleScrollToSection("career")}>
              Career
            </div>
          </nav>
        </div>
      </div>
    </HeaderStyle>
  );
};

const HeaderStyle = styled.header`
  .header {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 2rem;
    background-color: ${({ theme }) => theme.color.black};
    color: ${({ theme }) => theme.color.white};
    transition: height 0.3s ease-in-out;
    overflow: hidden;
    height: 5rem; /* 기본 헤더 높이 */
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 100000;
  }

  .header.expanded {
    height: 250px; /* 메뉴가 열렸을 때 높이 */
  }

  .header-main {
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 0;
  }

  .logo {
    font-size: 1.5rem;
  }
  .desktop-nav {
    display: flex;
    gap: 1rem;
  }

  .nav-links {
    display: none;
    flex-direction: column;
    gap: 1rem;
    width: 100%;
    text-align: left;
  }
  .nav-links:first-child {
    margin-top: 2rem;
  }

  .nav-links.open {
    display: flex;
  }

  .nav-links a {
    color: ${({ theme }) => theme.color.white};
    text-decoration: none;
    padding: 0.5rem 0;
  }

  .modile {
    display: none;
  }

  .hamburger {
    flex-direction: column;
    cursor: pointer;
  }

  .bar {
    width: 25px;
    height: 3px;
    background-color: ${({ theme }) => theme.color.white};
    margin: 3px 0;
  }

  /* 모바일 반응형 */
  @media (max-width: 768px) {
    .header {
      width: 100vw;
      height: auto;
    }

    .modile {
      display: flex;
    }
    .desktop-nav {
      display: none;
    }

    .modile-nav {
      width: 100%;
      justify-content: flex-end;
    }
  }
`;

export default Header;
