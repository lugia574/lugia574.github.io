import { useEffect, useState } from "react";
import styled from "styled-components";

const TopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  // 스크롤 이벤트를 감지해 버튼 표시 여부 결정
  const toggleVisibility = () => {
    if (window.scrollY > 100) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // 상단으로 스크롤하는 함수
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // 부드럽게 스크롤
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <Button onClick={scrollToTop} className={isVisible ? "visible" : "hidden"}>
      TOP
    </Button>
  );
};

const Button = styled.button`
  width: 4rem;
  height: 4rem;
  position: fixed;
  bottom: 3rem;
  right: 3rem;
  background-color: #8888;
  color: ${({ theme }) => theme.color.white};
  border: none;
  font-weight: 600;
  border-radius: 50%;
  cursor: pointer;
  z-index: 1000;
  transition: opacity 0.3s ease, visibility 0.3s ease;
  opacity: 0;
  visibility: hidden;

  &.visible {
    opacity: 1;
    visibility: visible;
  }

  &:hover {
    background-color: ${({ theme }) => theme.color.white};
    color: ${({ theme }) => theme.color.black};
  }
`;

export default TopButton;
