import { useState } from "react";



export default function HamburgerMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative tablet:hidden">
      <button onClick={() => setIsOpen(!isOpen)}>
        <img
          className="h-6 w-6"
          src="/images/home/button-hamburger.png"
          alt="햄버거 메뉴"
          />
      </button>
      <div
        className={`${isOpen ? "block" : "hidden"} fixed top-[190px] z-10 inset-0 backdrop-brightness-50`}
      >
        <div className="h-full w-full">
          <ul className="flex h-[420px] flex-col items-center bg-white">
            <li className="flex h-1/4 w-full items-center justify-center font-semibold shadow-sm">
              WOMAN
            </li>
            <li className="flex h-1/4 w-full items-center justify-center font-semibold shadow-sm">
              MAN
            </li>
            <li className="flex h-1/4 w-full items-center justify-center font-semibold shadow-sm">
              ACC
            </li>
            <li className="flex h-1/4 w-full items-center justify-center font-semibold shadow-sm">
              MY PAGE
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
