import { EnumType } from "../store/types";

export type RoomModelType = {
  roomId: string;
  roomName?: string;
  roomDesc?: string;
  imgUrl?: string;
  refId?: string;
  userLimit: number;
  currentState: EnumType;
  roomType: EnumType;
  purposeType: EnumType;
  enterPassword?: string;
  deleteUserId?: string;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
  ownerId: string;
};

export type MsgModelType = {
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
