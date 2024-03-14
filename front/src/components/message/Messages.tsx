import styled from "styled-components";
import Message from "./Message";
import useRoomStore from "../../store/roomStore";
import useListenMsg from "../../hooks/useListenMsg";

const Messages = () => {
  const { msgs, loading } = useRoomStore();
  useListenMsg();

  return (
    <Container>
      {msgs.map((msg) => (
        <Message key={msg.msgId} {...msg} />
      ))}
      {msgs.length === 0 && !loading && <p>메세지를 입력해 보세요.</p>}
    </Container>
  );
};

export default Messages;

const Container = styled.div`
  overflow: auto;
  flex: 1 1 0%;
  padding: 0 0.5rem;
`;
