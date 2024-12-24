import { useContext, useEffect, useMemo, useState } from "react";
import { CartContext } from "@/contexts/CartContext";
import { getCartCount, getCartListData, updateCartData } from "@/services/cart";
import { Cart, CartItem } from "@/types/cart";
import { useNavigate } from "react-router-dom";
import { SelectedOrderItem } from "@/types/orders";

function useCart() {
  const context = useContext(CartContext);

  const userId = Number(sessionStorage.getItem("id"));

  if (!context) {
    throw new Error("context가 Provider 외부에 존재하고 있습니다.");
  }

  const { cartCount, setCartCount } = context;

  const [cartListData, setCartListData] = useState<CartItem[]>([]);

  const [updateCartTrigger, setUpdateCartTrigger] = useState(0);

  const [selectedCartItems, setSelectedCartItems] = useState<
    Set<SelectedOrderItem>
  >(new Set());

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
      if (!userId) {
        setCartCount(0);
        return;
      }

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

  const handleCartUpdate = async (cartItems: Cart[], totalQuantity: number) => {
    const prevCount = cartCount;

    try {
      if (!userId) {
        navigate("/login");
        return;
      }

      const response = await updateCartData(cartItems);

      if (response?.status === 200) {
        setCartCount((prev) => prev + totalQuantity);
        setUpdateCartTrigger((prev) => prev + 1);
        alert("장바구니에 선택한 상품이 담겼습니다.");
      } else {
        setCartCount(prevCount);
        alert("선택한 상품을 담는 중 오류가 생겼습니다.");
      }
    } catch (error) {
      setCartCount(prevCount);
      console.log(error);
    }
  };

  const handleSelectedCartUpdate = (
    selectedCartItem: SelectedOrderItem,
    isChecked: boolean,
  ) => {
    setSelectedCartItems((prev) => {
      const newSet = new Set(prev);
      if (isChecked) {
        newSet.add(selectedCartItem);
      } else {
        const cartItem = Array.from(newSet).find(
          (item) =>
            item.productId === selectedCartItem.productId &&
            item.size === selectedCartItem.size,
        );
        if (cartItem) newSet.delete(cartItem);
      }
      return newSet;
    });
  };

  const cartTotalPrice = useMemo(
    () =>
      Array.from(selectedCartItems).reduce((acc, item) => acc + item.price, 0),
    [selectedCartItems],
  );

  const cartTotalQuantity = useMemo(
    () =>
      Array.from(selectedCartItems).reduce(
        (acc, item) => acc + item.quantity,
        0,
      ),
    [selectedCartItems],
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
    cartTotalQuantity,
    selectedCartItems: Array.from(selectedCartItems),
    handleSelectedCartUpdate,
  };
}
export default useCart;
