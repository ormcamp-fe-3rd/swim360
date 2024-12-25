import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@radix-ui/react-tooltip";
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
      <TooltipProvider delayDuration={200}>
        <Tooltip>
          <TooltipTrigger>
            <Link to={userId ? "/mypage" : "/login"}>
              <img
                className="hidden h-8 w-8 tablet:block"
                src={myPageIcon.imgUrl}
                alt={myPageIcon.name}
                role="link"
                tabIndex={0}
              />
            </Link>
          </TooltipTrigger>
          <TooltipContent side="bottom">
            <div className="flex h-10 w-20 items-center justify-center rounded-lg shadow-md">
              <p className="text-sm">My Page</p>
            </div>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>

      <TooltipProvider delayDuration={200}>
        <Tooltip>
          <TooltipTrigger>
            <Link to={userId ? "/cart" : "/login"} className="relative">
              {cartCount > 0 && (
                <div className="absolute left-[5px] top-1 flex h-3 w-3 items-center justify-center rounded-full bg-red-600 text-[8px] text-white">
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
          </TooltipTrigger>
          <TooltipContent side="bottom">
            <div className="flex h-10 w-20 items-center justify-center rounded-lg shadow-md">
              <p className="text-sm">Cart</p>
            </div>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </div>
  );
}
