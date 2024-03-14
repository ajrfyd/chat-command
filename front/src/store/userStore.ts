import { create } from "zustand";
import { UserStoreState, userStoreAction } from "./types";

const storage = localStorage.getItem("user");

const useUserStore = create<UserStoreState & userStoreAction>((set) => ({
  user: !storage ? null : JSON.parse(storage),
  loading: false,
  error: false,
  setLoading: (loading) => set({ loading }),
  // setUser: (user) => set((state) => ({ user: { ...state.user, ...user } })),
  setUser: (user) => set({ user }),
  setError: (error) => set({ error }),
}));

export default useUserStore;
