import db from "../db/models/index.js";
import { MiddlewareFnType } from "../types/common.js";
import { decodeToken } from "../utils/utils.js";

export const auth: MiddlewareFnType = async (req, res, next) => {
  const { errorRes, failRes } = req;
  try {
    const token = req.signedCookies.jwt;

    if (!token) return failRes(401, "인증이 필요합니다.");
    const isVerified = <{ nickName: string }>decodeToken(token);
    if (!isVerified) return failRes(401, "유효한 토큰이 아닙니다.");
    const user = await db.User.findOne({
      attributes: {
        exclude: ["password"],
      },
      where: { nickName: isVerified.nickName },
      raw: true,
    });
    if (!user) return failRes(401, "잘못된 접근입니다.");
    req.user = user;
    next();
  } catch (e) {
    errorRes(e as Error);
  }
};
