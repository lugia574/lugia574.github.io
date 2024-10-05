import { useState } from "react";
import styled from "styled-components";
interface Props {
  name: string;
}

const ProjectCard = ({ name }: Props) => {
  const [isFlipped, setIsFlipped] = useState(false); // 상태 관리

  return (
    <ProjectCardStyle>
      <div className="flip-box" onClick={() => setIsFlipped((prev) => !prev)}>
        <div className={`flip ${isFlipped ? "flipped" : ""}`}>
          <div className="front">
            <img src="/images/7days-main.png" alt="먼데" />
            <div className="overlay">클릭하세요</div>
          </div>
          <div className="back">
            <div className="project-name">{name}</div>
          </div>
        </div>
      </div>
    </ProjectCardStyle>
  );
};

const ProjectCardStyle = styled.div`
  flex-wrap: nowrap;
  .flip-box {
    display: flex;
    width: 400px;
    height: 400px;
    perspective: 1000px;
    cursor: pointer;
  }

  .flip {
    width: 100%;
    height: 100%;
    position: relative;
    color: white;
    text-align: center;
    line-height: 400px;
    transform-style: preserve-3d;
    transform: rotateY(0deg);
    transition: 0.5s;
  }

  .front img {
    width: 400px;
    height: 400px;
    object-fit: cover;
    object-position: top;
  }

  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5); /* 반투명 배경 */
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    opacity: 0;
    transition: opacity 0.3s ease;
    z-index: 1;
  }

  .flip:hover .overlay {
    opacity: 1;
  }

  .back {
    background-color: green;
    transform: rotateY(180deg);
  }

  .front,
  .front-hover,
  .back {
    width: 100%;
    height: 100%;
    position: absolute;
    backface-visibility: hidden;
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .flipped {
    transform: rotateY(-180deg); /* 상태가 flipped일 때 뒷면 보이도록 */
  }

  .project-name {
    width: auto;
    height: auto;
  }
`;

export default ProjectCard;

// .flip-box:hover .flip {
//     transform: rotateY(-180deg);
//   }
