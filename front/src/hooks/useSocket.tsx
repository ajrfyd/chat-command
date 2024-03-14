import { io } from "socket.io-client";
import { useEffect } from "react";
import useSocketStore from "../store/socketStore";
import useUserStore from "../store/userStore";
const { VITE_END_POINT } = import.meta.env;

const useSocket = () => {
  const { setSocket, socket } = useSocketStore();
  const { user } = useUserStore();

  useEffect(() => {
    if (user) {
      const socket = io(VITE_END_POINT, {
        auth: {
          transports: ["websocket"],
          userId: user.id,
        },
      });

      setSocket(socket);

      return () => {
        if (socket) socket.close();
      };
    } else {
      socket?.close();
    }
  }, [user]);
  console.log(socket);
  return [socket];
};

export default useSocket;
