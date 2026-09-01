import { create } from "zustand";
import { DEFAULT_SELECTIONS } from "../config/parts";

export const useConfiguratorStore = create((set) => ({
  selections: { ...DEFAULT_SELECTIONS },

  setSelection: (partId, optionId) =>
    set((state) => ({
      selections: {
        ...state.selections,
        [partId]: optionId,
      },
    })),

  reset: () => set({ selections: { ...DEFAULT_SELECTIONS } }),
}));
