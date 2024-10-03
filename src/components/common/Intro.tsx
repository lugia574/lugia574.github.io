import styled from "styled-components";
import Title from "./Title";
// interface Props {}

const Intro = () => {
  return (
    <IntroStyle>
      <Title children={"Intro 개발자 이철욱입니다."} />
    </IntroStyle>
  );
};

const IntroStyle = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  margin-top: 10rem;
`;

export default Intro;
