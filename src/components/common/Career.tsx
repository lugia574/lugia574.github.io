import styled from "styled-components";
import Title from "./Title";
// interface Props {}

const Career = () => {
  return (
    <CareerStyle id="career">
      <Title children={"Career"} />
    </CareerStyle>
  );
};

const CareerStyle = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
`;

export default Career;
