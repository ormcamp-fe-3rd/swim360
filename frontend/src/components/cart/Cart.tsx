import BreadcrumbCustom from "../common/BreadcrumbCustom";
import CartProductList from "./CartProductList";
import CartTotalPrice from "./CartTotalPrice";

export default function Cart() {
  return (
    <>
      <div className="mx-auto w-[90%] max-w-[1440px]">
        <BreadcrumbCustom name="장바구니" />
        <div className="middle:flex grid min-w-[475px] flex-wrap gap-0">
          <form action="#" className="middle:w-2/3 mb-10">
            <CartProductList />
          </form>
          <CartTotalPrice />
        </div>
      </div>
    </>
  );
}
