import { EnumType } from "./common.js";

export type MessageModelType = {
  msgId: string;
  msgType: EnumType;
  msg: string;
  socketId: string;
  contactIp: string;
  msgState: EnumType;
  isFixed: EnumType;
  createUserId: string;
  deleteUserId?: string;
  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date | null;
  roomId: string;
};

export type MsgTypeForClient = MessageModelType & {
  msgs: MessageModelType[];
};

export type ToBeSavedMsgType = Partial<MessageModelType>;

export type MsgsForAdminType = MessageModelType & {
  profileImgUrl: string;
};
