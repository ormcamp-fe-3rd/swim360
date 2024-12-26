import { useState } from "react";
import ProductTab from "./Tap";
import ModelSection from "./js";

interface DetailsProp {
  productId: number;
}

function DetailsTab({ productId }: DetailsProp) {
  const [adjustColor, setAdjustColor] = useState(false);
  const [imageIndex, setImageIndex] = useState(0); // 현재 이미지의 인덱스를 관리

  const handleButtonClick = () => {
    setAdjustColor((prev) => !prev); // 상태를 토글
    setImageIndex((prevIndex) => (prevIndex + 1) % images.length); // 다음 이미지로 변경
  };

  const images = [
    "/public/images/product/icon-water.png",
    "/public/images/product/icon-sun.png",
  ]; // 사용할 이미지 배열

  return (
    <div>
      <div id="detailsTab">
        <ProductTab activeCategory="detailsTab" />
      </div>
      <div className="bg- relative mx-auto h-[600px] w-full max-w-[1064px] rounded-[20px] bg-slate-100">
        <ModelSection adjustColor={adjustColor} productId={productId} />

        <button
          className="absolute bottom-10 right-10 flex h-16 w-16 items-center justify-center rounded-full bg-slate-50 shadow-md shadow-slate-300 hover:bg-slate-200"
          onClick={handleButtonClick}
        >
          <img
            className="h-8 w-8"
            src={images[imageIndex]} // 현재 인덱스에 해당하는 이미지 표시
            alt="Button Icon"
          />
        </button>
      </div>

      <div className="mx-auto flex w-full flex-wrap justify-center gap-[12px]">
        <div className="flex w-[1064px] flex-wrap justify-center">
          <div className="mx-0 flex h-[240px] w-full max-w-[342px] flex-col content-center items-center justify-center gap-8">
            <img
              className="h-[100px] w-[90px]"
              src="/public/images/product/icon-fabric-1.png"
            />
            <p>맑은 물에 충분히 헹궈 가볍게 세탁</p>
          </div>
          <div className="mx-0 flex h-[240px] w-[342px] flex-col content-center items-center justify-center gap-12">
            <img
              className="md-[22px] mt-[22px] h-[66px] w-[132px]"
              src="/public/images/product/icon-fabric-2.png"
            />
            <p>맑은 물에 충분히 헹궈 가볍게 세탁</p>
          </div>
          <div className="mx-0 flex h-[240px] w-[342px] flex-col content-center items-center justify-center gap-8">
            <img
              className="h-[100px] w-[100px]"
              src="/public/images/product/icon-fabric-3.png"
            />
            <p>맑은 물에 충분히 헹궈 가볍게 세탁</p>
          </div>
          <div className="mx-0 flex h-[240px] w-[342px] flex-col content-center items-center justify-center gap-8">
            <img
              className="h-[100px] w-[100px]"
              src="/public/images/product/icon-fabric-4.png"
            />
            <p>맑은 물에 충분히 헹궈 가볍게 세탁</p>
          </div>
          <div className="mx-0 flex h-[240px] w-[342px] flex-col content-center items-center justify-center gap-8">
            <img
              className="h-[100px] w-[100px]"
              src="/public/images/product/icon-fabric-5.png"
            />
            <p>맑은 물에 충분히 헹궈 가볍게 세탁</p>
          </div>
          <div className="mx-0 flex h-[240px] w-[342px] flex-col content-center items-center justify-center gap-8">
            <img
              className="h-[94px] w-[100px]"
              src="/public/images/product/icon-fabric-6.png"
            />
            <p>맑은 물에 충분히 헹궈 가볍게 세탁</p>
          </div>
        </div>
      </div>

      <div className="mx-auto mb-8 flex w-full justify-center text-[13px] font-extralight">
        <div className="w-[1064px]">
          <p>
            - 수영복 원단은 마찰에 약하므로 미끄럼틀 혹은 반복적인 마찰은
            피해주세요
          </p>
          <p>- 뜨거운 물에 세탁하거나, 다림질을 하지 마세요</p>
          <p>- 오일류(선탠오일)는 수영복에 묻지 않게 해주세요</p>
          <p>- 물이 빠져 오염이 될 수 있으니 다른 옷과 함께 보관하지 마세요</p>
          <p>- 물이 빠져 오염이 될 수 있으니 단독 세탁하세요</p>
        </div>
      </div>
    </div>
  );
}
export default DetailsTab;
