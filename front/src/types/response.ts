export type ResultResponseType<T> = {
  status: number;
  result: T;
  message: string;
};
