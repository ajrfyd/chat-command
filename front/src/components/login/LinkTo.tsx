import styled from "styled-components";
import { Link } from "react-router-dom";

type LinkToProps = {
  text: string;
  href: string;
};

const LinkTo = ({ text, href }: LinkToProps) => {
  return <A to={href}>{text}</A>;
};

export default LinkTo;

const A = styled(Link)`
  font-size: 0.875rem;
  line-height: 1.25rem;
  color: var(--black);
  display: inline-block;
  margin-top: 0.5rem !important;

  &:hover {
    color: var(--blue);
    text-decoration: underline;
  }
`;
