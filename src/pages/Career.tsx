import styled from 'styled-components';
import Title from '../components/common/Title';
// interface Props {}

const Career = () => {
  return (
    <CareerStyle id="career">
      <Title children={'Career'} />
    </CareerStyle>
  );
};

const CareerStyle = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  justify-content: center;
  align-items: center;
  padding: 4rem 2rem;
`;

export default Career;
