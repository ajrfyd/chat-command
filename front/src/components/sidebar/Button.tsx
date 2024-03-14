import styled from "styled-components";

type ButtonProps = {
  children: React.ReactNode;
  onClick: () => void;
  selected: boolean;
};

const Button = ({ children, onClick, selected }: ButtonProps) => {
  return (
    <Btn type="button" onClick={onClick} className={selected ? "active" : ""}>
      {children}
    </Btn>
  );
};

export default Button;

const Btn = styled.button`
  border-radius: 15px;
  flex: 1;
  border: none;
  outline: none;
  padding: 0.25rem 0;
  cursor: pointer;

  &.active {
    color: blue;
  }

  &:hover {
    background-color: #e6e6e6;

    svg {
      color: blue;
    }
  }

  &:active {
    transform: scale(0.97);
  }
`;
