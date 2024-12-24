import { useContext, useEffect, useMemo, useState } from "react";
import { CartContext } from "@/contexts/CartContext";
import { getCartCount, getCartListData, updateCartData } from "@/services/cart";
import { Cart, CartItem } from "@/types/cart";
import { useNavigate } from "react-router-dom";

function useCart() {
  const context = useContext(CartContext);

  const userId = Number(sessionStorage.getItem("id"));

  if (!context) {
    throw new Error("context가 Provider 외부에 존재하고 있습니다.");
  }

  const { cartCount, setCartCount } = context;

  const [cartListData, setCartListData] = useState<CartItem[]>([]);

  const [updateCartTrigger, setUpdateCartTrigger] = useState(0);

  const navigate = useNavigate();

  const handleCartListDataFetch = async () => {
    try {
      if (!userId) return;

      const fetchedCartListData = await getCartListData(userId);

      if (!fetchedCartListData || fetchedCartListData.length === 0) {
        setCartListData([]);
        return;
      } else {
        setCartListData(fetchedCartListData);
      }
    } catch (error) {}
  };

  const handleCartCountFetch = async () => {
    try {
      if (!userId) return;

      const fetchedCartCount = await getCartCount(userId);
      if (!fetchedCartCount || fetchedCartCount === 0) {
        setCartCount(0);
      } else {
        setCartCount(fetchedCartCount);
      }
      setCartCount(fetchedCartCount);
    } catch (error) {
      console.log(error);
    }
  };

  const handleCartUpdate = async (cartItem: Cart) => {
    const prevCount = cartCount;

    try {
      if (!userId) {
        navigate("/login");
        return;
      }

      await updateCartData(cartItem);
      setCartCount((prev) => prev + cartItem.quantity);
      setUpdateCartTrigger((prev) => prev + 1);
    } catch (error) {
      setCartCount(prevCount);
      console.log(error);
    }
  };

  const cartTotalPrice = useMemo(
    () => cartListData?.reduce((acc, item) => acc + item.price, 0) ?? 0,
    [cartListData],
  );

  useEffect(() => {
    handleCartListDataFetch();
  }, []);

  useEffect(() => {
    handleCartCountFetch();
  }, [userId, updateCartTrigger]);

  return {
    cartListData,
    cartCount,
    handleCartListDataFetch,
    handleCartUpdate,
    cartTotalPrice,
  };
}
export default useCart;
