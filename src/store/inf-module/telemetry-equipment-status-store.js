import { create } from "zustand";

export const useStore = create(set => ({
  bandWidthStatus: null,
  setBandWidthStatus: bandWidthStatus => set({ bandWidthStatus }),
  pingStatus: null,
  setPingStatus: pingStatus => set({ pingStatus }),
  transboxDisk: null,
  setTransboxDisk: transboxDisk => set({ transboxDisk })
}));
