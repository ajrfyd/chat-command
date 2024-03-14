import styled from "styled-components";
import Room from "./Room";
import useGetRooms from "../../hooks/useGetRooms";

const Rooms = () => {
  const { rooms } = useGetRooms();
  return (
    <RoomsContainer>
      {rooms.map((room) => (
        <Room key={room.ownerId} {...room} />
      ))}

      {!rooms.length && (
        <NoRooms>
          <p>아직 방이 없네요..</p>
        </NoRooms>
      )}
    </RoomsContainer>
  );
};

export default Rooms;

const RoomsContainer = styled.div`
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  display: flex;
  flex-direction: column;
  overflow: auto;
  flex: 1;
`;

const NoRooms = styled.div`
  height: 1000px;
  text-align: center;
  color: var(--white);
`;
