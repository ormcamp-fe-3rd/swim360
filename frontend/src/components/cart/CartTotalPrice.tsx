import { formatPrice } from "@/utils/formatPrice";
import PrimaryButton from "../common/PrimaryButton";
import { Cart } from "@/types/cart";
interface CartTotalPriceProps {
  selectedItems: Cart[];
  totalQuantity: number;
  totalPrice: number;
}

export default function CartTotalPrice({
  selectedItems,
  totalQuantity,
  totalPrice,
}: CartTotalPriceProps) {
  const selectedCartData = {
    selectedItems,
    totalQuantity,
    totalPrice,
  };
  return (
    <div className="w-full p-4 middle:w-1/3">
      <div className="flex justify-between p-1">
        <span className="inline-block w-2/3">총 상품 금액</span>
        <div className="flex">
          <span className="inline-block text-right">
            {formatPrice(totalPrice)}
          </span>
          <span className="inline-block w-1/2 pl-1">원</span>
        </div>
      </div>
      <div className="flex justify-between p-1">
        <span className="inline-block w-2/3">배송비</span>
        <div className="flex">
          <span className="inline-block text-right">0</span>
          <span className="inline-block w-1/2 pl-1">원</span>
        </div>
      </div>
      <div className="flex justify-between border-t border-black p-1">
        <span className="inline-block w-2/3">총 결제금액</span>
        <div className="flex">
          <span className="inline-block text-right">
            {formatPrice(totalPrice)}
          </span>
          <span className="inline-block w-1/2 pl-1">원</span>
        </div>
      </div>
      <PrimaryButton>바로구매</PrimaryButton>
    </div>
  );
}
