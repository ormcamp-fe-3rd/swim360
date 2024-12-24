import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

function App() {
  return (
    <div className="h-screen w-full">
      <Canvas
        camera={{ position: [0, 0, 10], fov: 75 }} // 카메라 위치 및 FOV 설정
      >
        <ambientLight />
        <pointLight position={[10, 10, 10]} />

        {/* 3D 상자 */}
        <mesh rotation={[0.5, 0.5, 0]} position={[0, 0, 0]}>
          <boxGeometry args={[5, 5, 5]} />
          <meshStandardMaterial color="orange" />
        </mesh>

        {/* OrbitControls 추가 */}
        <OrbitControls />
      </Canvas>
    </div>
  );
}

export default App;
