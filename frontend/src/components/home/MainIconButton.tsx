import { Link } from "react-router-dom";

import useCart from "@/hooks/useCart";
import { useUserId } from "@/hooks/useUserId";

const myPageIcon = {
  imgUrl: "/images/common/icon-mypage.png",
  name: "마이페이지",
  url: "/mypage",
};

const cartIcon = {
  imgUrl: "/images/common/icon-cart.png",
  name: "장바구니",
};

export default function MainIconButton() {
  const { cartCount } = useCart();
  const { userId } = useUserId();

  return (
    <div className="flex justify-around tablet:w-[190px]">
      <button>
        <Link to={userId ? "/mypage" : "/login"}>
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
        <Link to={userId ? "/cart" : "/login"}>
          {cartCount > 0 && (
            <div className="absolute left-5 top-1 flex h-3 w-3 items-center justify-center rounded-full bg-red-600 text-[8px] text-white">
              {cartCount > 99 ? "99" : cartCount}
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
