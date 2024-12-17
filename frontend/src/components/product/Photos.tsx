interface MiniPhotosProps {
  src: string; // 이미지 소스를 필수값으로 받음
}

function MiniPhotos({ src }: MiniPhotosProps) {
  return (
    <img
      className="h-[120px] w-[88px] overflow-hidden rounded object-cover"
      src={src}
      alt="Product image"
    />
  );
}

function Photos() {
  const mainImage = "/public/images/product/swimsuit-front.jpg";
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
          <MiniPhotos key={index} src={thumbnail} />
        ))}
      </div>
    </div>
  );
}

export default Photos;
