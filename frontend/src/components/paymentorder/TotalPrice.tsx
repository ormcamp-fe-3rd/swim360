import PrimaryButton from "@/components/common/PrimaryButton";

import PriceRow from "./PriceRow";

interface TotalPriceProps {
  totalProductPrice: number;
  point: number;
  shippingFee: number;
  totalPayment: number;
}

function TotalPrice({
  totalProductPrice,
  point,
  shippingFee,
  totalPayment,
}: TotalPriceProps) {
  const handleBuyClick = () => {
    alert("바로구매 버튼이 클릭되었습니다!");
  };

  return (
    <div className="w-full p-4 middle:w-1/3">
      <PriceRow label="총 상품 금액" value={totalProductPrice} />
      <PriceRow label="포인트" value={point} isNegative={true} />
      <PriceRow label="배송비" value={shippingFee} />
      <PriceRow
        label="총 결제금액"
        value={totalPayment}
        className="border-t border-black font-bold"
      />
      <PrimaryButton onClick={handleBuyClick}>바로구매</PrimaryButton>
    </div>
  );
}

export default TotalPrice;
