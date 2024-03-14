import { type ResponseStateType } from "./types/response";
import { RoomModelType } from "./types/room";
import { type UserModelType } from "./types/user";

declare global {
  namespace Express {
    interface Request {
      commonState: ResponseStateType<T>;
      completeRes: <T>(result: T, status?: number) => void;
      failRes: (status: number, message?: string) => void;
      errorRes: (err: Error) => void;
      ipAddr: string | null;
      user: Partial<UserModelType>;
      room: RoomModelType;
    }
  }
}

interface T {}
