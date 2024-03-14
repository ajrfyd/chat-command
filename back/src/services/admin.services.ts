import db from "../db/models/index.js";
import { EnumType } from "../types/common.js";
import { RoomTypeForAdmin } from "../types/room.js";
import { MsgsForAdminType } from "../types/message.js";

export const getRooms = async (
  roomType: EnumType
): Promise<RoomTypeForAdmin[]> => {
  const query = `
    SELECT
      U.nickName,
      U.profileImgUrl,
      U.status AS isLogin,
      R.*
    FROM User AS U
    RIGHT JOIN Room AS R
    ON U.id = R.ownerId
    WHERE R.purposeType = ?
  `;
  return await db.sequelize.query(query, {
    raw: true,
    type: db.sequelize.QueryTypes.SELECT,
    replacements: [roomType],
  });
};

export const getMsgs = async (id: string): Promise<MsgsForAdminType[]> => {
  const query = `
    SELECT 
      profileImgUrl,
      M.*
    FROM User AS U
    RIGHT JOIN Msg AS M
    ON U.id = M.createUserId
    WHERE M.roomId = ? AND M.deletedAt IS NULL;
  `;
  return await db.sequelize.query(query, {
    raw: true,
    type: db.sequelize.QueryTypes.SELECT,
    replacements: [id],
  });
};
