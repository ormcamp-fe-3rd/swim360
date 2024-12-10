import ProductItem from "../product-list/ProductItem";
import { CarouselBestPick } from "./CarouselBestpick";

const productDummyArray = [
    {
      id: 0,
      name: "여성 수영복 1",
      imgUrl: "/public/images/productlist/sample-1.png",
      price: 10000,
      discountedPrice: 5000,
      salesVolume: 50,
    },
    {
      id: 1,
      name: "여성 수영복 1",
      imgUrl: "/public/images/productlist/sample-1.png",
      price: 10000,
      discountedPrice: 5000,
      salesVolume: 50,
    },
    {
      id: 2,
      name: "여성 수영복 1",
      imgUrl: "/public/images/productlist/sample-1.png",
      price: 10000,
      discountedPrice: 5000,
      salesVolume: 50,
    },
    {
      id: 3,
      name: "여성 수영복 1",
      imgUrl: "/public/images/productlist/sample-1.png",
      price: 10000,
      discountedPrice: 5000,
      salesVolume: 50,
    },
  ]

export default function BestPick(){
  return (
    <section className="h-full w-full px-20 desktop:h-[845px] desktop:w-[1440px]">
      <div className="text-center text-[26px] font-semibold">BEST PICK</div>
      <div className="mt-12 flex flex-col justify-center gap-12 tablet:flex-row tablet:h-[744px] h-full">
        <CarouselBestPick />
        <div className="grid w-full grid-cols-2 h-full gap-7 tablet:w-1/3">
          {productDummyArray.map((product) => (
            <ProductItem key={product.id} {...product} /> // 데이터 불러오면 [product.id로]
          ))}
        </div>
      </div>
    </section>
  );
}