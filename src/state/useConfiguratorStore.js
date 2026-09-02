import { create } from "zustand";
import { DEFAULT_SELECTIONS, PARTS } from "../config/parts";

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
    set((state) => {
      const part = PARTS.find((part) => part.id === partId);
      const looks = Object.keys(part.meshes[style].materials);
      const currentLook = state.selections[partId].look;
      const look = looks.includes(currentLook) ? currentLook : looks[0];

      return {
        selections: {
          ...state.selections,
          [partId]: { style, look },
        },
      };
    }),

  focusPart: (partId) => set({ focusedPartId: partId }),

  clearFocus: () => set({ focusedPartId: null }),

  reset: () =>
    set({ selections: { ...DEFAULT_SELECTIONS }, focusedPartId: null }),
}));
