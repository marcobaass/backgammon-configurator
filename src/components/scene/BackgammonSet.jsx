import { useGLTF, useAnimations } from "@react-three/drei";
import { useEffect, useRef } from "react";
import { buildSceneMap } from "../../lib/sceneMap";
import { applyConfig } from "../../lib/applyConfig";
import { useConfiguratorStore } from "../../state/useConfiguratorStore";
import { getPartIdFromClick } from "../../lib/clickMap";
import { LoopOnce } from "three";
import { useThree, useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { PARTS } from "../../config/parts";
import { CAMERA_VIEWS } from "../../config/cameraViews";

export default function BackgammonSet({
  setCameraMovement,
  controlsRef,
  ...props
}) {
  const focusedPartId = useConfiguratorStore((state) => state.focusedPartId);
  const { scene, animations } = useGLTF("/board15-animation.glb");
  const { actions } = useAnimations(animations, scene);

  const sceneMapRef = useRef(null);

  const { camera } = useThree();

  const lookAtCurrentRef = useRef(new THREE.Vector3(0, 0, 0));
  const cameraMovingRef = useRef(true);

  const hoveredPartIdRef = useRef(null);
  const hoverMatsRef = useRef([]);
  const hoverAmountRef = useRef(0);

  /**
   * Debug
   */
  useEffect(() => {
    window.camera = camera;
  }, [camera]);

  // start a one-shot camera move on intro + whenever focus changes
  useEffect(() => {
    cameraMovingRef.current = true;
    setCameraMovement(true);
  }, [focusedPartId, setCameraMovement]);

  /**
   * Animation
   */

  useFrame(() => {
    if (cameraMovingRef.current) {
      const view = focusedPartId
        ? CAMERA_VIEWS[focusedPartId]
        : CAMERA_VIEWS.overview;

      camera.position.lerp(view.position, 0.03);
      lookAtCurrentRef.current.lerp(view.lookAt, 0.03);
      camera.lookAt(lookAtCurrentRef.current);

      const arrived =
        camera.position.distanceTo(view.position) < 0.01 &&
        lookAtCurrentRef.current.distanceTo(view.lookAt) < 0.01;

      if (arrived) {
        const controls = controlsRef?.current;
        if (controls) {
          controls.target.copy(lookAtCurrentRef.current);
          controls.update();
        }

        cameraMovingRef.current = false;
        setCameraMovement(false);
      }
    }

    // hover easing
    for (const saved of hoverMatsRef.current) {
      const targetOpacity = hoverAmountRef.current === 1 ? 0.2 : saved.opacity;

      saved.mat.opacity = THREE.MathUtils.lerp(
        saved.mat.opacity,
        targetOpacity,
        0.15,
      );
      saved.mat.needsUpdate = true;
    }

    if (hoverAmountRef.current === 0 && hoverMatsRef.current.length > 0) {
      const done = hoverMatsRef.current.every(
        (saved) => Math.abs(saved.mat.opacity - saved.opacity) < 0.01,
      );
      if (done) {
        restoreHoverMats();
      }
    }
  });

  /** Building the scene */
  useEffect(() => {
    const sceneMap = buildSceneMap(scene);
    sceneMapRef.current = sceneMap;

    // bumping checkers / separate tongue meshes to avoid z-fighting
    const LIFT = 0.002;
    for (const name of [
      "doublingCube",
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

  function restoreHoverMats() {
    for (const saved of hoverMatsRef.current) {
      saved.mat.opacity = saved.opacity;
      saved.mat.transparent = saved.transparent;
      saved.mat.needsUpdate = true;
    }
    hoverMatsRef.current = [];
  }

  //clickhandler for checkers, dice, etc...
  function handleClick(e) {
    e.stopPropagation();
    const partId = getPartIdFromClick(e.object);
    if (partId) {
      useConfiguratorStore.getState().focusPart(partId);
    }
  }

  function hoverOver(e) {
    e.stopPropagation();

    const partId = getPartIdFromClick(e.object);
    const mesh = e.object;
    if (!mesh) return;

    const part = PARTS.find((part) => part.id === partId);
    if (!partId || !part || !sceneMapRef.current) return;
    const { style } = useConfiguratorStore.getState().selections[partId];
    const names = part.meshes[style].meshParts;

    if (hoveredPartIdRef.current === partId) return;

    // undo previous part before claiming a new one (avoids stuck translucent mats)
    restoreHoverMats();

    names.forEach((name) => {
      const obj = sceneMapRef.current.objectsByName[name];

      if (obj) {
        obj.traverse((child) => {
          if (!child.isMesh) return;

          const materials = Array.isArray(child.material)
            ? child.material
            : [child.material];

          for (const mat of materials) {
            if (!mat) continue;

            if (hoverMatsRef.current.some((s) => s.mat === mat)) continue;

            hoverMatsRef.current.push({
              mat,
              transparent: mat.transparent,
              opacity: mat.opacity,
            });

            mat.transparent = true;
            hoverAmountRef.current = 1;
            mat.needsUpdate = true;
          }
        });
      }
    });

    hoveredPartIdRef.current = partId;
    document.body.style.cursor = "pointer";
  }

  function hoverOut(e) {
    e.stopPropagation();

    const stillOnSamePart = e.intersections.some((hit) => {
      return getPartIdFromClick(hit.object) === hoveredPartIdRef.current;
    });

    if (stillOnSamePart) return;

    hoverAmountRef.current = 0;
    hoveredPartIdRef.current = null;
    document.body.style.cursor = "auto";
  }

  return (
    <primitive
      object={scene}
      onClick={handleClick}
      onPointerOver={hoverOver}
      onPointerOut={hoverOut}
      {...props}
    />
  );
}

useGLTF.preload("/board15-animation.glb");
