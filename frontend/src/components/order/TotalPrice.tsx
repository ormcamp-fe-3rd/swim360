import { useContext } from "react";
import { useNavigate } from "react-router-dom";

import PrimaryButton from "@/components/common/PrimaryButton";
import { CartContext } from "@/contexts/CartContext";
import { deleteOrderedCart } from "@/services/cart";
import { createOrderData } from "@/services/order";
import { OrderFormData } from "@/types/orders";

import PriceRow from "./PriceRow";

interface TotalPriceProps {
  selectedCartIds: Set<number | undefined>;
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
  selectedCartIds,
  totalPrice,
  point,
  formData,
  products,
  meansPaymentData,
}: TotalPriceProps) {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error("context가 Provider 외부에 존재하고 있습니다.");
  }

  const { setCartFetchTrigger } = context;

  const navigate = useNavigate();

  const handleOrderedCartDelete = async (
    selectedCartIds: Set<number | undefined>,
  ) => {
    try {
      const cartIds = Array.from(selectedCartIds);
      const response = await deleteOrderedCart(cartIds);
      if (response?.status === 200) {
        setCartFetchTrigger((prev) => prev + 1);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const handleBuyClick = async () => {
    const userId = sessionStorage.getItem("id");

    if (!userId) {
      alert("로그인이 필요합니다.");
      navigate("/login");
      return;
    }
    if (!formData.address) {
      alert("배송주소는 필수 항목입니다.");
      return;
    }
    if (!formData.detailAddress) {
      alert("배송주소는 필수 항목입니다.");
      return;
    }
    if (!formData.phoneNumber) {
      alert("휴대전화번호는 필수 항목입니다.");
      return;
    }
    if (!formData.receiver) {
      alert("받으시는분 입력은 필수 항목입니다.");
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
      await handleOrderedCartDelete(selectedCartIds);
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
