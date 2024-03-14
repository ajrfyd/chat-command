import styled from "styled-components";
import Button from "./Button";
import { HelpCircleIcon, BugOffIcon, UnplugIcon } from "lucide-react";
import useLogout from "../../hooks/useLogout";
import useRoomStore from "../../store/roomStore";

const ButtonSection = () => {
  const { logoutHandler } = useLogout();
  const { setSelectedRoomType, selectedRoomType } = useRoomStore();

  return (
    <Container>
      <Button
        onClick={() => setSelectedRoomType("A")}
        selected={selectedRoomType === "A"}
      >
        <HelpCircleIcon />
      </Button>
      <Button
        onClick={() => setSelectedRoomType("B")}
        selected={selectedRoomType === "B"}
      >
        <BugOffIcon />
      </Button>
      <Button onClick={logoutHandler} selected={false}>
        <UnplugIcon />
      </Button>
    </Container>
  );
};

export default ButtonSection;

const Container = styled.section`
  width: 90%;
  display: flex;
  gap: 0.5rem;
  margin-top: 0.5rem;
`;
