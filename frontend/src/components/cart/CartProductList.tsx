import { Checkbox } from "../ui/checkbox";
import CartProduct from "./CartProduct";

const productDummyArray = [
  {
    id: 0,
    brandName: "barrel",
    name: "여성 수영복 1",
    imageUrl: "/public/images/productlist/sample-1.png",
    price: 10000,
    discountedPrice: 5000,
    salesVolume: 50,
    size: "28",
    stock: 100,
    categoryId: 4,
    discountId: 0,
  },
  {
    id: 1,
    brandName: "barrel",
    name: "여성 수영복 1",
    imageUrl: "/public/images/productlist/sample-1.png",
    price: 10000,
    discountedPrice: 5000,
    salesVolume: 50,
    size: "28",
    stock: 100,
    categoryId: 4,
    discountId: 0,
  },
  {
    id: 2,
    brandName: "barrel",
    name: "여성 수영복 1",
    imageUrl: "/public/images/productlist/sample-1.png",
    price: 10000,
    discountedPrice: 5000,
    salesVolume: 50,
    size: "28",
    stock: 100,
    categoryId: 4,
    discountId: 0,
  },
  {
    id: 3,
    brandName: "barrel",
    name: "여성 수영복 1",
    imageUrl: "/public/images/productlist/sample-1.png",
    price: 10000,
    discountedPrice: 5000,
    salesVolume: 50,
    size: "28",
    stock: 100,
    categoryId: 4,
    discountId: 0,
  },
  {
    id: 4,
    brandName: "barrel",
    name: "여성 수영복 1",
    imageUrl: "/public/images/productlist/sample-1.png",
    price: 10000,
    discountedPrice: 5000,
    salesVolume: 50,
    size: "28",
    stock: 100,
    categoryId: 4,
    discountId: 0,
  },
];

export default function CartProductList() {
  return (
    <div className="border-b border-black py-2.5">
      <p className="w-full border-b border-black p-2.5 font-bold">
        {/* TODO: 총 상품 개수를 체크박스 선택된 상품의 개수로 변경 */}
        총 상품(<span>{productDummyArray.length}</span>)
      </p>
      <div className="w-full border-b p-2.5">
        <span className="inline-block w-1/3 text-center">
          <div className="flex w-full items-center">
            <Checkbox />
            <span className="w-full">상품정보</span>
          </div>
        </span>
        <span className="inline-block w-1/3 text-right">수량</span>
        <span className="inline-block w-1/3 text-right">가격</span>
      </div>

      {productDummyArray.map((product) => (
        <CartProduct key={product.id} product={product} />
      ))}
    </div>
  );
}
