import { useEffect } from "react";
import useSocket from "./useSocket";
import useRoomStore from "../store/roomStore";
import { MsgType } from "../store/types";

const useListenMsg = () => {
  const [socket] = useSocket();
  const { msgs, setMsgs } = useRoomStore();

  useEffect(() => {
    socket!.on("newMsg", (msg: MsgType) => {
      setMsgs(msg);
    });

    return () => {
      socket!.off("newMsg");
    };
  }, [socket, msgs, setMsgs]);
};

export default useListenMsg;
