import { EnumType } from "./common.js";

type UserRole = "admin" | "user";

export type UserModelType = {
  id: string;
  nickName: string;
  profileImgUrl: string;
  role: UserRole;
  status: EnumType;
  latestConnectionId?: string;
  latestContactTime: Date;
  lastIp?: string;
  deletedAt?: Date | null;
  createdAt: Date;
  updatedAt: Date;
};
