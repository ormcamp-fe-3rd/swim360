import ProductTab from "./Tap";

function DetailsTab() {
  return (
    <div>
      <div id="detailsTab">
        <ProductTab activeCategory="detailsTab" />
      </div>
      <div className="mx-auto h-[824px] w-full max-w-[1064px] rounded-[20px] bg-black"></div>

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
