import { Op } from "sequelize";
import db from "../db/models/index.js";
import { RoomModelType } from "../types/room";
import { EnumType } from "../types/common.js";
import { MsgModelType } from "../../../front/src/types/chat";

export const getAllRooms = async (): Promise<RoomModelType[]> =>
  await db.Room.findAll({ where: { deletedAt: { [Op.eq]: null } }, raw: true });

export const getRoomsFromType = async (type: EnumType) => {
  const query = `
    SELECT * FROM Room as R
    WHERE R.deletedAt IS NULL AND R.purposeType = ?;
  `;

  return await db.sequelize.query(query, {
    raw: true,
    type: db.sequelize.QueryTypes.SELECT,
    replacements: [type],
  });
};

export const getRoomsById = async (id: string) => {
  const query = `
    SELECT
      R.* 
    FROM Room AS R
    WHERE ownerId = ? AND deletedAt IS NULL;
  `;
  return await db.sequelize.query(query, {
    raw: true,
    type: db.sequelize.QueryTypes.SELECT,
    replacements: [id],
  });
};

export const getRoomByType = async (roomType: EnumType) => {
  // return await db.
  return "abc";
};

export const getMsgs = async (id: string) => {
  return await db.Msg.findAll({ where: { roomId: id }, raw: true });
};

export const getMsgsForRooms = async (rooms: RoomModelType[]) => {
  const msgs: {
    [key: string]: MsgModelType[];
  } = {};

  for (let room of rooms) {
    const res = await db.Msg.findAll({
      where: { roomId: room.roomId },
      raw: true,
    });
    msgs[room.roomId] = res;
  }
  return msgs;
};
