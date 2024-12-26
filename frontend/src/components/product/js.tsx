import { Canvas } from "@react-three/fiber";
import { OrbitControls, useFBX } from "@react-three/drei";
import { Color, Mesh } from "three";

function Model({
  adjustColor,
  productId,
}: {
  adjustColor: boolean;
  productId: number;
}) {
  const fbxPath =
    productId >= 1 && productId <= 16
      ? "/public/models/womenSwimSuit01.fbx"
      : 17 <= productId && productId <= 26
        ? "/public/models/womenSwimSuit02.fbx"
        : 27 <= productId && productId <= 46
          ? "/public/models/menSwimSuit01.fbx"
          : 47 <= productId && productId <= 66
            ? "/public/models/menSwimSuit02.fbx"
            : 67 <= productId && productId <= 76
              ? "/public/models/cap.fbx"
              : 77 <= productId && productId <= 88
                ? "/public/models/towel.fbx"
                : 89 <= productId && productId <= 93
                  ? "/public/models/fins.fbx"
                  : "잠시만 기다려주세요!";
  // FBX 파일 로드
  const fbx = useFBX(fbxPath);

  if (fbx) {
    // 모델이 로드된 후
    fbx.traverse((child) => {
      if (child instanceof Mesh) {
        if (adjustColor) {
          // 채도를 높이고 명도를 낮춘 색상
          const originalColor = new Color(0.8, 0.8, 0.8); // 기본 색상
          const adjustedColor = originalColor.offsetHSL(0, 0.3, -0.1); // 채도 높이고 명도 낮춤q
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

function ModelSection({
  adjustColor,
  productId,
}: {
  adjustColor: boolean;
  productId: number;
}) {
  return (
    <div className="h-[600px] w-full max-w-[1064px]">
      <Canvas
        camera={{ position: [0, 50, 140], fov: 40 }} // 카메라 위치 및 FOV 설정
      >
        <ambientLight intensity={4} color="#ffffff" />

        {/* FBX 모델 추가 */}
        <Model adjustColor={adjustColor} productId={productId} />
        {/* OrbitControls 추가 */}
        <OrbitControls />
      </Canvas>
    </div>
  );
}

export default ModelSection;
