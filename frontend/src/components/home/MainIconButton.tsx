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
  return (
    <div className="flex tablet:w-[190px] justify-around">
      <button>
        <Link to={myPageIcon.url}>
        <img
          className="h-8 w-8 hidden tablet:block"
          src={myPageIcon.imgUrl}
          alt={myPageIcon.name}
          role="link"
          tabIndex={0}
          />
          </Link>
      </button>
      <button>
        <Link to={cartIcon.url}>
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
