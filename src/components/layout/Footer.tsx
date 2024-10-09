import styled from "styled-components";
// interface Props {}

const Footer = () => {
  return <FooterStyle>© 2024. All rights reserved.</FooterStyle>;
};

const FooterStyle = styled.div`
  width: 100vw;
  height: 6.25rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.color.black};
  color: ${({ theme }) => theme.color.white};
  @media (max-width: 768px) {
    height: 4.25rem;
  }
`;

export default Footer;
