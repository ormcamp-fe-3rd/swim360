import { useContext } from "react";
import { CartContext } from "@/contexts/CartContext";

function useCart() {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error("useCart는 CartProvider 내부에서만 작동해야합니다");
  }

  const { cartCount, setCartCount } = context;

  const updateCartCount = () => {
    setCartCount((prev) => prev + 1);

    // TODO: API 호출로 DB 업데이트
    // TODO: 에러 처리 추가
    // FIXME: 중복 체크 로직 필요 (productId 사용)
  };

  return { cartCount, updateCartCount };
}
export default useCart;
