import CategoryBox from "./CategoryBox";
import HamburgerMenu from "./HamburgerMenu";
import MainIconButton from "./MainIconButton";
import MainLogo from "./MainLogo";
import ScrollButton from "./ScrollButton";

function Header() {
  return (
    <header className="flex justify-center">
      <nav className="mt-6 flex h-[190px] w-full items-center justify-between px-10 desktop:w-[1440px]">
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
