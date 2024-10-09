import styled from "styled-components";
import Title from "../components/common/Title";
// interface Props {}

const Archiving = () => {
  return (
    <ArchivingStyle id="archiving">
      <Title children={"Archiving"} />
    </ArchivingStyle>
  );
};

const ArchivingStyle = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
`;

export default Archiving;
