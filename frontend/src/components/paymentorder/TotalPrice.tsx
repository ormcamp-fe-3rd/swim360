import axios from "axios";

import PrimaryButton from "@/components/common/PrimaryButton";

import PriceRow from "./PriceRow";

interface orderFormData {
  ordererName: string;
  recipientName: string;
  phoneNumber: string;
  address: string;
  detailAddress: string;
}

interface TotalPriceProps {
  totalPrice: number;
  point: number;
  formData: orderFormData;
}

function TotalPrice({ totalPrice, point, formData }: TotalPriceProps) {
  const handleBuyClick = async () => {
    try {
      const response = await axios.post("/api/orders", {
        ...formData,
        totalPrice,
      });
      if (response.status === 200) {
        alert("주문이 성공적으로 완료되었습니다!");
      } else {
        throw new Error("서버 오류");
      }
    } catch (error) {
      console.error("주문 오류:", error);
      alert("주문 중 문제가 발생했습니다.");
    }
  };

  return (
    <div className="w-full p-4 middle:w-1/3">
      <PriceRow label="총 상품 금액" value={totalPrice} />
      <PriceRow label="포인트" value={point} isNegative={true} />
      <PriceRow label="배송비" value={0} />
      <PriceRow
        label="총 결제금액"
        value={totalPrice}
        className="border-t border-black font-bold"
      />
      <PrimaryButton onClick={handleBuyClick}>바로구매</PrimaryButton>
    </div>
  );
}

export default TotalPrice;
