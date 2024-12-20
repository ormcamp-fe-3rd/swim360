import { useContext, useEffect, useState } from "react";
import { CartContext } from "@/contexts/CartContext";
import { getCartCount, getCartList, updateCartData } from "@/services/cart";
import { Cart } from "@/types/cart";

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

  const [cartList, setCartList] = useState<Cart[]>([]);

  const handleCartListFetch = async () => {
    try {
      const fetchedCartList = await getCartList(user.userId);
      console.log(fetchedCartList);

      setCartList(fetchedCartList);
    } catch (error) {
      console.log(error);
    }
  };

  const handleCartCountFetch = async () => {
    try {
      const fetchedCartCount = await getCartCount(user.userId);
      setCartCount(fetchedCartCount);
    } catch (error) {
      console.log(error);
    }
  };

  const handleCartUpdate = async () => {
    const prevCount = cartCount;

    try {
      await updateCartData(cartItem);
      setCartCount((prev) => prev + cartItem.quantity);
    } catch (error) {
      setCartCount(prevCount);
      console.log(error);
    }
  };

  useEffect(() => {
    handleCartListFetch();
  }, []);

  useEffect(() => {
    handleCartCountFetch();
  }, [cartCount]);

  return { cartList, cartCount, handleCartListFetch, handleCartUpdate };
}
export default useCart;
