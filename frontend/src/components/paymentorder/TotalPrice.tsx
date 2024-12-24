import { useNavigate } from "react-router-dom";

import PrimaryButton from "@/components/common/PrimaryButton";
import { createOrderData } from "@/services/order";
import { OrderFormData } from "@/types/orders";

import PriceRow from "./PriceRow";

interface TotalPriceProps {
  totalPrice: number;
  point: number;
  formData: OrderFormData;
  products: { size: string; quantity: number; totalPrice: number }[];
}

function TotalPrice({
  totalPrice,
  point,
  formData,
  products,
}: TotalPriceProps) {
  const navigate = useNavigate();
  const handleBuyClick = async () => {
    const userId = sessionStorage.getItem("id");

    if (!userId) {
      alert("로그인이 필요합니다.");
      navigate("/login");
      return;
    }

    const orderData = {
      ...formData,
      orderStatus: "ORDER_COMPLETE",
      totalPrice,
      user_id: Number(userId),
      products,
    };

    console.log("전송 데이터: ", orderData);
    const response = await createOrderData(orderData, navigate);
    console.log("응답: ", response);
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
