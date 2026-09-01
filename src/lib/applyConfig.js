import { PARTS } from "../config/parts";

function applyPresetToMaterial(mat, preset) {
  if (!mat || !preset) return;
  if (preset.color != null) mat.color.set(preset.color);
  if (preset.roughness != null) mat.roughness = preset.roughness;
  if (preset.metalness != null) mat.metalness = preset.metalness;
  mat.needsUpdate = true;
}

export function applyConfig(sceneMap, selections) {
  for (const part of PARTS) {
    const { style, look } = selections[part.id];

    const styleGroups = Object.values(part.meshes);

    for (const styleGroup of styleGroups) {
      for (const meshPart of styleGroup.meshParts) {
        // Hide all mesh parts
        if (sceneMap.objectsByName[meshPart]) {
          sceneMap.objectsByName[meshPart].visible = false;
        } else {
          console.warn(`Mesh part ${meshPart} not found in scene`);
        }
      }
    }

    for (const meshPart of part.meshes[style].meshParts) {
      if (sceneMap.objectsByName[meshPart]) {
        sceneMap.objectsByName[meshPart].visible = true;
      } else {
        console.warn(`Mesh part ${meshPart} not found in scene`);
      }
    }

    const presets = part.meshes[style].materials[look];

    const meshParts = part.meshes[style].meshParts;

    for (const meshPart of meshParts) {
      const object = sceneMap.objectsByName[meshPart];
      if (!object) continue;
      object.traverse((child) => {
        if (!child.isMesh) return;
        const materials = Array.isArray(child.material)
          ? child.material
          : [child.material];
        for (const mat of materials) {
          const preset = presets[mat.name];
          if (preset) {
            applyPresetToMaterial(mat, preset);
          }
        }
      });
    }
  }
}
