import styled from "styled-components";
// interface Props {}

const Intro = () => {
  return (
    <IntroStyle>
      <h1 className="typing">FrontEnd 개발자 이철욱입니다.</h1>
    </IntroStyle>
  );
};

const IntroStyle = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  margin-top: 10rem;
  font-size: 1rem;
  .typing {
    text-transform: capitalize;
    white-space: nowrap;
    color: transparent;
    margin: 0;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  .typing::before {
    content: "FrontEnd 개발자 이철욱입니다.";
    position: absolute;
    top: 0;
    left: 0;
    width: 0%;
    height: 100%;
    overflow: hidden;
    color: ${({ theme }) => theme.color.black};
    letter-spacing: -0.1rem;
    padding-top: 0.2em;
    white-space: nowrap;
    line-height: 1;
    border-right: 3px solid ${({ theme }) => theme.color.black};
    animation: typing 5s steps(25) infinite;
  }

  @keyframes typing {
    0% {
      width: 30%;
    }
    50% {
      width: 100%;
    }
    100% {
      width: 30%;
    }
  }
`;

export default Intro;
