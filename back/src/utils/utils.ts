import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const { BCRYPT_SALT, JWT_SECRET } = process.env;

export const makeProfileImgUrl = (nickName: string) =>
  `https://avatar.iran.liara.run/public/${
    nickName.length % 2 ? "boy" : "girl"
  }?username=${nickName}`;

export const hashStr = (str: string) => bcrypt.hash(str, Number(BCRYPT_SALT));

export const compareHashStr = (origin: string, hashed: string) =>
  bcrypt.compare(origin, hashed);

export const generateToken = (nickName: string) =>
  jwt.sign({ nickName }, JWT_SECRET as string, {
    expiresIn: "15d",
    issuer: "hkhound",
    subject: "nickName",
  });

export const decodeToken = (token: string) =>
  jwt.verify(token, JWT_SECRET as string);
