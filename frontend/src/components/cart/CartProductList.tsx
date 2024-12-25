import { Cart, CartItem } from "@/types/cart";
import { Checkbox } from "../ui/checkbox";
import CartProduct from "./CartProduct";
import { SelectedOrderItem } from "@/types/orders";
import { deleteOrderedCart } from "@/services/cart";
import { useNavigate } from "react-router-dom";

interface CartProductListProps {
  cartTotalQuantity: number;
  cartListData: CartItem[];
  selectedCartIds: Set<number | undefined>;
  handleSelectedCartUpdate: (
    selectedCartItem: SelectedOrderItem,
    isChecked: boolean,
    selectedCartId: Cart["id"],
  ) => void;
  handleSelectAllCartItems: (isChecked: boolean) => void;
}

export default function CartProductList({
  cartTotalQuantity,
  cartListData,
  selectedCartIds,
  handleSelectedCartUpdate,
  handleSelectAllCartItems,
}: CartProductListProps) {
  const navigate = useNavigate();

  const handleSelectedCartDelete = async (
    selectedCartIds: Set<number | undefined>,
  ) => {
    try {
      const cartIds = Array.from(selectedCartIds);
      if (cartIds?.length === 0) {
        alert("삭제할 상품을 선택해주세요.");
        return;
      }

      const okSelected = confirm("선택한 상품이 장바구니에서 제거됩니다.");

      if (okSelected) {
        const response = await deleteOrderedCart(cartIds);
        if (response?.status === 200) {
          navigate(0);
        }
      }
      return;
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="border-b border-black py-2.5">
      <div className="flex items-center justify-between border-b border-black">
        <p className="w-full p-2.5 font-bold">
          총 상품(
          <span>{cartTotalQuantity}</span>)
        </p>
        <button
          onClick={() => handleSelectedCartDelete(selectedCartIds)}
          type="button"
          className="text-nowrap rounded-lg border border-gray-300 px-2 py-1 text-gray-700"
        >
          선택 삭제
        </button>
      </div>
      <div className="w-full border-b p-2.5">
        <span className="inline-block w-1/3 text-center">
          <div className="flex w-full items-center">
            <Checkbox
              checked={
                cartListData.length > 0 &&
                selectedCartIds.size === cartListData.length
              }
              onCheckedChange={handleSelectAllCartItems}
            />
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
            isChecked={selectedCartIds.has(cartItem.id)}
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
