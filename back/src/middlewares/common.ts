import { type MiddlewareFnType, ErrorHandlerFnType } from "../types/common";

const { log } = console;
export const lookup: MiddlewareFnType = (req, res, next) => {
  const ip =
    req.headers["x-forwarded-for"] || req.socket.remoteAddress || "127.0.0.1";
  console.log(ip);
  req.ipAddr = ip as string;
  next();
};

export const responseStateMaker: MiddlewareFnType = (req, res, next) => {
  const commonState = {
    status: 200,
    message: "",
    result: "",
  };

  req.commonState = commonState;

  req.completeRes = <T>(result: T, status?: number) => {
    return res.status(status || 200).json({
      ...commonState,
      status: status || 200,
      message: "ok",
      result,
    });
  };

  req.failRes = (statusCode, message) => {
    res.status(statusCode).json({
      ...commonState,
      status: statusCode,
      message,
    });
  };

  req.errorRes = (e) => {
    res.status(500).json({
      ...commonState,
      status: 500,
      message: `${e.name}: ${e.message}`,
    });
  };

  next();
};

export const errorHandler: ErrorHandlerFnType = (err, req, res, next) => {
  const { errorRes } = req;
  log(err.name, err.message);
  errorRes(err);
};
