import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import BackgammonSet from "./BackgammonSet";

export default function Scene() {
  return (
    <Canvas camera={{ position: [3, 3, 3], fov: 50 }}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[1, 1, 1]} intensity={1} />
      <BackgammonSet />
      <OrbitControls />
    </Canvas>
  );
}
