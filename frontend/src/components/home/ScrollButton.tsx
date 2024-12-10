import { useEffect, useState } from "react";

export default function ScrollButton(){

  const[isScrolled, setIsScrolled] = useState(false)

  useEffect(()=> {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0)
    }
    window.addEventListener("scroll", handleScroll)
    return(()=> {
      window.removeEventListener("scroll", handleScroll)
    })
  }, [])

  const handleClick = () => {
    window.scrollTo({top: 0, behavior: "smooth"})
  }

  return (
    <button
      type="button"
      onClick={handleClick}
      aria-label="페이지 맨위로 이동"
      className={`fixed bottom-14 right-5 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-xl transition-all duration-200
        ${isScrolled ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2 pointer-events-none"}`}
      
    >
      <img src="/images/home/button-top.png" alt="" />
    </button>
  );
}