import { UnplugIcon } from "lucide-react";
import styled from "styled-components";
import useLogout from "../../hooks/useLogout";

const LogoutBtn = () => {
  const { logoutHandler } = useLogout();

  return (
    <ButtonContainer onClick={logoutHandler}>
      <UnplugIcon />
    </ButtonContainer>
  );
};

export default LogoutBtn;

const ButtonContainer = styled.button`
  width: 90%;
  cursor: pointer;
  outline: none;
  border: none;
  border-radius: 10px;
  padding: 0.25rem 0;
  margin-top: 0.5rem;

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
