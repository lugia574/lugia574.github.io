import styled from 'styled-components';
import Title from '../components/common/Title';
import TwinkleStar from '../components/effects/TwinkleStar';
import Star from '../components/effects/Star';
// interface Props {}

const Archiving = () => {
  return (
    <ArchivingStyle id="archiving">
      <div className="archiving-warpper">
        <Title children={'Archiving'} />
        <div className="archiving-set">
          <div className="archiving-box github">
            <a href="https://github.com/lugia574">
              <img src="/images/GitHub.png" alt="" />
            </a>
          </div>
          <div className="archiving-box velog">
            <a href="https://velog.io/@lcw574/posts">velog</a>
          </div>
        </div>
      </div>
      <TwinkleStar />
      <Star />
    </ArchivingStyle>
  );
};

const ArchivingStyle = styled.div`
  background-color: ${({ theme }) => theme.color.backGroundGray};
  width: 100%;
  height: 100vh;
  z-index: 2;
  padding: 4rem 2rem;

  .archiving-warpper {
    display: flex;
    height: 100%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 4rem 1rem;
    gap: 5rem;
  }

  .archiving-set {
    width: 100%;
    border-radius: 3px;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-wrap: wrap;
    gap: 2rem;
    a {
      color: ${({ theme }) => theme.color.white};
    }

    .archiving-box {
      width: 26rem;
      height: 300px;
      font-size: ${({ theme }) => theme.fontSize.xlarge};
      display: flex;
      justify-content: center;
      align-items: center;
      img {
        width: 100px;
        height: 100px;
        object-fit: cover;
        border-radius: 3px;
      }
    }

    .velog {
      background-color: #66cc99;
      a {
        font-weight: 600;
        font-style: oblique;
      }
    }

    .github {
      background-color: ${({ theme }) => theme.color.white};
    }
  }
`;

export default Archiving;
