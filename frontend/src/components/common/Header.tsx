import { useState } from "react";

import CategoryBox from "../home/CategoryBox";
import HamburgerMenu from "../home/HamburgerMenu";
import MainIconButton from "../home/MainIconButton";
import MainLogo from "../home/MainLogo";
import ScrollButton from "../home/ScrollButton";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header
      className={`w-full justify-center ${isOpen ? "fixed z-10 bg-white" : "flex bg-none"}`}
    >
      <nav className="flex h-[190px] w-full items-center justify-between px-10 pt-6 desktop:w-[1440px]">
        <HamburgerMenu isOpen={isOpen} toggleMenu={toggleMenu} />
        <MainLogo />
        <CategoryBox />
        <MainIconButton />
      </nav>
      <ScrollButton />
    </header>
  );
}

export default Header;
