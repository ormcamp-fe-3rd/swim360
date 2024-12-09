import CategoryBox from "./categoryBox";
import MainIconButton from "./mainIconButton";
import MainLogo from "./mainLogo";

const imgUrl: string = "/images/common/logo.png";
const homeUrl :string = "/"

const myPageIcon = {
  imgUrl : "/images/common/icon-mypage.png",
  name : "마이페이지",
  url: "/"
};

const cartIcon = {
  imgUrl: "/images/common/icon-cart.png",
  name: "장바구니",
  url: "/",
};

function NavigationMenu() {
  return (
    <nav className="mx-auto mt-6 flex h-[190px] w-10/12 items-center justify-between desktop:w-[1280px]">
      <MainLogo imgUrl={imgUrl} homeUrl={homeUrl} />
      <CategoryBox />
      <div className="flex w-[190px] justify-end gap-[38px]">
        <MainIconButton
          imgUrl={myPageIcon.imgUrl}
          name={myPageIcon.name}
          url={myPageIcon.url}
        />
        <MainIconButton 
          imgUrl={cartIcon.imgUrl} 
          name={cartIcon.name} 
          url={cartIcon.url}
        />
      </div>
    </nav>
  );
}

export default NavigationMenu;
