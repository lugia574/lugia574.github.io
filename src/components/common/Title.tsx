import styled from 'styled-components';
interface Props {
  children: React.ReactNode;
}

const Title = ({ children }: Props) => {
  return <TitleStyle>{children}</TitleStyle>;
};

const TitleStyle = styled.h1`
  position: absolute;
  top: 8rem;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  font-size: 3rem;
`;

export default Title;
