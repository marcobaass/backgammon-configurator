import { useGLTF } from "@react-three/drei";
import { useEffect, useRef } from "react";
import { buildSceneMap } from "../../lib/sceneMap";
import { applyConfig } from "../../lib/applyConfig";
import { useConfiguratorStore } from "../../state/useConfiguratorStore";
import { getPartIdFromClick } from "../../lib/clickMap";

export default function BackgammonSet(props) {
  const { scene } = useGLTF("/board15-animation.glb");
  const sceneMapRef = useRef(null);

  useEffect(() => {
    const sceneMap = buildSceneMap(scene);
    sceneMapRef.current = sceneMap;

    // defaults = whatever is already in the store on load
    applyConfig(sceneMap, useConfiguratorStore.getState().selections);
  }, [scene]);

  // Subscribe to store
  useEffect(() => {
    const unsub = useConfiguratorStore.subscribe((state) => {
      if (!sceneMapRef.current) return;
      applyConfig(sceneMapRef.current, state.selections);
    });

    return unsub;
  });

  function handleClick(e) {
    e.stopPropagation();
    const partId = getPartIdFromClick(e.object);
    console.log("clicked object:", e.object.name, "→ partId:", partId);
    if (partId) {
      useConfiguratorStore.getState().focusPart(partId);
    }
  }

  return <primitive object={scene} onClick={handleClick} {...props} />;
}

useGLTF.preload("/board15-animation.glb");
