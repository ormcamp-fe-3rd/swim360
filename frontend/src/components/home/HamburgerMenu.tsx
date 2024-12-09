import { useState } from "react"

export default function HamburgerMenu(){
  const[isOpen, setIsOpen] = useState(false)
  
  return (
    <div className="relative tablet:hidden">
      <button onClick={() => setIsOpen(!isOpen)}>
        <img
          className="h-6 w-6"
          src="/images/home/button-hamburger.png"
          alt=""
        />
      </button>
      {/* TODO: backdrop 효과 추가 */}
      <div className={`absolute ${isOpen ? "block" : "hidden"} -translate-x-10 top-20 z-10`}>
        <div className="h-[370px] w-screen bg-white">
          <ul className="flex h-full flex-col items-center">
            <li className="flex h-1/4 w-full items-center justify-center font-semibold shadow-sm">
              WOMAN
            </li>
            <li className="flex h-1/4 w-full items-center justify-center font-semibold">
              MAN
            </li>
            <li className="flex h-1/4 w-full items-center justify-center font-semibold">
              ACC
            </li>
            <li className="flex h-1/4 w-full items-center justify-center font-semibold">
              MY PAGE
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}