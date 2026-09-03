import { useGLTF, useAnimations } from "@react-three/drei";
import { useEffect, useRef } from "react";
import { buildSceneMap } from "../../lib/sceneMap";
import { applyConfig } from "../../lib/applyConfig";
import { useConfiguratorStore } from "../../state/useConfiguratorStore";
import { getPartIdFromClick } from "../../lib/clickMap";
import { LoopOnce } from "three";
import { useThree, useFrame } from "@react-three/fiber";
import * as THREE from "three";

export default function BackgammonSet(props) {
  const { scene, animations } = useGLTF("/board15-animation.glb");
  const { actions } = useAnimations(animations, scene);
  console.log(useGLTF("/board15-animation.glb"));

  const sceneMapRef = useRef(null);

  const { camera } = useThree();
  console.log(camera.position);

  const targetRef = useRef(new THREE.Vector3(-0.5, 1.75, 1.0));

  useFrame(() => {
    camera.position.lerp(targetRef.current, 0.03);
    camera.lookAt(0, 0, 0);
  });

  useEffect(() => {
    const sceneMap = buildSceneMap(scene);
    sceneMapRef.current = sceneMap;

    // bumping checkers / separate tongue meshes to avoid z-fighting
    const LIFT = 0.002;
    for (const name of [
      "checkersClassicDark",
      "checkersClassicLight",
      "checkersDentDark",
      "checkersDentLight",
      "checkersEdgeRingDark",
      "checkersEdgeRingLight",
      "checkersEdgeFaceDark",
      "checkersEdgeFaceLight",
      "tongueLightLeft",
      "tongueDarkLeft",
      "tongueLightRight",
      "tongueDarkRight",
    ]) {
      const obj = sceneMap.objectsByName[name];
      if (obj) obj.position.y += LIFT;
    }

    // Tongues baked into boardLid can't be moved — bias depth via material instead
    for (const matName of ["lidTongueLight", "lidTongueDark"]) {
      const mat = sceneMap.materialsByName[matName];
      if (!mat) continue;
      mat.polygonOffset = true;
      mat.polygonOffsetFactor = -1;
      mat.polygonOffsetUnits = -1;
    }

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
  }, []);

  // play animation on start
  const actionRef = useRef(null);

  useEffect(() => {
    actionRef.current = actions.lidOpen;
    if (!actionRef.current) return;
    actionRef.current.time = actionRef.current.getClip().duration;
    actionRef.current.timeScale = -1;
    actionRef.current.clampWhenFinished = true;
    actionRef.current.setLoop(LoopOnce, 1);
    actionRef.current.play();
  }, [actions]);

  //clickhandler for checkers, dice, etc...
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
