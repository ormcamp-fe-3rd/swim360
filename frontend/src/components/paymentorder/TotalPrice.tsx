import PrimaryButton from "@/components/common/PrimaryButton";

function TotalPrice() {
  return (
    <div className="w-full p-4 middle:w-1/3">
      <div className="flex justify-between p-1">
        <span className="inline-block w-2/3">총 상품 금액</span>
        <div className="flex">
          <span className="inline-block w-1/2 text-right">0</span>
          <span className="inline-block w-1/2 pl-1">원</span>
        </div>
      </div>
      <div className="flex justify-between p-1">
        <span className="inline-block w-2/3">포인트</span>
        <div className="flex">
          <span className="inline-block w-1/2 text-right">-0</span>
          <span className="inline-block w-1/2 pl-1">원</span>
        </div>
      </div>
      <div className="flex justify-between p-1">
        <span className="inline-block w-2/3">배송비</span>
        <div className="flex">
          <span className="inline-block w-1/2 text-right">0</span>
          <span className="inline-block w-1/2 pl-1">원</span>
        </div>
      </div>
      <div className="flex justify-between border-t border-black p-1">
        <span className="inline-block w-2/3">총 결제금액</span>
        <div className="flex">
          <span className="inline-block w-1/2 text-right">0</span>
          <span className="inline-block w-1/2 pl-1">원</span>
        </div>
      </div>
      <PrimaryButton>바로구매</PrimaryButton>
    </div>
  );
}

export default TotalPrice;
