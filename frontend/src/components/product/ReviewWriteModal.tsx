import { useState } from "react";
import { Textarea } from "../ui/textarea";
import ReviewStar from "./ReviewsStar";

interface ReviewModalProps {
  onClickToggleModal: () => void;
}

function InputImg({
  src,
  onClickPhotoDelet,
}: {
  src: string;
  onClickPhotoDelet: () => void;
}) {
  return (
    <div className="relative h-[100px] w-[100px]">
      <img
        className="h-full w-full object-cover"
        src={src}
        alt="uploaded-img"
      />
      <button
        className="absolute right-2 top-2 z-10"
        onClick={onClickPhotoDelet}
      >
        <img
          className="h-5 w-5"
          src="/public/images/common/btn-close.png"
          alt="close"
        />
      </button>
    </div>
  );
}

function ReviewWriteModal({ onClickToggleModal }: ReviewModalProps) {
  const [photos, setPhotos] = useState<string[]>([]); // 사진 URL 배열로 상태 관리

  const handleAddPhoto = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      const newPhotos = Array.from(event.target.files).map((file) =>
        URL.createObjectURL(file),
      );
      setPhotos((prevPhotos) => [...prevPhotos, ...newPhotos].slice(0, 5)); // 최대 5개 제한
    }
  };

  const handleDeletePhoto = (index: number) => {
    setPhotos((prevPhotos) => prevPhotos.filter((_, i) => i !== index));
  };

  return (
    <>
      <div className="fixed left-1/2 top-1/2 z-50 w-full max-w-[600px] -translate-x-1/2 -translate-y-1/2 transform sm:max-w-[768px] md:max-w-[1024px]">
        <div className="relative mx-auto flex h-auto flex-col items-center justify-start rounded-2xl border-2 bg-white p-4">
          <div className="mb-4 flex w-full justify-center">
            <p className="w-[200px] border-b-2 border-black py-4 text-center">
              후기작성
            </p>
            <button
              onClick={onClickToggleModal}
              className="absolute right-4 top-4 h-8 w-8"
            >
              <img
                className="h-8 w-8"
                src="/public/images/common/btn-close.png"
                alt="close"
              />
            </button>
          </div>
          <ReviewStar size="large" />
          <div className="w-full">
            <Textarea className="mx-auto mt-4 h-[400px] max-h-[400px] w-full" />
          </div>

          <div className="flex w-full min-w-[250px] flex-wrap items-center justify-center gap-2 overflow-hidden pt-6">
            {photos.length < 5 && ( // 사진 갯수가 5개 미만일 때만 첨부 버튼 표시
              <label htmlFor="file" className="cursor-pointer">
                <img
                  className="h-[100px] w-[100px] object-contain"
                  src="/public/images/product/btn-input-image.png"
                  alt="upload"
                />
              </label>
            )}
            {photos.map((photo, index) => (
              <InputImg
                key={index}
                src={photo}
                onClickPhotoDelet={() => handleDeletePhoto(index)}
              />
            ))}
          </div>

          <input
            className="hidden"
            type="file"
            name="file"
            id="file"
            accept="image/*"
            multiple
            onChange={handleAddPhoto} // 파일 추가 처리
          />

          <button className="mb-14 mt-10 h-[50px] w-[200px] rounded-[8px] bg-black text-white">
            게시하기
          </button>
        </div>
      </div>
      <div className="fixed left-0 top-0 h-full w-full bg-black bg-opacity-55"></div>
    </>
  );
}

export default ReviewWriteModal;
