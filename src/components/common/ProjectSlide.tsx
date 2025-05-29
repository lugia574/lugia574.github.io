import styled from 'styled-components';

interface ProjectSlideProps {
  src: string;
  title: string;
  des: string;
  skill: string;
  gitUrl: string;
  tech: string;
}

const ProjectSlide = ({ src, title, des, skill, gitUrl, tech }: ProjectSlideProps) => {
  return (
    <ProjectSlideStyle>
      <p>
        <img src={src} alt="" />
      </p>
      <div className="text-box">
        <h3>{title}</h3>
        <p>{des}</p>
        <div className="btn-wrap">
          <span>{skill}</span>
          <ul>
            <li>
              <p>{tech}</p>
            </li>
            <li>
              <a href={gitUrl}>git</a>
            </li>
          </ul>
        </div>
      </div>
    </ProjectSlideStyle>
  );
};

const ProjectSlideStyle = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 30px;
  height: 100%;

  img {
    width: 100%;

    /* height: 100%; */
    aspect-ratio: 16 / 9;
    object-fit: cover;
    max-width: 900px;
    /* max-height: 40rem; */
    object-position: top;
    overflow: hidden;
  }
  .text-box {
    width: 30%;
    h3 {
      font-size: 3rem;
    }
    > p {
      margin: 10px 0 30px;
    }
    .btn-wrap {
      ul {
        li {
          a {
            display: inline-block;
            padding: 0.5rem 1.5rem;
            background: #222;
            color: white;
            border-radius: 30px;
            text-transform: uppercase;
          }
        }
      }
    }
  }
`;
export default ProjectSlide;
