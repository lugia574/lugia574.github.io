import styled from 'styled-components';
import Star from '../components/effects/Star';
import TwinkleStar from '../components/effects/TwinkleStar';
import Square from '../components/effects/square';
// interface Props {}

const Intro = () => {
  return (
    <IntroStyle>
      <h1 className="typing">FrontEnd 개발자 이철욱입니다.</h1>
      <Square />
      <TwinkleStar />
      <Star />
    </IntroStyle>
  );
};

const IntroStyle = styled.div`
  display: flex;
  position: relative;
  background-image: url('/images/portpolio-main.jpg');
  background-size: cover;
  background-position: top;
  width: 100%;
  height: 100vh;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  .typing {
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-use-select: none;
    user-select: none;
    font-size: 4rem;
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
    content: 'FrontEnd 개발자 이철욱입니다.';
    position: absolute;
    top: 0;
    left: 0;
    width: 0%;
    height: 100%;
    overflow: hidden;
    color: ${({ theme }) => theme.color.white};
    letter-spacing: -0.1rem;
    padding-top: 0.2em;
    white-space: nowrap;
    line-height: 1;
    border-right: 3px solid ${({ theme }) => theme.color.white};
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
