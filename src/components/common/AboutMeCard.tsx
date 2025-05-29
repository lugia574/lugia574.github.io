import { IconType } from 'react-icons';
import styled from 'styled-components';
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
  column-gap: 2rem;
  margin: 0 auto;
  padding: 0 2rem;
  .icon {
    width: 2.5rem;
    height: 2.5rem;
  }
  .contents {
    width: 100%;
  }

  .content > :first-child {
    font-weight: 100;
    font-size: ${({ theme }) => theme.fontSize.large};
  }

  .content > :last-child {
    width: 100%;
    font-weight: 600;
    font-size: ${({ theme }) => theme.fontSize.xlarge};
  }

  @media (max-width: 768px) {
  }
`;

export default AboutMeCard;
