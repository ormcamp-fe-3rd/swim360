import { useState } from "react";

interface MiniPhotosProps {
  src: string; // 이미지 소스를 필수값으로 받음
  onClick: () => void; // 클릭 이벤트 핸들러를 필수값으로 받음
}

function MiniPhotos({ src, onClick }: MiniPhotosProps) {
  return (
    <img
      className="h-[120px] w-[88px] cursor-pointer overflow-hidden rounded object-cover"
      src={src}
      alt="Thumbnail image"
      onClick={onClick} // 클릭 이벤트 핸들러 연결
    />
  );
}

function Photos() {
  const [mainImage, setMainImage] = useState(
    "/public/images/product/swimsuit-front.jpg",
  );

  const thumbnails = [
    "/public/images/product/swimsuit-front.jpg",
    "/public/images/product/swimsuit-front2.jpg",
    "/public/images/product/swimsuit-side.jpg",
    "/public/images/product/swimsuit-back.jpg",
    "/public/images/product/swimsuit-back2.jpg",
  ];

  return (
    <div className="h-auto w-full max-w-[522px]">
      {/* 메인 이미지 */}
      <img
        className="mb-4 h-[600px] w-full max-w-[522px] overflow-hidden object-cover"
        src={mainImage}
        alt="Main product image"
      />

      {/* 썸네일 이미지들 */}
      <div className="tablet:none flex w-full max-w-[522px] gap-5">
        {thumbnails.map((thumbnail, index) => (
          <MiniPhotos
            key={index}
            src={thumbnail}
            onClick={() => setMainImage(thumbnail)} // 클릭 시 메인 이미지 변경
          />
        ))}
      </div>
    </div>
  );
}

export default Photos;
