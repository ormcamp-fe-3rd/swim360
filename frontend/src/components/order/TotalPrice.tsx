import { useNavigate } from "react-router-dom";

import PrimaryButton from "@/components/common/PrimaryButton";
import { createOrderData } from "@/services/order";
import { OrderFormData } from "@/types/orders";

import PriceRow from "./PriceRow";
import { deleteOrderedCart } from "@/services/cart";
import { CartContext } from "@/contexts/CartContext";
import { useContext } from "react";

interface TotalPriceProps {
  selectedCartIds: Set<number | undefined>;
  totalPrice: number;
  point: number;
  formData: OrderFormData;
  products: { size: string; quantity: number; totalPrice: number }[];
}

function TotalPrice({
  selectedCartIds,
  totalPrice,
  point,
  formData,
  products,
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

    const orderData = {
      ...formData,
      orderStatus: "ORDER_COMPLETE",
      totalPrice,
      user_id: Number(userId),
      products,
    };

    const response = await createOrderData(orderData);
    if (response?.status === 200) {
      if (selectedCartIds) {
        handleOrderedCartDelete(selectedCartIds);
      }
      navigate("/order/thanks");
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
