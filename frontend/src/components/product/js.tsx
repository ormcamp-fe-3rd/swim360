import { Canvas } from "@react-three/fiber";
import { OrbitControls, useFBX } from "@react-three/drei";

function Model() {
  // FBX 파일 로드
  const fbx = useFBX("/public/models/womenSwimSuit01.fbx"); // FBX 파일 경로

  return <primitive object={fbx} scale={0.2} color="#ffffff" />; // 크기 조정 (scale)
}

function Js() {
  return (
    <div className="h-screen w-full">
      <Canvas
        camera={{ position: [0, 0, 10], fov: 75 }} // 카메라 위치 및 FOV 설정
      >
        <ambientLight intensity={1} color="#ffffff" />

        {/* FBX 모델 추가 */}
        <Model />

        {/* OrbitControls 추가 */}
        <OrbitControls />
      </Canvas>
    </div>
  );
}
export default Js;
