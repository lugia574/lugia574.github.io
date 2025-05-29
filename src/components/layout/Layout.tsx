import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import styled from 'styled-components';

const Layout = () => {
  return (
    <LayoutStyle>
      <Header />
      <Outlet />
      <Footer />
    </LayoutStyle>
  );
};

const LayoutStyle = styled.div`
  background-color: ${({ theme }) => theme.color.black};
  color: ${({ theme }) => theme.color.white};
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export default Layout;
