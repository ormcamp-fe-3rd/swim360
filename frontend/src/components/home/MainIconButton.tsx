import useCart from "@/hooks/useCart";
import { Link } from "react-router-dom";

const myPageIcon = {
  imgUrl: "/images/common/icon-mypage.png",
  name: "마이페이지",
  url: "/mypage",
};

const cartIcon = {
  imgUrl: "/images/common/icon-cart.png",
  name: "장바구니",
  url: "/cart",
};

export default function MainIconButton() {
  const { cartCount } = useCart();

  return (
    <div className="flex justify-around tablet:w-[190px]">
      <button>
        <Link to={myPageIcon.url}>
          <img
            className="hidden h-8 w-8 tablet:block"
            src={myPageIcon.imgUrl}
            alt={myPageIcon.name}
            role="link"
            tabIndex={0}
          />
        </Link>
      </button>

      <button className="relative">
        <Link to={cartIcon.url}>
          {cartCount > 0 && (
            <div className="absolute left-5 flex h-4 w-4 items-center justify-center rounded-full bg-red-600 text-xs text-white">
              {cartCount}
            </div>
          )}
          <img
            className="h-8 w-8"
            src={cartIcon.imgUrl}
            alt={cartIcon.name}
            role="link"
            tabIndex={0}
          />
        </Link>
      </button>
    </div>
  );
}
