import { useGLTF } from "@react-three/drei";
import { useEffect, useRef } from "react";
import { buildSceneMap } from "../../lib/sceneMap";
import { applyConfig } from "../../lib/applyConfig";
import { useConfiguratorStore } from "../../state/useConfiguratorStore";

export default function BackgammonSet(props) {
  const { scene } = useGLTF("/board15-animation.glb");
  const sceneMapRef = useRef(null);

  useEffect(() => {
    const sceneMap = buildSceneMap(scene);
    sceneMapRef.current = sceneMap;

    // defaults = whatever is already in the store on load
    applyConfig(sceneMap, useConfiguratorStore.getState().selections);
  }, [scene]);

  return <primitive object={scene} {...props} />;
}

useGLTF.preload("/board15-animation.glb");
