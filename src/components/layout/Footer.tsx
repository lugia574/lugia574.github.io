import styled from 'styled-components';
// interface Props {}

const Footer = () => {
  return <FooterStyle>© 2025. All rights reserved.</FooterStyle>;
};

const FooterStyle = styled.div`
  width: 100%;
  height: 5rem;
  display: flex;
  justify-content: center;
  align-items: end;
  padding: 2rem;
  position: absolute;
  bottom: 0;
  color: ${({ theme }) => theme.color.white};
  @media (max-width: 768px) {
    height: 4.25rem;
  }
`;

export default Footer;
