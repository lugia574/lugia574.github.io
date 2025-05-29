import styled from 'styled-components';

const Square = () => {
  return (
    <SqaureStyle>
      <div className="cube-wrap">
        <div className="cubes">
          <div className="cube front"></div>
          <div className="cube left"></div>
          <div className="cube top"></div>
          <div className="cube right"></div>
          <div className="cube bottom"></div>
          <div className="cube back"></div>
        </div>
      </div>
    </SqaureStyle>
  );
};

const SqaureStyle = styled.div`
  position: absolute;
  top: 35%;
  left: 20%;
  .cube-wrap {
    width: 100px;
    height: 100px;
    perspective: 300px;

    .cubes {
      width: 100%;
      height: 100%;
      position: relative;
      transform-style: preserve-3d;
      animation: rotateCube 15s infinite linear;
      animation-play-state: running;

      &:hover {
        animation-play-state: paused;
      }

      .cube {
        position: absolute;
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 4rem;
        backface-visibility: hidden;
        border: 1px solid white;

        /* 유리 큐브 효과 핵심 */
        backdrop-filter: blur(2px);
        -webkit-backdrop-filter: blur(2px);

        box-shadow: 0 0 15px rgba(255, 255, 255, 0.2), inset 0 0 10px rgba(255, 255, 255, 0.1);

        backface-visibility: visible;
        transition: all 0.3s ease;
      }

      .front {
        transform: translateZ(50px);
      }

      .back {
        transform: rotateY(180deg) translateZ(50px);
      }

      .right {
        transform: rotateY(90deg) translateZ(50px);
      }

      .left {
        transform: rotateY(-90deg) translateZ(50px);
      }

      .top {
        transform: rotateX(90deg) translateZ(50px);
      }

      .bottom {
        transform: rotateX(-90deg) translateZ(50px);
      }
    }
  }

  @keyframes rotateCube {
    0% {
      transform: rotateX(0deg) rotateY(0deg);
    }
    100% {
      transform: rotateX(360deg) rotateY(360deg);
    }
  }
`;
export default Square;
