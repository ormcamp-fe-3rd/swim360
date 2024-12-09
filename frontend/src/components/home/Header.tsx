import CategoryBox from "./CategoryBox";
import HamburgerMenu from "./HamburgerMenu";
import MainIconButton from "./MainIconButton";
import MainLogo from "./MainLogo";
import ScrollButton from "./ScrollButton";

const imgUrl: string = "/images/common/logo.png";
const homeUrl: string = "/";


function Header() {
  return (
    <header className="flex justify-center">
      <nav className="mt-6 flex h-[190px] w-full px-10 items-center justify-between desktop:w-[1440px]">
        <HamburgerMenu />
        <MainLogo imgUrl={imgUrl} homeUrl={homeUrl} />
        <CategoryBox />
        <MainIconButton />
      </nav>
      <ScrollButton />
    </header>
  );
}

export default Header;
