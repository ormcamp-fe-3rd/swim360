import { Cart, CartItem } from "@/types/cart";
import { Checkbox } from "../ui/checkbox";
import CartProduct from "./CartProduct";
import { SelectedOrderItem } from "@/types/orders";

interface CartProductListProps {
  cartTotalQuantity: number;
  cartListData: CartItem[];
  handleSelectedCartUpdate: (
    selectedCartItem: SelectedOrderItem,
    isChecked: boolean,
    selectedCartId: Cart["id"],
  ) => void;
}

export default function CartProductList({
  cartTotalQuantity,
  cartListData,
  handleSelectedCartUpdate,
}: CartProductListProps) {
  return (
    <div className="border-b border-black py-2.5">
      <p className="w-full border-b border-black p-2.5 font-bold">
        총 상품(
        <span>{cartTotalQuantity}</span>)
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

      {cartListData.length > 0 ? (
        cartListData.map((cartItem, index) => (
          <CartProduct
            key={index}
            cartId={cartItem.id}
            productId={cartItem.Product.id}
            brandName={cartItem.Product.brandName}
            name={cartItem.Product.name}
            description={cartItem.Product.description}
            imageUrl={cartItem.Product.imageUrl}
            size={cartItem.size}
            eachPrice={cartItem.Product.price}
            price={cartItem.price}
            quantity={cartItem.quantity}
            handleSelectedCartUpdate={handleSelectedCartUpdate}
          />
        ))
      ) : (
        <div className="flex items-center justify-center">
          아직 장바구니에 담긴 상품이 없습니다.
        </div>
      )}
    </div>
  );
}
