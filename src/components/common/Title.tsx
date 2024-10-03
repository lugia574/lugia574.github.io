import styled from "styled-components";
interface Props {
  children: React.ReactNode;
}

const Title = ({ children }: Props) => {
  return <TitleStyle>{children}</TitleStyle>;
};

const TitleStyle = styled.h1`
  font-size: ${({ theme }) => theme.fontSize["xlarge"]};
`;

export default Title;
