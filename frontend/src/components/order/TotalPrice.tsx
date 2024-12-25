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
  meansPaymentData: {
    depositorName: string;
    selectedOption: string;
    businessNumber: string;
    phoneNumber: string;
  };
}

function TotalPrice({
  totalPrice,
  point,
  formData,
  products,
  meansPaymentData,
}: TotalPriceProps) {
  const navigate = useNavigate();
  const handleBuyClick = async () => {
    const userId = sessionStorage.getItem("id");

    if (!userId) {
      alert("로그인이 필요합니다.");
      navigate("/login");
      return;
    }
    if (!meansPaymentData.depositorName) {
      alert("입금자 이름은 필수 항목입니다.");
      return;
    }
    if (
      meansPaymentData.selectedOption === "personal" &&
      !meansPaymentData.phoneNumber
    ) {
      alert("전화번호를 입력해주세요.");
      return;
    }
    if (
      meansPaymentData.selectedOption === "business" &&
      !meansPaymentData.businessNumber
    ) {
      alert("사업자번호를 입력해주세요.");
      return;
    }

    const orderData = {
      ...formData,
      orderStatus: "ORDER_COMPLETE",
      totalPrice,
      user_id: Number(userId),
      products,
    };

    const response = await createOrderData(orderData);
    if (response?.status === 200) {
      alert("주문이 성공적으로 완료되었습니다!");
      navigate("/orderthanks");
    } else {
      throw new Error("서버 오류");
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
