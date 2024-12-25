import { Canvas } from "@react-three/fiber";
import { OrbitControls, useFBX } from "@react-three/drei";
import { Color, Mesh } from "three";

function Model({ adjustColor }: { adjustColor: boolean }) {
  // FBX 파일 로드
  const fbx = useFBX("/public/models/womenSwimSuit01.fbx"); // FBX 파일 경로

  if (fbx) {
    // 모델이 로드된 후
    fbx.traverse((child) => {
      if (child instanceof Mesh) {
        if (adjustColor) {
          // 채도를 높이고 명도를 낮춘 색상
          const originalColor = new Color(0.8, 0.8, 0.8); // 기본 색상
          const adjustedColor = originalColor.offsetHSL(0, 0.3, -0.1); // 채도 높이고 명도 낮춤
          child.material.color = adjustedColor;
        } else {
          // 기본 색상
          child.material.color = new Color(0.9, 0.9, 0.9); // 밝은 회색
        }
        child.material.needsUpdate = true;
      }
    });

    // 모델이 로드된 후 회전값 설정 (정면으로 회전)
    fbx.rotation.set(0, -Math.PI / 2, 0); // y축을 기준으로 -90도 회전 (정면으로 설정)
  }

  return <primitive object={fbx} scale={0.2} />;
}

function Js({ adjustColor }: { adjustColor: boolean }) {
  return (
    <div className="h-[600px] w-full max-w-[1064px]">
      <Canvas
        camera={{ position: [0, 50, 140], fov: 40 }} // 카메라 위치 및 FOV 설정
      >
        <ambientLight intensity={4} color="#ffffff" />

        {/* FBX 모델 추가 */}
        <Model adjustColor={adjustColor} />
        {/* OrbitControls 추가 */}
        <OrbitControls />
      </Canvas>
    </div>
  );
}

export default Js;
