import useCart from "@/hooks/useCart";
import BreadcrumbCustom from "../common/BreadcrumbCustom";
import CartProductList from "./CartProductList";
import CartTotalPrice from "./CartTotalPrice";

export default function Cart() {
  const {
    cartListData,
    cartTotalPrice,
    cartTotalQuantity,
    selectedCartItems,
    selectedCartIds,
    handleSelectedCartUpdate,
    handleSelectAllCartItems,
  } = useCart();

  const cartProductListProps = {
    selectedCartIds,
    cartListData,
    cartTotalQuantity,
    handleSelectedCartUpdate,
    handleSelectAllCartItems,
  };

  const cartTotalPriceProps = {
    selectedCartIds,
    selectedItems: selectedCartItems,
    totalQuantity: cartTotalQuantity,
    totalPrice: cartTotalPrice,
  };

  return (
    <div className="mx-auto w-[90%] max-w-[1440px]">
      <BreadcrumbCustom name="장바구니" />
      <div className="grid w-full flex-wrap gap-0 middle:flex">
        <form action="#" className="mb-10 middle:w-2/3">
          <CartProductList {...cartProductListProps} />
        </form>
        <CartTotalPrice {...cartTotalPriceProps} />
      </div>
    </div>
  );
}
