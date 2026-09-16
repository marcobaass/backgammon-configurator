import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import BackgammonSet from "./BackgammonSet";
import { Environment } from "@react-three/drei";
import { useRef, useState } from "react";
import { useConfiguratorStore } from "../../state/useConfiguratorStore";

export default function Scene() {
  const [cameraMovement, setCameraMovement] = useState(true);
  const controlsRef = useRef(null);
  const focusedPartId = useConfiguratorStore((state) => state.focusedPartId);
  const canOrbit = !cameraMovement && focusedPartId === null;

  return (
    <Canvas camera={{ position: [3, 3, 3], fov: 50 }}>
      <color attach="background" args={["#1e1020"]} />
      <ambientLight intensity={0.75} />
      <directionalLight position={[3, 3, 3]} intensity={1} />
      <Environment
        preset="studio"
        background={false}
        environmentIntensity={0.15}
      />
      <BackgammonSet
        setCameraMovement={setCameraMovement}
        controlsRef={controlsRef}
      />
      <OrbitControls
        ref={controlsRef}
        enabled={canOrbit}
        enableZoom={false}
        enablePan={false}
        enableRotate={true}
      />
    </Canvas>
  );
}
