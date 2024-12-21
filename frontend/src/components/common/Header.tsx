import { cn } from "@/lib/utils";
import CategoryBox from "../home/CategoryBox";
import HamburgerMenu from "../home/HamburgerMenu";
import MainIconButton from "../home/MainIconButton";
import MainLogo from "../home/MainLogo";
import ScrollButton from "../home/ScrollButton";
import useCategory from "@/hooks/useCategory";
import useToggle from "@/hooks/useToggle";

function Header() {
  const {
    currentParentCategoryId,
    handleCurrentCategoryChange,
    parentCategories,
    getFirstChildCategory,
    getChildCategories,
  } = useCategory();

  const { isOpen, handleUIToggle } = useToggle();

  const hamburgerMenuProps = {
    isOpen,
    handleUIToggle,
    handleCurrentCategoryChange,
    parentCategories,
    getFirstChildCategory,
  };

  const categoryBoxProps = {
    currentParentCategoryId,
    handleCurrentCategoryChange,
    parentCategories,
    getFirstChildCategory,
    getChildCategories,
  };

  return (
    <header
      className={cn(
        "w-full",
        isOpen ? "fixed z-10 bg-white" : "flex justify-center bg-none",
      )}
    >
      <nav className="flex h-[190px] w-full items-center justify-between px-10 pt-6 desktop:w-[1440px]">
        <HamburgerMenu {...hamburgerMenuProps} />
        <MainLogo />
        <CategoryBox {...categoryBoxProps} />
        <MainIconButton />
      </nav>
      <ScrollButton />
    </header>
  );
}

export default Header;
