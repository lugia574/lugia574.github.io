import styled from "styled-components";
import Title from "../components/common/Title";
// interface Props {}

const Archiving = () => {
  return (
    <ArchivingStyle id="archiving">
      <div className="archiving-warpper">
        <Title children={"Archiving"} />
        <div className="archiving-set">
          <div className="archiving-box">
            <a href="https://velog.io/@lcw574/posts">벨로그</a>
          </div>
          <div className="archiving-box">
            <a href="https://github.com/lugia574">깃헙</a>
          </div>
        </div>
      </div>
    </ArchivingStyle>
  );
};

const ArchivingStyle = styled.div`
  .archiving-warpper {
    display: flex;
    width: 100%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 4rem 0;
  }

  .archiving-set {
    width: 100%;
    background-color: ${({ theme }) => theme.color.black};
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
      width: 350px;
      height: 300px;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
`;

export default Archiving;
