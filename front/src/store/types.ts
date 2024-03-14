import { Socket } from "socket.io-client";
import { RoomModelType, MsgModelType } from "../types/chat";
export type UserRole = "admin" | "user";
export type EnumType = "A" | "B";

export type User = {
  id: string;
  nickName: string;
  profileImgUrl: string;
  role: UserRole;
  status: EnumType;
  latestConnectionId?: string;
  latestContactTime: Date;
  lastIp?: string;
  deletedAt?: Date | null;
  createdAt: Date | null;
  updatedAt: Date | null;
};

export type UserStoreState = {
  user: User | null;
  loading: boolean;
  error: boolean;
};

export type userStoreAction = {
  setUser: (user: User) => void;
  // setSocket: () => void;
  setLoading: (loading: boolean) => void;
  setError: (error: boolean) => void;
};

export type SocketStoreState = {
  socket: Socket | null;
  onlineUser: string[] | [];
};

export type SocketStoreAction = {
  setSocket: (socket: Socket) => void;
  setOnlineUser: (user: string) => void;
};

export type RoomStoreTypes = {
  rooms: RoomType[];
  selectedRoom: RoomType | null;
  selectedRoomType: EnumType;
  loading: boolean;
  msgs: MsgType[];
  setLoading: (loading: boolean) => void;
  setRooms: (rooms: RoomType[]) => void;
  setSelectedRoom: (room: RoomType) => void;
  setSelectedRoomType: (room: EnumType) => void;
  setMsgs: (msg: MsgType) => void;
};

export type RoomType = RoomModelType & {
  nickName: string;
  isLogin: EnumType;
  profileImgUrl: string;
};

export type MsgType = MsgModelType & {
  profileImgUrl: string;
};
