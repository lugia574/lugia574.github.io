import styled from 'styled-components';
import Title from '../components/common/Title';
import AboutMeCard from '../components/common/AboutMeCard';
import { FaRegCalendar, FaUser } from 'react-icons/fa';
import { FaLocationPin } from 'react-icons/fa6';
import { MdEmail } from 'react-icons/md';
import { IoIosSchool } from 'react-icons/io';
import { BsFillTelephoneFill } from 'react-icons/bs';
import TwinkleStar from '../components/effects/TwinkleStar';
import Star from '../components/effects/Star';

// interface Props {}

const ABOUTLIST = [
  { icon: FaUser, label: '이름', content: '이철욱' },
  { icon: FaRegCalendar, label: '생년월일', content: '94.02.20' },
  { icon: FaLocationPin, label: '위치', content: '서울특별시 금천구' },
  { icon: BsFillTelephoneFill, label: '연락처', content: '010-6424-5187' },
  { icon: MdEmail, label: '이메일', content: 'lcw5745187@gmail.com' },
  { icon: IoIosSchool, label: '학력', content: '호남대학교 경찰학과' },
];

const AboutMe = () => {
  return (
    <AboutMeStyle id="about-me">
      <div className="about-me-wrapper">
        <Title children={'About Me'} />
        <div className="about-me-items">
          {ABOUTLIST.map((item, idx) => (
            <AboutMeCard key={idx} Icon={item.icon} label={item.label} content={item.content} />
          ))}
        </div>
      </div>
      <TwinkleStar />
      <Star />
    </AboutMeStyle>
  );
};

const AboutMeStyle = styled.div`
  padding: 4rem 2rem;
  background-color: ${({ theme }) => theme.color.backGroundGray};
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2;
  .about-me-wrapper {
    margin: 0 auto;
    width: 70%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .about-me-items {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 2.5rem 5rem;
    padding: 0 2rem;
  }

  @media (max-width: 768px) {
    .about-me-items {
      grid-template-columns: repeat(1, 1fr);
    }
  }

  @media (max-width: 460px) {
    .about-me-items {
      grid-template-columns: repeat(1, 1fr);
    }
  }
`;

export default AboutMe;

/* display: grid;
    grid-template-columns: repeat(auto-fit, minmax(25rem, 2fr)); */
