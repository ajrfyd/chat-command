import { create } from "zustand";
import { RoomStoreTypes, MsgType } from "./types";
import { baseInstance } from "../api/instances";
import { ResultResponseType } from "../types/response";

const useRoomStore = create<RoomStoreTypes>((set) => ({
  rooms: [],
  loading: false,
  selectedRoom: null,
  selectedRoomType: "A",
  msgs: [],
  setLoading: (loading) => set({ loading }),
  setRooms: (rooms) => set({ rooms }),
  setSelectedRoom: async (room) => {
    try {
      const { data } = await baseInstance.get<ResultResponseType<MsgType[]>>(
        `/api/admin/room/${room.roomId}`
      );

      set({ selectedRoom: room, msgs: data.result });
    } catch (e) {
      console.log(e);
    }
  },
  setSelectedRoomType: (room) => set({ selectedRoomType: room }),
  setMsgs: (msg) => set((state) => ({ ...state, msgs: [...state.msgs, msg] })),
}));

export default useRoomStore;
