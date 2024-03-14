import { EnumType, RQ, RS } from "../types/common.js";
import { getRooms, getMsgs } from "../services/admin.services.js";

export const getRoomsForAdmin = async (req: RQ, res: RS) => {
  const { completeRes, failRes, errorRes } = req;
  const { roomType } = req.params;
  const { id } = req.user;

  try {
    const result = await getRooms(roomType as EnumType);
    completeRes(result.filter((room) => room.ownerId !== id));
  } catch (e) {
    console.log(e);
    errorRes(e as Error);
  }
};

export const getMsgsForAdmin = async (req: RQ, res: RS) => {
  const { errorRes, failRes, completeRes } = req;
  const { id } = req.params;

  try {
    const result = await getMsgs(id);
    console.log(id);
    console.log(result);

    completeRes(result);
  } catch (e) {
    errorRes(e as Error);
  }
};
