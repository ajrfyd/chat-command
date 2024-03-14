import axios from "axios";

const { VITE_END_POINT } = import.meta.env;

export const baseInstance = axios.create({
  baseURL: VITE_END_POINT,
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
});

baseInstance.interceptors.response.use(
  (res) => res,
  (err) => err.response
);
