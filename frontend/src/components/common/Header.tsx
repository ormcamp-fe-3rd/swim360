import CategoryBox from "../home/CategoryBox";
import HamburgerMenu from "../home/HamburgerMenu";
import MainIconButton from "../home/MainIconButton";
import MainLogo from "../home/MainLogo";
import ScrollButton from "../home/ScrollButton";

function Header() {
  return (
    <header className="flex justify-center">
      <nav className="pt-6 flex h-[190px] w-full items-center justify-between px-10 desktop:w-[1440px]">
        <HamburgerMenu />
        <MainLogo />
        <CategoryBox />
        <MainIconButton />
      </nav>
      <ScrollButton />
    </header>
  );
}

export default Header;
