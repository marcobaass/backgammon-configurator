import { PARTS } from "../config/parts";

// object name → part id (diePips → "dice")
export const CLICK_MAP = {};

// material name → part id (boardLidInlay → "boardInlays")
export const MATERIAL_CLICK_MAP = {};

for (const part of PARTS) {
  for (const styleGroup of Object.values(part.meshes)) {
    // object names
    for (const meshPart of styleGroup.meshParts) {
      CLICK_MAP[meshPart] = part.id;
    }

    // material names (keys inside each look option)
    for (const lookGroup of Object.values(styleGroup.materials)) {
      for (const materialName of Object.keys(lookGroup)) {
        MATERIAL_CLICK_MAP[materialName] = part.id;
      }
    }
  }
}

function getMaterialName(mesh) {
  if (!mesh?.isMesh) return [];
  const mats = Array.isArray(mesh.material) ? mesh.material : [mesh.material];
  return mats.map((mat) => mat?.name).filter(Boolean);
}

export function getPartIdFromClick(object) {
  let current = object;

  while (current) {
    // check materials on this node first
    for (const name of getMaterialName(current)) {
      if (MATERIAL_CLICK_MAP[name]) return MATERIAL_CLICK_MAP[name];
    }

    // then check object name
    if (CLICK_MAP[current.name]) return CLICK_MAP[current.name];

    current = current.parent;
  }
  return null;
}
