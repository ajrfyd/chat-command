import toast from "react-hot-toast";
import useRoomStore from "../store/roomStore";
import { baseInstance } from "../api/instances";

const useSendMsg = () => {
  const { loading, setLoading } = useRoomStore();

  const sendMsg = async (msg: string, roomId: string) => {
    try {
      setLoading(true);
      await baseInstance.post("/api/chat/send", {
        msg,
        roomId,
      });
      // setMsgs(data.result);
    } catch (e) {
      const { message } = e as Error;
      toast.error(message as string);
    } finally {
      setLoading(false);
    }
  };

  return { sendMsg, loading };
};

export default useSendMsg;
