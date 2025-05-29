import { useState } from 'react';
import styled from 'styled-components';

interface itemProps {
  item: {
    name: string;
    imgSrc: string;
    summary: string;
    period: string;
    tech: string;
    source: string;
  };
}

const ProjectCard = ({ item }: itemProps) => {
  const [isFlipped, setIsFlipped] = useState(false); // 상태 관리

  return (
    <ProjectCardStyle>
      <div className="flip-box" onClick={() => setIsFlipped(prev => !prev)}>
        <div className={`flip ${isFlipped ? 'flipped' : ''}`}>
          <div className="front">
            <img src={item.imgSrc} alt="프로젝트 이미지" />
            <div className="overlay">
              <div className="overlay-border">
                <div className="title">{item.name}</div>
                <div className="overlay-click">Click</div>
              </div>
            </div>
          </div>
          <div className="back">
            <div className="project-info">
              <div className="title">{item.name}</div>
              <div className="summary">{item.summary}</div>
              <div className="period">
                <div className="">기간</div>
                <div className="">{item.period}</div>
              </div>
              <div className="tech">
                <div className="">기술스택</div>
                <div className="">{item.tech}</div>
              </div>
              <div className="source">
                <a href={item.source} target="_blank" rel="noopener noreferrer">
                  깃헙 페이지
                </a>
              </div>
            </div>
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
    width: 25rem;
    height: 25rem;
    perspective: 1000px;
    cursor: pointer;
  }

  .flip {
    width: 100%;
    height: 100%;
    position: relative;
    color: white;
    text-align: center;
    /* line-height: 400px; */
    transform-style: preserve-3d;
    transform: rotateY(0deg);
    transition: 0.5s;
  }

  .front img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: top;
    opacity: 0.8;
  }

  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5); /* 반투명 배경 */
    color: ${({ theme }) => theme.color.white};
    display: flex;
    justify-content: center;
    align-items: center;
    opacity: 0;
    transition: opacity 0.3s ease;
    z-index: 1;
  }

  .overlay-border {
    width: 50%;
    height: 50%;
    border: solid 1px ${({ theme }) => theme.color.white};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1rem;
  }

  .overlay-border .title {
    border-bottom: solid 1px ${({ theme }) => theme.color.white};
  }

  .overlay-click {
    font-size: ${({ theme }) => theme.fontSize.medium};
  }

  .flip:hover .overlay {
    opacity: 1;
  }

  .back {
    background-color: ${({ theme }) => theme.color.white};
    border: solid 1px ${({ theme }) => theme.color.white};
    color: ${({ theme }) => theme.color.black};
    transform: rotateY(180deg);

    padding: 1rem;
    z-index: 2;
  }

  .project-info {
    width: 100%;
    height: 1.5rem;
    display: flex;
    flex-direction: column;
    text-align: left;
    gap: 1rem;

    .title {
      font-size: ${({ theme }) => theme.fontSize.large};
    }

    .summary,
    .period,
    .tech {
      display: flex;
      gap: 1rem;
      font-size: ${({ theme }) => theme.fontSize.xsmall};
    }

    .period > :first-child,
    .tech > :first-child {
      font-weight: 800;
    }

    .source {
      text-align: center;
      width: 6rem;
      border: solid 1px ${({ theme }) => theme.color.borderGray};
      border-radius: 3px;
      background-color: ${({ theme }) => theme.color.borderGray};
    }
    .source:hover {
      background-color: ${({ theme }) => theme.color.commentGray};
    }
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
`;

export default ProjectCard;

// .flip-box:hover .flip {
//     transform: rotateY(-180deg);
//   }
