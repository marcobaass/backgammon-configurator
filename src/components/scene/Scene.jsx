import { Canvas } from "@react-three/fiber";
// import { OrbitControls } from "@react-three/drei";
import BackgammonSet from "./BackgammonSet";
import { Environment } from "@react-three/drei";
export default function Scene() {
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
      <BackgammonSet />
      {/* <OrbitControls /> */}
    </Canvas>
  );
}
