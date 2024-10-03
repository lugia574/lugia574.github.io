import styled from "styled-components";
import Title from "./Title";
import AboutMeCard from "./AboutMeCard";
import { FaRegCalendar, FaUser } from "react-icons/fa";
import { FaLocationPin } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { IoIosSchool } from "react-icons/io";
import { BsFillTelephoneFill } from "react-icons/bs";
// interface Props {}

const ABOUTLIST = [
  { icon: FaUser, label: "이름", content: "이철욱" },
  { icon: FaRegCalendar, label: "생년월일", content: "94.02.20" },
  { icon: FaLocationPin, label: "위치", content: "서울특별시 금천구" },
  { icon: BsFillTelephoneFill, label: "연락처", content: "010-6424-5187" },
  { icon: MdEmail, label: "이메일", content: "a010642451@gmail.com" },
  { icon: IoIosSchool, label: "학력", content: "호남대학교 경찰학과" },
];

const AboutMe = () => {
  return (
    <AboutMeStyle id="about-me">
      <div className="about-me-wrapper">
        <Title children={"About Me"} />
        <div className="about-me-items">
          {ABOUTLIST.map((item, idx) => (
            <AboutMeCard
              key={idx}
              Icon={item.icon}
              label={item.label}
              content={item.content}
            />
          ))}
        </div>
      </div>
    </AboutMeStyle>
  );
};

const AboutMeStyle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 4rem 1.5rem;

  .about-me-wrapper {
    width: 60%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .about-me-items {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 2rem;
  }

  @media (max-width: 768px) {
  }
`;

export default AboutMe;

/* display: grid;
    grid-template-columns: repeat(auto-fit, minmax(25rem, 2fr)); */
