import styled from "styled-components";

type TitleProps = {
  title: string;
};

const Title = ({ title }: TitleProps) => (
  <TitleH1>
    {title}
    <span> hkound</span>
  </TitleH1>
);

export default Title;

const TitleH1 = styled.h1`
  font-size: 1.875rem /* 30px */;
  line-height: 2.25rem /* 36px */;
  font-weight: 600;
  text-align: center;
  color: var(--white);

  span {
    color: var(--black);
  }
`;
