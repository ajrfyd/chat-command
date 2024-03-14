import styled, { css } from "styled-components";
// import { getRandomEmoji } from "../../utils/utils";
import Divider from "./Divider";
import { BugOffIcon, HelpCircleIcon } from "lucide-react";
import { RoomType } from "../../store/types";
import useRoomStore from "../../store/roomStore";

type RoomProps = RoomType & {};

const Room = ({
  nickName,
  profileImgUrl,
  purposeType,
  roomId,
  ...props
}: RoomProps) => {
  const { setSelectedRoom, selectedRoom } = useRoomStore();

  return (
    <>
      <RoomContainer
        onClick={() =>
          setSelectedRoom({
            nickName,
            profileImgUrl,
            purposeType,
            roomId,
            ...props,
          })
        }
        selected={selectedRoom?.roomId === roomId}
      >
        <div style={{ display: "inline-flex", position: "relative" }}>
          <div
            style={{
              display: "block",
              aspectRatio: "1 / 1",
              overflow: "hidden",
              width: "3rem",
            }}
          >
            <img
              src=""
              alt=""
              srcSet={profileImgUrl}
              style={{ height: "100%", width: "100%", objectFit: "cover" }}
            />
          </div>
        </div>
        <p style={{ fontWeight: "bold", flex: 1 }}>{nickName}</p>

        <div
          style={{
            display: "flex",
            gap: "0.75rem",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <span style={{ fontSize: "1.25rem", lineHeight: "1.75rem" }}>
            {purposeType === "A" ? <HelpCircleIcon /> : <BugOffIcon />}
          </span>
        </div>
      </RoomContainer>
      <Divider style={{ height: "0.5rem" }} />
    </>
  );
};

export default Room;

const RoomContainer = styled.div<{ selected: boolean }>`
  display: flex;
  border-radius: 0.25rem;
  cursor: pointer;
  padding: 0.25rem;
  border-radius: 0.25rem;
  gap: 0.5rem;
  align-items: center;
  margin-right: 1rem;
  ${({ selected }) =>
    selected &&
    css`
      background-color: rgba(0, 0, 0, 0.3);
    `}

  &:hover {
    background-color: rgba(0, 0, 0, 0.3);
  }
`;
