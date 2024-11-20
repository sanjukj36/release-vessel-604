import { create } from "zustand";
import { CAMERA } from "@/lib/video-urls";

export const useStore = create(set => ({
  currentSelection: null,
  setCurrentSelection: currentSelection => set({ currentSelection }),
  currentVideos: CAMERA.slice(0, 4),
  setCurrentVideos: currentVideos => set({ currentVideos })
}));
