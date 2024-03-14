import { RQ, RS } from "../types/common";
import { createNewMsg } from "../services/chat.services.js";
import io from "../socket/socket.js";

export const findOrCreate = async (req: RQ, res: RS) => {
  const { id } = req.params;
  const { errorRes, failRes, completeRes } = req;
  try {
    completeRes("");
  } catch (e) {
    errorRes(e as Error);
  }
};

export const sendMsg = async (req: RQ, res: RS) => {
  const { errorRes, failRes, completeRes } = req;
  const { id, profileImgUrl } = req.user;
  const { msg, roomId } = req.body;

  console.log(msg, roomId, "asdkijgasfdsaflkygdsafljag");
  try {
    const result = await createNewMsg({
      msgType: "B",
      msg,
      socketId: "",
      contactIp: "",
      msgState: "B",
      isFixed: "B",
      createUserId: id,
      roomId,
    });

    io.emit("newMsg", { ...result.dataValues, profileImgUrl }, roomId);
    completeRes({ ...result.dataValues, profileImgUrl });
  } catch (e) {
    errorRes(e as Error);
  }
};
