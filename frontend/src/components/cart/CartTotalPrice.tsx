import { formatPrice } from "@/utils/formatPrice";
import PrimaryButton from "../common/PrimaryButton";
import { useNavigate } from "react-router-dom";
import { SelectedOrderItem } from "@/types/orders";
interface CartTotalPriceProps {
  selectedCartIds: Set<number | undefined>;
  selectedItems: SelectedOrderItem[];
  totalQuantity: number;
  totalPrice: number;
}

export default function CartTotalPrice({
  selectedCartIds,
  selectedItems,
  totalQuantity,
  totalPrice,
}: CartTotalPriceProps) {
  const navigate = useNavigate();

  const selectedCartData = {
    selectedCartIds: selectedCartIds,
    selectedItems: selectedItems,
    totalQuantity: totalQuantity,
    totalPrice: totalPrice,
  };

  const handleOrderButtonClick = () => {
    if (selectedItems.length === 0) {
      alert("구매할 상품을 선택해주세요.");
      return;
    }
    navigate("/order", { state: selectedCartData });
  };

  return (
    <div className="w-full p-4 middle:w-1/3">
      <div className="p-5">
        <div className="flex justify-between pb-1">
          <span className="inline-block w-2/3">총 상품 금액</span>
          <div className="flex">
            <span className="inline-block text-right">
              {formatPrice(totalPrice)}
            </span>
            <span className="inline-block w-1/2 pl-1">원</span>
          </div>
        </div>
        <div className="flex justify-between pb-4 pt-2">
          <span className="inline-block w-2/3">배송비</span>
          <div className="flex">
            <span className="inline-block text-right">0</span>
            <span className="inline-block w-1/2 pl-1">원</span>
          </div>
        </div>
        <div className="flex justify-between border-t border-black py-2 pt-4">
          <span className="inline-block w-2/3">총 결제금액</span>
          <div className="flex">
            <span className="inline-block text-right">
              {formatPrice(totalPrice)}
            </span>
            <span className="inline-block w-1/2 pl-1">원</span>
          </div>
        </div>
        <div className="py-2">
          <PrimaryButton onClick={handleOrderButtonClick}>
            바로구매
          </PrimaryButton>
        </div>
      </div>
    </div>
  );
}
