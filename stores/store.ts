import { create } from "zustand";

interface StoreState {
  portraitInView: boolean;
  setPortraitInView: (portraitInView: boolean) => void;
}

export const useStore = create<StoreState>((set) => ({
  portraitInView: false,
  setPortraitInView: (portraitInView: boolean) => set({ portraitInView }),
}));