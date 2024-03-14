import styled from "styled-components";
import { Search } from "lucide-react";

const SearchInput = () => {
  return (
    <Container>
      <Input />
      <Btn type="submit">
        <Search />
      </Btn>
    </Container>
  );
};

export default SearchInput;

const Container = styled.form`
  display: flex;
  gap: 0.5rem;
  align-items: center;
`;

const Input = styled.input`
  flex-shrink: 1;
  appearance: none;
  height: 2rem /* 48px */;
  padding-left: 1rem /* 16px */;
  padding-right: 1rem /* 16px */;
  font-size: 0.875rem /* 14px */;
  font-size: 1rem /* 16px */;
  line-height: 1.5rem /* 24px */;
  border-radius: 20px;
  border-width: 1px;
  border-color: transparent;
  background-color: #f3f3f3;

  &:focus {
    outline: 2px solid transparent;
    outline-offset: 2px;

    box-shadow: none;
    outline-style: solid;
    outline-width: 2px;
    outline-offset: 2px;
    outline-color: #ddd;

    & ~ button > svg {
      color: blue;
    }
  }
`;

const Btn = styled.button`
  display: inline-flex;
  min-height: 2.5rem /* 48px */;
  flex-shrink: 0;
  cursor: pointer;
  user-select: none;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  border-color: transparent;
  text-align: center;
  font-size: 0.875rem /* 14px */;
  line-height: 1em;
  gap: 0.5rem /* 8px */;
  font-weight: 600;
  text-decoration-line: none;
  transition-duration: 200ms;
  transition-timing-function: cubic-bezier(0, 0, 0.2, 1);
  border-width: 1px;
  color: var(--black);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000),
    var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);

  height: 2.5rem /* 48px */;
  width: 2.5rem /* 48px */;
  border-radius: 50%;
  padding: 0px;

  &:hover {
    background-color: #ddd;
  }

  &:active {
    transform: scale(0.9);
  }

  & > svg {
    width: 1.5rem;
    height: 1.5rem;
    outline: 2px solid transparent;
    outline-offset: 2px;
  }
`;
