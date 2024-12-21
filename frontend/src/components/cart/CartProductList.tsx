import { CartItem } from "@/types/cart";
import { Checkbox } from "../ui/checkbox";
import CartProduct from "./CartProduct";

interface CartProductListProps {
  cartListData: CartItem[];
}

export default function CartProductList({
  cartListData,
}: CartProductListProps) {
  return (
    <div className="border-b border-black py-2.5">
      <p className="w-full border-b border-black p-2.5 font-bold">
        {/* TODO: 총 상품 개수를 체크박스 선택된 상품의 개수로 변경 */}총 상품(
        <span>{cartListData.length}</span>)
      </p>
      <div className="w-full border-b p-2.5">
        <span className="inline-block w-1/3 text-center">
          <div className="flex w-full items-center">
            <Checkbox />
            <span className="w-full">상품정보</span>
          </div>
        </span>
        <span className="inline-block w-1/3 text-right">수량</span>
        <span className="inline-block w-1/3 text-right">가격</span>
      </div>

      {cartListData.map((cartItem, index) => (
        <CartProduct
          key={index}
          selectedSize={cartItem.size}
          quantity={cartItem.quantity}
          {...cartItem.Product}
        />
      ))}
    </div>
  );
}
