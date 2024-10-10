import styled from "styled-components";
import Title from "../components/common/Title";
// interface Props {}

const Archiving = () => {
  return (
    <ArchivingStyle id="archiving">
      <div className="archiving-warpper">
        <Title children={"Archiving"} />
        <div className="archiving-set">안녕</div>
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
    color: ${({ theme }) => theme.color.white};
    background-color: ${({ theme }) => theme.color.black};
    border-radius: 3px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
  }
`;

export default Archiving;
