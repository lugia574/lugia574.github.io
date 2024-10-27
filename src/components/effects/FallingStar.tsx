import { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";

interface FallingStarProps {
  count?: number;
  white?: boolean;
  maxDelay?: number;
  minSpeed?: number;
  maxSpeed?: number;
  angle?: number;
  direction?: "left" | "right";
}

const MAX_FallingStar_COUNT = 50;
const colors = ["#c77eff", "#f6ff7e", "#ff8d7e", "#ffffff"];

const FallingStar = ({
  count = 12,
  maxDelay = 15,
  minSpeed = 2,
  maxSpeed = 4,
  angle = 30,
  direction = "left",
}: FallingStarProps) => {
  const FallingStarCount =
    count < MAX_FallingStar_COUNT ? count : MAX_FallingStar_COUNT;
  const [FallingStarInterval, setFallingStarInterval] = useState<number>(0);

  useEffect(() => {
    const calcFallingStarInterval = () => {
      const innnerWidth = window.innerWidth;
      setFallingStarInterval(Math.floor((innnerWidth * 1.5) / (count * 5)));
    };

    calcFallingStarInterval();
    window.addEventListener("resize", calcFallingStarInterval);
    return () => {
      window.removeEventListener("resize", calcFallingStarInterval);
    };
  }, []);
  return (
    <FallingStarStyle $direction={direction} $angle={angle}>
      {new Array(FallingStarCount).fill(0).map((_e, idx) => {
        const left =
          direction === "left"
            ? `${Math.random() * count * 5 * FallingStarInterval}px`
            : `${
                window.innerHeight -
                Math.random() * count * 5 * FallingStarInterval
              }px`;
        const animationDelay = `${Math.random() * maxDelay}s`;
        const animationDuration =
          maxSpeed > minSpeed
            ? `${minSpeed + Math.random() * maxSpeed}s`
            : `${2 + Math.random() * 4}`;
        const colorIndex = Math.floor(Math.random() * colors.length - 0.001); // 별 색상
        const size = `${2 + Math.floor(Math.random() * 5)}px`; // 별 크기
        const boxShadow = `0px 0px 10px 3px ${colors[colorIndex]}`;
        return (
          <div
            key={idx}
            style={{
              left,
              animationDelay,
              animationDuration,
              boxShadow,
              width: size,
              height: size,
            }}
            className="FallingStar"
          ></div>
        );
      })}
    </FallingStarStyle>
  );
};

interface FallingStarStyleProps {
  $direction: "left" | "right";
  $angle: number;
}

const FallingStarStyle = styled.div<FallingStarStyleProps>`
  position: fix;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 100%;
  z-index: 999;
  overflow: hidden;

  .FallingStar {
    position: relative;
    top: 50%;
    width: 4px;
    height: 4px;
    border-radius: 50%;
    background-color: white;
    animation: ${(props) => MeteorKeyframe(props.$direction, props.$angle)} 4s
      ease-in infinite;
    opacity: 0;
  }
  .FallingStar::after {
    position: absolute;
    top: calc(50% - 1px);
    left: -950%;
    width: 2000%;
    height: 2px;
    background: linear-gradient(to left, #fff0, #ffffff);
    content: "";
    transform: ${(props) =>
        props.$direction === "left"
          ? `rotateZ(-${props.$angle}deg)`
          : `rotateZ(-${180 - props.$angle}/deg)`}
      translateX(50%);
  }
  .FallingStar:nth-child(2) {
    transform: translateX(300px);
    animation-delay: 5.1s;
  }
  .FallingStar:nth-child(3) {
    transform: translateX(450px);
    animation-delay: 1s;
  }
`;

const MeteorKeyframe = (
  direction: "left" | "right",
  angle: number
) => keyframes`
    0% {
        top: -10vh;
        transform: translateX(0px);
        opacity: 1;
    }
    100% {
        top: 110vh;
        transform: translateX(${direction === "left" ? "-" : "+"}${
  120 / Math.tan((angle * Math.PI) / 180)
}vh);
        opacity: 1;
    }
`;
export default FallingStar;
