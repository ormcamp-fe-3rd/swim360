function OrderProductList() {
  return (
    <div className="border-b border-black py-2.5">
      <p className="w-full border-b border-black p-2.5 font-bold">
        총 상품(<span>4</span>)
      </p>
      <div className="w-full border-b p-2.5">
        <span className="inline-block w-1/3 text-center">상품정보</span>
        <span className="inline-block w-1/3 text-right">수량</span>
        <span className="inline-block w-1/3 text-right">가격</span>
      </div>
      <div className="flex justify-between border-b p-2.5">
        <img src="#" alt="이미지" className="w-1/6" />
        <div className="w-1/3">
          <p>상품네임</p>
          <p>상품 간략 설명 문장</p>
          <p>
            옵션 : <span>BLACK_S</span>
          </p>
        </div>
        <div className="w-1/5 text-center">
          <span>1</span>
        </div>
        <div className="ml-4 w-1/5 flex-col">
          <span className="block text-right">000,000 원</span>
          <span className="block text-right">000,000 원</span>
        </div>
      </div>
    </div>
  );
}

export default OrderProductList;
