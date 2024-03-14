import styled from "styled-components";
import { MsgType } from "../../store/types";
import { makeCreatedAt } from "../../utils/utils";
import useUserStore from "../../store/userStore";
import { useEffect, useRef } from "react";
import useSocket from "../../hooks/useSocket";

type MessageProps = MsgType & {};

const Message = ({
  profileImgUrl,
  msg,
  createdAt,
  createUserId,
}: MessageProps) => {
  const { user } = useUserStore();
  const msgRef = useRef<HTMLDivElement>(null);
  // const [socket] = useSocket();
  // console.log(socket);

  useEffect(() => {
    if (!msgRef.current) return;
    setTimeout(() => {
      msgRef.current?.scrollIntoView({ behavior: "smooth" });
    }, 500);
  }, []);

  return (
    <Container ref={msgRef}>
      <MsgSection className={user?.id === createUserId ? "me" : ""}>
        <ImgSection>
          <div>
            <img src={profileImgUrl} alt="" />
          </div>
        </ImgSection>
        <Msg>{msg}</Msg>
      </MsgSection>
      <Time className={user?.id === createUserId ? "me" : ""}>
        {makeCreatedAt(createdAt)}
      </Time>
    </Container>
  );
};

export default Message;

const Container = styled.div`
  /* display: grid; */
  /* grid-template-columns: repeat(2, minmax(0, 1fr)); */
  /* column-gap: 0.75rem; */
  /* padding: 0.25rem 0; */
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const MsgSection = styled.section`
  display: flex;
  gap: 1rem;
  padding: 0 0.5rem;

  &.me {
    justify-content: flex-end;
  }
`;

const ImgSection = styled.div`
  grid-row: span 2 / span 2;
  align-self: flex-end;

  position: relative;
  display: inline-flex;

  /* me or not */
  grid-column-start: 1;
  /* grid-column-start: 2; */

  & > div {
    display: block;
    aspect-ratio: 1 / 1;
    overflow: hidden;
    width: 2.5rem;
    border-radius: 50%;

    img {
      height: 100%;
      width: 100%;
      object-fit: cover;
    }
  }
`;

const Msg = styled.div`
  position: relative;
  display: block;
  /* width: fit-content; */
  padding: 0.5rem 1rem;
  max-width: 20%;
  border-radius: 1rem;
  min-height: 2.75rem;
  min-width: 2.75rem;
  background-color: #eee;
  color: #000;
  grid-column-start: 2;
  /* grid-column-start: 1; */
  border-end-start-radius: 0px;

  &:before {
    position: absolute;
    bottom: 0px;
    height: 0.75rem /* 12px */;
    width: 0.75rem /* 12px */;
    background-color: #eee;
    content: "";
    mask-size: contain;
    mask-repeat: no-repeat;
    mask-position: center;

    mask-image: url("data:image/svg+xml,%3csvg width='3' height='3' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill='black' d='m 0 3 L 3 3 L 3 0 C 3 1 1 3 0 3'/%3e%3c/svg%3e");
  }
`;

const Time = styled.div`
  grid-row-start: 3;
  font-size: 0.875rem /* 14px */;
  line-height: 1.25rem /* 20px */;
  opacity: 0.5;
  display: flex;
  gap: 0.25rem;
  align-items: center;

  /* me & not */
  /* grid-column-start: 2; */
  grid-column-start: 1;

  &.me {
    justify-content: flex-end;
  }
`;
