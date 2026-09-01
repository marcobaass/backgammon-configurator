import { create } from "zustand";
import { DEFAULT_SELECTIONS } from "../config/parts";

export const useConfiguratorStore = create((set) => ({
  // --- data ---
  selections: { ...DEFAULT_SELECTIONS },
  focusedPartId: null,

  // --- actions ---
  // look = material and color combination
  setLook: (partId, look) =>
    set((state) => ({
      selections: {
        ...state.selections,
        [partId]: { ...state.selections[partId], look },
      },
    })),

  // only for checkers. style = shape
  setStyle: (partId, style) =>
    set((state) => ({
      selections: {
        ...state.selections,
        [partId]: { ...state.selections[partId], style },
      },
    })),

  focusPart: (partId) => set({ focusedPartId: partId }),

  clearFocus: () => set({ focusedPartId: null }),

  reset: () =>
    set({ selections: { ...DEFAULT_SELECTIONS }, focusedPartId: null }),
}));
