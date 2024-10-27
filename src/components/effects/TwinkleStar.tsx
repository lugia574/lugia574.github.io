import styled from "styled-components";

interface TwinkleStarProps {
  count?: number;
}

const MAX_TwinkleStar_COUNT = 100;
const colors = ["#c77eff", "#f6ff7e", "#ff8d7e", "#ffffff"];

const TwinkleStar = ({ count = 50 }: TwinkleStarProps) => {
  const TwinkleStarCount =
    count < MAX_TwinkleStar_COUNT ? count : MAX_TwinkleStar_COUNT;

  return (
    <TwinkleStarStyle>
      {new Array(TwinkleStarCount).fill(0).map((_e, idx) => {
        const colorIndex = Math.floor(Math.random() * colors.length - 0.001);
        const size = `${2 + Math.floor(Math.random() * 5)}px`; // 별 크기
        const boxShadow = `0px 0px 10px 3px ${colors[colorIndex]}`;
        const top = `${Math.random() * 100}vh`; // 화면 높이 내 랜덤 위치
        const left = `${Math.random() * 100}vw`; // 화면 너비 내 랜덤 위치

        return (
          <div
            key={idx}
            style={{ boxShadow, width: size, height: size, top, left }}
            className="twinkle"
          ></div>
        );
      })}
    </TwinkleStarStyle>
  );
};

const TwinkleStarStyle = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  pointer-events: none; /* 별들이 상호작용을 방해하지 않도록 */
  overflow: hidden;
  z-index: 1; /* 원하는 z-index 설정 */

  .twinkle {
    width: 4px;
    height: 4px;
    border-radius: 50%;
    background-color: white;
    position: absolute; /* 각 별의 위치를 고정 */
    opacity: 0.7;
    animation: twinkling 0.5s alternate infinite;
  }

  @keyframes twinkling {
    0% {
      box-shadow: 0 0 2px 1px rgba(255, 255, 255, 0.2);
    }
    100% {
      box-shadow: 0 0 8px 4px rgba(255, 255, 255, 0.4);
    }
  }
`;

export default TwinkleStar;
