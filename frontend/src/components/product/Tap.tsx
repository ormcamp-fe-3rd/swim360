interface ProductTabProps {
  activeCategory?: string; // 선택적으로 activeCategory를 받을 수 있도록 설정
}

function ProductTab({ activeCategory = "" }: ProductTabProps) {
  return (
    <div className="scr mx-auto mb-8 mt-16 flex max-h-[44px] w-full justify-center">
      {/* 상품 상세 정보 */}
      <a
        href="#detailsTab"
        className={`flex h-[44px] w-[266px] flex-wrap items-center justify-center border-b-2 ${
          activeCategory === "detailsTab"
            ? "border-black text-black"
            : "border-[#CCCCCC] text-gray-500"
        } text-base font-medium sm:text-[24px]`}
      >
        상품상세정보
      </a>

      {/* 상품 후기 */}
      <a
        href="#reviewsTab"
        className={`flex h-[44px] w-[266px] flex-wrap items-center justify-center border-b-2 ${
          activeCategory === "reviewsTab"
            ? "border-black text-black"
            : "border-[#CCCCCC] text-gray-500"
        } text-sm font-extralight sm:text-[24px]`}
      >
        상품후기
      </a>

      {/* 자주하는 질문 */}
      <a
        href="#qnasTab"
        className={`flex h-[44px] w-[266px] flex-wrap items-center justify-center border-b-2 ${
          activeCategory === "qnasTab"
            ? "border-black text-black"
            : "border-[#CCCCCC] text-gray-500"
        } text-sm font-extralight sm:text-[24px]`}
      >
        자주하는 질문
      </a>

      {/* 교환/반품 */}
      <a
        href="#exchangeTab"
        className={`flex h-[44px] w-[266px] flex-wrap items-center justify-center border-b-2 ${
          activeCategory === "exchangeTab"
            ? "border-black text-black"
            : "border-[#CCCCCC] text-gray-500"
        } text-sm font-extralight sm:text-[24px]`}
      >
        교환/반품
      </a>
    </div>
  );
}

export default ProductTab;
