import CategoryBox from "../home/CategoryBox";
import HamburgerMenu from "../home/HamburgerMenu";
import MainIconButton from "../home/MainIconButton";
import MainLogo from "../home/MainLogo";
import ScrollButton from "../home/ScrollButton";
import useCategory from "@/hooks/useCategory";
import useToggle from "@/hooks/useToggle";

function Header() {
  const {
    currentCategoryId,
    handleCurrentCategoryChange,
    getParentCategories,
    getFirstChildCategory,
    getChildCategories,
  } = useCategory();

  const { isOpen, handleUIToggle } = useToggle();

  const HamburgerMenuProps = {
    isOpen,
    handleUIToggle,
    handleCurrentCategoryChange,
    getParentCategories,
    getFirstChildCategory,
  };

  const categoryBoxProps = {
    currentCategoryId,
    handleCurrentCategoryChange,
    getParentCategories,
    getFirstChildCategory,
    getChildCategories,
  };

  return (
    <header
      className={`w-full justify-center ${isOpen ? "fixed z-10 bg-white" : "flex bg-none"}`}
    >
      <nav className="flex h-[190px] w-full items-center justify-between px-10 pt-6 desktop:w-[1440px]">
        <HamburgerMenu {...HamburgerMenuProps} />
        <MainLogo />
        <CategoryBox {...categoryBoxProps} />
        <MainIconButton />
      </nav>
      <ScrollButton />
    </header>
  );
}

export default Header;
