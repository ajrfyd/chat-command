import {
  findUserByNickName,
  createUser,
  comparePassword,
} from "../services/auth.services.js";
import { UserModelType } from "../types/user.js";
import { RQ, RS } from "../types/common";
import { generateToken, compareHashStr } from "../utils/utils.js";

export const signup = async (req: RQ, res: RS): Promise<void> => {
  const { errorRes, failRes, completeRes, ipAddr } = req;
  const { nickName, password, confirmPassword } = req.body;

  try {
    if (password.length < 4 || confirmPassword.length < 4)
      return failRes(400, "비밀번호는 4자리 이상입니다.");
    if (!comparePassword(password, confirmPassword))
      return failRes(400, "비밀번호가 서로 일치하지 않습니다.");

    const user = await findUserByNickName(nickName);
    if (user) return failRes(400, "이미 존재하는 닉네임 입니다.");

    const newUser = await createUser(nickName, password, ipAddr as string);
    const token = generateToken(newUser.nickName);
    res.cookie("jwt", token, {
      maxAge: 15 * 24 * 60 * 60 * 1000, // MS
      httpOnly: true, // prevent XSS attacks cross-site scripting attacks
      sameSite: "strict", // CSRF attacks cross-site request forgery attacks
      secure: process.env.NODE_ENV !== "development",
      signed: true,
    });
    return completeRes({ ...newUser, password: null }, 201);
  } catch (e) {
    errorRes(e as Error);
  }
};

export const login = async (req: RQ, res: RS): Promise<void> => {
  const { errorRes, failRes, completeRes } = req;
  const { nickName, password } = req.body;
  if (password.length < 4) return failRes(400, "비밀번호는 4자리 이상입니다.");
  console.log(nickName, password);
  try {
    const user = await findUserByNickName(nickName);
    if (!user) return failRes(401, "존재하지 않는 닉네임 입니다.");
    const isCorrectPwd = await compareHashStr(password, user.password);
    if (user && !isCorrectPwd)
      return failRes(401, "비밀번호가 일치하지 않습니다.");

    const token = generateToken(user.nickName);
    res.cookie("jwt", token, {
      maxAge: 15 * 24 * 60 * 60 * 1000, // MS
      httpOnly: true, // prevent XSS attacks cross-site scripting attacks
      sameSite: "strict", // CSRF attacks cross-site request forgery attacks
      secure: process.env.NODE_ENV !== "development",
      signed: true,
    });
    completeRes({ ...user, password: null });
  } catch (e) {
    errorRes(e as Error);
  }
};

export const logout = async (req: RQ, res: RS) => {
  const { errorRes, failRes, completeRes } = req;
  try {
    // res.cookie("jwt", "", { maxAge: 0 });
    res.clearCookie("jwt");
    completeRes(null);
  } catch (e) {
    errorRes(e as Error);
  }
};
