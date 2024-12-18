import { useContext } from "react";
import { Link } from "react-router-dom";

import { IsLoginContext } from "@/contexts/IsLoginContext";
import useCart from "@/hooks/useCart";

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
  const isLogin = useContext(IsLoginContext);
  const id = sessionStorage.getItem("id");

  return (
    <div className="flex justify-around tablet:w-[190px]">
      <button>
        <Link to={isLogin ? "/mypage/" + id : "/login"}>
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
        <Link to="/cart">
          {cartCount > 0 && (
            <div className="absolute left-5 flex h-4 w-4 items-center justify-center rounded-full bg-red-600 text-sm text-white">
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
