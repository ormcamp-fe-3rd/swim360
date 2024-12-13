import { Link } from "react-router-dom";

interface Props{
  name: string,
  img: string,
  alt: string,
}


export default function CategoryHoberList({name, img, alt}: Props){
  return (
    <>
    <Link to={"/product_list/"+name}>
      <img src={img} alt={alt} className="rounded-xl hover:bg-gray-100" />
      <p className="pt-2 text-center text-xs font-normal">{name}</p>
    </Link>
    </>
  );
}