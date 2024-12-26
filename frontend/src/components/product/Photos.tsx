import { useState } from "react";
interface PhotosProps {
  imageUrl: string[];
  onClick: () => void; // 클릭 이벤트 핸들러를 필수값으로 받음
}

function Photos({ imageUrl }: PhotosProps) {
  const [mainImage, setMainImage] = useState<string>(imageUrl[0]); // 첫 번째 이미지를 기본 메인 이미지로 설정

  return (
    <div className="h-auto w-full max-w-[522px]">
      {/* 메인 이미지 */}
      <img
        className="mb-4 h-[600px] w-full max-w-[522px] overflow-hidden object-cover"
        src={mainImage}
        alt="Main product image"
      />

      {/* 썸네일 이미지들 */}
      <div className="tablet:none flex w-full max-w-[522px] justify-center gap-5">
        {imageUrl.map((src, index) => (
          <img
            key={index}
            className="h-[120px] w-[88px] cursor-pointer overflow-hidden rounded object-cover"
            src={src} // 썸네일 이미지로 각 배열 요소를 사용
            alt={`Thumbnail image ${index}`}
            onClick={() => setMainImage(src)} // 썸네일 클릭 시 메인 이미지 변경
          />
        ))}
      </div>
    </div>
  );
}

export default Photos;
