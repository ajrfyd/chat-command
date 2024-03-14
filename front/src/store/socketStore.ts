import { create } from "zustand";
import { SocketStoreState, SocketStoreAction } from "./types";

const useSocketStore = create<SocketStoreState & SocketStoreAction>((set) => ({
  socket: null,
  onlineUser: [],
  setSocket: (socket) => set({ socket }),
  setOnlineUser: (user) =>
    set((state) => ({ ...state, onlineUser: [...state.onlineUser, user] })),
}));

export default useSocketStore;
