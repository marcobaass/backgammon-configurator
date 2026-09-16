// Indexes the loaded GLB scene by object and material name.
// Run once after load; applyConfig uses the result to show/hide and paint parts.

export function buildSceneMap(scene) {
  const objectsByName = {};
  const materialsByName = {};

  scene.traverse((obj) => {
    if (obj.name) {
      objectsByName[obj.name] = obj;
    }

    if (!obj.isMesh) return;

    const materials = Array.isArray(obj.material)
      ? obj.material
      : [obj.material];

    for (const mat of materials) {
      if (mat?.name) {
        materialsByName[mat.name] = mat;
      }
    }
  });

  return { objectsByName, materialsByName };
}
