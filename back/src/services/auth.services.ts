import { Op } from "sequelize";
import db from "../db/models/index.js";
import { v4 } from "uuid";
import { hashStr, makeProfileImgUrl } from "../utils/utils.js";
import { type UserModelType } from "../types/user.js";

export const findUserByNickName = async (nickName: string) =>
  await db.User.findOne({
    where: { nickName, deletedAt: { [Op.eq]: null } },
    raw: true,
  });

export const createUser = async (
  nickName: string,
  password: string,
  ip: string
): Promise<UserModelType> => {
  const hashedPwd = await hashStr(password);
  const newUser = await db.User.create({
    id: `u-${v4()}`,
    nickName,
    password: hashedPwd,
    profileImgUrl: makeProfileImgUrl(nickName),
    status: "A",
    latestConnectionId: "",
    latestContactTime: Date.now(),
    latestIp: ip,
  });
  return newUser.dataValues;
};

export const comparePassword = (password: string, confirmPassword: string) =>
  password === confirmPassword;
