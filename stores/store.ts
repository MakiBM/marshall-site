import { create } from "zustand";

interface StoreState {
  portraitInView: boolean;
}

export const useStore = create<StoreState>(() => ({
  portraitInView: false,
}));