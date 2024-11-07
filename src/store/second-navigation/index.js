import { create } from "zustand";

export const useStore = create(set => ({
  show: false,
  setShow: show => set({ show })
}));
