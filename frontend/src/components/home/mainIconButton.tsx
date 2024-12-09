import { goToLinkClick, goToLinkKeyboard } from "@/utils/goToLink";

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
  return (
    <div className="flex tablet:w-[190px] justify-around">
      <button>
        <img
          className="h-8 w-8 hidden tablet:block"
          src={myPageIcon.imgUrl}
          alt={myPageIcon.name}
          role="link"
          tabIndex={0}
          onClick={() => goToLinkClick(myPageIcon.url)}
          onKeyDown={(event) => goToLinkKeyboard(event, myPageIcon.url)}
        />
      </button>
      <button>
        <img
          className="h-8 w-8"
          src={cartIcon.imgUrl}
          alt={cartIcon.name}
          role="link"
          tabIndex={0}
          onClick={() => goToLinkClick(cartIcon.url)}
          onKeyDown={(event) => goToLinkKeyboard(event, cartIcon.url)}
        />
      </button>
    </div>
  );
}
