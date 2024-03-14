import db from "../db/models/index.js";
import { ToBeSavedMsgType } from "../types/message.js";

export const findOrCreateChatRoom = async (id: string) => {
  return await db.Room.findOrCreate;
};

export const createNewMsg = async (msg: ToBeSavedMsgType) => {
  return await db.Msg.create(msg, { raw: true });
};
