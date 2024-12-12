function DetailsSelected() {
  return (
    <>
      <div className="mb-1 flex h-[50px] w-full max-w-[522px] items-center justify-between bg-[#EDEDED] p-4">
        <p>사이즈</p>
        <div className="flex w-fit items-center justify-between gap-3 rounded-[12px] border-[1px] border-black px-4">
          <img className="w-6" src="/public/images/product/icon-minus.png" />
          <p className="w-5 text-center"> 2 </p>
          <img className="w-6" src="/public/images/product/icon-add.png" />
        </div>
        <p>000,000원</p>
      </div>
    </>
  );
}

function Details() {
  return (
    <>
      <div className="h-auto w-full max-w-[522px] flex-col">
        <p className="text-[18px] font-semibold">제품명</p>
        <p className="text-[14px] font-extralight">제품 상세 내용</p>
        <div className="flex gap-[10px]">
          <p className="text-[16px] font-medium">정상가</p>
          <p className="text-[14px] font-extralight">000,000원</p>
        </div>
        <div className="flex gap-[10px]">
          <p className="text-[16px] font-medium">할인가</p>
          <p className="text-[16px] font-bold text-[#D40022]">000,000원</p>
          <p className="text-[16px] font-bold text-[#D40022]">00%</p>
        </div>
        <div className="flex gap-[10px]">
          <p className="text-[14px] text-[#B0B0B0]">배송료</p>
          <p className="text-[14px] text-[#B0B0B0]">000,000원</p>
        </div>

        <div className="mb-5 h-[88px] w-full max-w-[522px] flex-col justify-between border-t-[1px] border-black pt-5">
          <p className="mb-2 text-[16px]">사이즈</p>
          <div className="mb-5 flex gap-1">
            <button className="flex h-[40px] w-[60px] items-center justify-center gap-3 rounded-xl border-[1px] border-black hover:bg-black hover:text-white">
              24
            </button>
            <button className="flex h-[40px] w-[60px] items-center justify-center gap-3 rounded-xl border-[1px] border-black hover:bg-black hover:text-white">
              26
            </button>
            <button className="flex h-[40px] w-[60px] items-center justify-center gap-3 rounded-xl border-[1px] border-black hover:bg-black hover:text-white">
              28
            </button>
            <button className="flex h-[40px] w-[60px] items-center justify-center gap-3 rounded-xl border-[1px] border-black hover:bg-black hover:text-white">
              30
            </button>
            <button className="flex h-[40px] w-[60px] items-center justify-center gap-3 rounded-xl border-[1px] border-black hover:bg-black hover:text-white">
              32
            </button>
          </div>
        </div>

        <DetailsSelected />

        <div>
          <div className="mb-[10px] mt-10 flex w-full max-w-[522px] justify-end">
            <p className="text-[16px] font-semibold">총 상품 금액: </p>
            <p className="text-[16px] font-semibold">000,000원</p>
          </div>

          <div className="h-auto w-full max-w-[522px]">
            <button className="mr-3 mt-4 h-[70px] w-full rounded-2xl border-[1px] text-black">
              장바구니 담기
            </button>
            <button className="my-2 h-[70px] w-full rounded-2xl bg-black text-white">
              바로 구매
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
export default Details;
