import styled from "styled-components";
import NotSelected from "./NotSelected";
import Header from "./Header";
import Messages from "./Messages";
import SubmitForm from "./SubmitForm";
import useRoomStore from "../../store/roomStore";

const MessageContainer = () => {
  const { selectedRoom } = useRoomStore();

  return (
    <Container>
      {!selectedRoom ? (
        <NotSelected />
      ) : (
        <>
          <Header />
          <Messages />
          <SubmitForm />
        </>
      )}
    </Container>
  );
};

export default MessageContainer;

const Container = styled.div`
  min-width: 450px;
  display: flex;
  flex-direction: column;
`;
