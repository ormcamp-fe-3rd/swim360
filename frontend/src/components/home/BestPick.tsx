import ProductItem from "../product-list/ProductItem";
import { CarouselBestPick } from "./CarouselBestpick";

const productDummyArray = [
  {
    id: 0,
    brandName: "barrel",
    name: "여성 수영복 1",
    imgUrl: "/public/images/productlist/sample-1.png",
    price: 10000,
    discountedPrice: 5000,
    salesVolume: 50,
  },
  {
    id: 1,
    brandName: "barrel",
    name: "여성 수영복 1",
    imgUrl: "/public/images/productlist/sample-1.png",
    price: 10000,
    discountedPrice: 5000,
    salesVolume: 50,
  },
  {
    id: 2,
    brandName: "barrel",
    name: "여성 수영복 1",
    imgUrl: "/public/images/productlist/sample-1.png",
    price: 10000,
    discountedPrice: 5000,
    salesVolume: 50,
  },
  {
    id: 3,
    brandName: "barrel",
    name: "여성 수영복 1",
    imgUrl: "/public/images/productlist/sample-1.png",
    price: 10000,
    discountedPrice: 5000,
    salesVolume: 50,
  },
];

export default function BestPick(){
  return (
    <section className="flex h-full w-full flex-col items-center px-10 desktop:h-[845px] desktop:w-[1440px]">
      <div className="text-center text-[26px] font-semibold">BEST PICK</div>
      <div className="mt-10 h-full w-full gap-4 flex flex-col desktop:max-w-[1440px] tablet:flex-row">
        <div className="w-full lg:w-1/2">
          <CarouselBestPick />
        </div>
        <div className="grid grid-cols-2 grid-rows-2 lg:w-1/2 gap-4 w-full">
        {productDummyArray.map((product) => (
            <ProductItem key={product.id} {...product}/>
          ))}
        </div>
      </div>
    </section>
  );
}