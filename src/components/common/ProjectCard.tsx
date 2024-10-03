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
          <div className="front">앞면 이미지</div>
          <div className="back">
            <h4 className="Project-name">{name}</h4>
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
    width: 300px;
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

  .front {
    background-color: red;
  }
  .back {
    background-color: green;
    transform: rotateY(180deg);
  }

  .front,
  .back {
    width: 100%;
    height: 100%;
    position: absolute;
    backface-visibility: hidden;
    border-radius: 5px;
  }

  .flipped {
    transform: rotateY(-180deg); /* 상태가 flipped일 때 뒷면 보이도록 */
  }

  /* .flip-box:hover .flip {
    transform: rotateY(-180deg);
  } */
`;

export default ProjectCard;

// .flip-box:hover .flip {
//     transform: rotateY(-180deg);
//   }
