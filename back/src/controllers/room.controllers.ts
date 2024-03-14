import { RQ, RS, EnumType } from "../types/common";
import {
  getRoomsById,
  getMsgs,
  getMsgsForRooms,
} from "../services/room.services.js";
import {
  RoomModelType,
  RoomTypeForClient,
  RoomsTypeForClient,
} from "../types/room";

export const getRooms = async (req: RQ, res: RS) => {
  const { errorRes, failRes, completeRes, user } = req;
  const { id } = req.user;
  let roomsCl;
  //! {room1: {}, room2: {}} 이렇게 만들어야 한다.
  try {
    let rooms: RoomModelType[] = await getRoomsById(id as string);
    if (rooms.length) {
      const result = await getMsgsForRooms(rooms);
      console.log(1);
      console.log(
        rooms
          .map((room) => ({ ...room, msgs: [...result[room.roomId]] }))
          .map((room) => ({
            [room.purposeType === "A" ? "room1" : "room2"]: { ...room },
          }))
          .reduce((acc, cur) => (acc = { ...acc, ...cur }))
      );
      return completeRes(
        rooms
          .map((room) => ({ ...room, msgs: [...result[room.roomId]] }))
          .map((room) => ({
            [room.purposeType === "A" ? "room1" : "room2"]: { ...room },
          }))
          .reduce((acc, cur) => (acc = { ...acc, ...cur }))
      );
    }
    console.log(2);
    completeRes(rooms);
  } catch (e) {
    errorRes(e as Error);
  }
};

export const getRoom = async (req: RQ, res: RS) => {
  const { errorRes, failRes, completeRes } = req;
  const { room } = req;
  try {
    const result = await getMsgs(room.roomId);
    completeRes({
      ...room,
      msgs: result,
    });
  } catch (e) {
    errorRes(e as Error);
  }
};
