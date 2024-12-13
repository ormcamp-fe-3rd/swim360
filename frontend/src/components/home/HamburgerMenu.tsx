import HamburgerMenuList from "./HamburgerMenuList";

interface Prop {
  isOpen: boolean;
  toggleMenu: () => void;
}

export default function HamburgerMenu({ isOpen, toggleMenu }: Prop) {
  // const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative tablet:hidden">
      <button onClick={toggleMenu}>
        <img
          className="h-6 w-6"
          src="/images/home/button-hamburger.png"
          alt="햄버거 메뉴"
        />
      </button>
      <div
        className={`${isOpen ? "block" : "hidden"} fixed inset-0 top-[190px] z-10 backdrop-brightness-50`}
        onClick={toggleMenu}
      >
        <div className="h-full w-full">
          <ul className="flex h-[420px] flex-col items-center bg-white">
            <HamburgerMenuList url="/product_list/one-piece">WOMAN</HamburgerMenuList>
            <HamburgerMenuList url="/product_list/mid-length">MAN</HamburgerMenuList>
            <HamburgerMenuList url="/product_list/bag">ACC</HamburgerMenuList>
            <HamburgerMenuList url="/mypage">MY PAGE</HamburgerMenuList>
          </ul>
        </div>
      </div>
    </div>
  );
}
