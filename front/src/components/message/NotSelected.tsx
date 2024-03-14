import styled from "styled-components";
import { MessagesSquareIcon } from "lucide-react";
import useUserStore from "../../store/userStore";

const NotSelected = () => {
  const { user } = useUserStore();
  return (
    <Container>
      <Inner>
        <p style={{ color: "#fff" }}>환영합니다 👋 {user?.nickName}님! ❄</p>
        <p>채팅방을 선택하여 대화를 나눠 보세요.</p>
        <MessagesSquareIcon size={50} />
      </Inner>
    </Container>
  );
};

export default NotSelected;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`;

const Inner = styled.div`
  padding: 0 1rem;
  text-align: center;
  /* font-size: 1.125rem;
  line-height: 1.75rem; */
  font-size: 1.25rem /* 20px */;
  line-height: 1.75rem /* 28px */;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  font-weight: 600;
`;
