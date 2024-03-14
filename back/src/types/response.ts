export type ResponseStateType<T> = {
  status: number;
  message: string;
  result: T;
};
