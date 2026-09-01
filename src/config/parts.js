import { meshes } from "./meshes";

export const PARTS = [
  {
    id: "checkers",
    label: "Checkers",
    meshes: meshes.checkers,
  },
  {
    id: "boardBody",
    label: "Board body",
    meshes: meshes.boardBody,
  },
  {
    id: "boardInlays",
    label: "Board inlay",
    meshes: meshes.boardInlays,
  },
  {
    id: "hinges",
    label: "Hinges",
    meshes: meshes.hinges,
  },
  {
    id: "tongues",
    label: "Tongues",
    meshes: meshes.tongues,
  },
  {
    id: "dice",
    label: "Dice",
    meshes: meshes.dice,
  },
  {
    id: "doublingCube",
    label: "Doubling cube",
    meshes: meshes.doublingCube,
  },
];

export const DEFAULT_SELECTIONS = Object.fromEntries(
  PARTS.map((part) => {
    const style = "classic";
    const look = Object.keys(part.meshes[style].materials)[0];

    return [part.id, { style, look }];
  }),
);
