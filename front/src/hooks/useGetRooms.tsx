import { useEffect } from "react";
import toast from "react-hot-toast";
import useRoomStore from "../store/roomStore";
import { baseInstance } from "../api/instances";
import { RoomType } from "../store/types";
import { ResultResponseType } from "../types/response";

const useGetRooms = () => {
  const { loading, setLoading, rooms, setRooms, selectedRoomType } =
    useRoomStore();

  useEffect(() => {
    const getRooms = async () => {
      setLoading(true);
      try {
        const { data } = await baseInstance.get<ResultResponseType<RoomType[]>>(
          `/api/admin/rooms/${selectedRoomType}`
        );
        setRooms(data.result);
      } catch (e) {
        toast.error("Errro");
      } finally {
        setLoading(false);
      }
    };

    getRooms();
  }, [selectedRoomType]);

  const useGetRooms = async () => {};

  return { loading, rooms, useGetRooms };
};

export default useGetRooms;
