import { useContext, useEffect } from "react";
import { CartContext } from "@/contexts/CartContext";
import { getCartCount, updateCartData } from "@/services/cart";

// 더미 데이터
const cartItem = {
  userId: 1,
  productId: 4,
  price: 23000 * 3,
  quantity: 2,
};

const user = {
  userId: 1,
};

function useCart() {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error("context가 Provider 외부에 존재하고 있습니다.");
  }

  const { cartCount, setCartCount } = context;

  const handleCartCountFetch = async () => {
    try {
      const dbCartCount = await getCartCount(user.userId);
      setCartCount(dbCartCount);
      return;
    } catch (err) {
      console.log(err);
    }
  };

  const handleCartUpdate = async () => {
    const prevCount = cartCount;

    try {
      await updateCartData(cartItem);
      setCartCount((prev) => prev + cartItem.quantity);
    } catch (err) {
      setCartCount(prevCount);
      console.log(err);
    }
  };

  useEffect(() => {
    handleCartCountFetch();
  }, [cartCount]);

  return { cartCount, handleCartUpdate };
}
export default useCart;
