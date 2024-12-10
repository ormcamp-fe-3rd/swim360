interface Props{
  name: string,
  img: string,
  alt: string,
  url: string
}


export default function CategoryHoberList({name, img, alt, url}: Props){
  return (
    <>
      <a href={url}>
        <img src={img} alt={alt} className="rounded-xl hover:bg-gray-100" />
        <p className="pt-2 text-center text-xs font-normal">{name}</p>
      </a>
      {/* <div className="h-16 w-[1px] bg-gray-200"></div> */}
    </>
  );
}