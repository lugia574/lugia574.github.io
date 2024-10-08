import { IconType } from "react-icons";
import styled from "styled-components";
interface Props {
  Icon: IconType;
  label: string;
  content: string;
}

const AboutMeCard = ({ Icon, label, content }: Props) => {
  return (
    <AboutMeCardStyle>
      <div className="">
        <Icon className="icon" />
      </div>
      <div className="content">
        <div className="">{label}</div>
        <div className="">{content}</div>
      </div>
    </AboutMeCardStyle>
  );
};

const AboutMeCardStyle = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  max-width: 14rem;
  flex-wrap: nowrap;
  column-gap: 2rem;
  margin: 0 auto;
  .icon {
    width: 2.5rem;
    height: 2.5rem;
  }

  .content > :first-child {
    font-weight: 100;
    font-size: ${({ theme }) => theme.fontSize.xsamll};
  }

  .content > :last-child {
    font-weight: 600;
  }

  @media (max-width: 768px) {
  }
`;

export default AboutMeCard;
