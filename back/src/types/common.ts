import { Request, Response, NextFunction } from "express";

export type RQ = Request & {};
export type RS = Response & {};

export type EnumType = "A" | "B";

type resultStateType<T> = {
  status: number;
  message: string;
  result: T;
};

export type MiddlewareFnType = (
  req: Request,
  res: Response,
  next: NextFunction
) => void;

export type ErrorHandlerFnType = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => void;

export type ControllerFnType = <T>(req: Request, res: Response) => Partial<T>;
