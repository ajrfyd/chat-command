import { EnumType } from "./common.js";
import { MessageModelType } from "./message.js";

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

export type RoomTypeForAdmin = RoomModelType & {
  nickName: string;
  isLogin: EnumType;
  profileImgUrl: string;
};

export type RoomTypeForClient = MessageModelType & {
  msgs: MessageModelType[];
};

export type RoomsTypeForClient = {
  room1: RoomTypeForClient;
  room2: RoomTypeForClient;
};
