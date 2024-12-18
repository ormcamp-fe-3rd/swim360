import { useContext } from "react";
import { CartContext } from "@/contexts/CartContext";
import { updateCartData } from "@/services/cart";

function useCart() {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error("useCart는 CartProvider 내부에서만 작동해야합니다");
  }

  const { cartCount, setCartCount } = context;

  const handleCartUpdate = async ({}) => {
    setCartCount((prev) => prev + 1);

    // TODO: API 호출로 DB 업데이트
    // TODO: 에러 처리 추가
    // FIXME: 중복 체크 로직 필요 (productId 사용)

    // test data
    const cartItem = {
      userId: 1,
      productId: 1,
      price: 20000,
      quantity: 2,
    };

    try {
      await updateCartData(cartItem);
    } catch (err) {
      console.log(err);
    }
  };

  return { cartCount, handleCartUpdate };
}
export default useCart;
