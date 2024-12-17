import PrimaryButton from "../common/PrimaryButton";

export default function CartTotalPrice() {
  return (
    <div className="middle:w-1/3 w-full p-4">
      <div className="flex justify-between p-1">
        <span className="inline-block w-2/3">총 상품 금액</span>
        <div className="flex">
          <span className="inline-block w-1/2 text-right">0</span>
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
