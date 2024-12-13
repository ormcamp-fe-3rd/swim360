import { Link } from "react-router-dom"

interface Props{
  url: string,
  children: React.ReactNode
}

export default function HamburgerMenuList({url, children}: Props){
  return(<>
    <li className="flex h-1/4 w-full shadow-sm">
      <Link
        to={url}
        className="flex h-full w-full items-center justify-center font-semibold"
      >
        {children}
      </Link>
    </li>
  </>)
}