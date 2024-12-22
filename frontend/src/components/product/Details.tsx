import { Link } from "react-router-dom";

import { Product } from "@/types/products";

import { Selected } from "./SelectedItem";
import { SizeButton } from "./SizeBtn";

interface DetailsProps {
  product: Product;
  handleCartUpdate: () => void;
}
function Details({ product, handleCartUpdate }: DetailsProps) {
  return (
    <div className="h-auto w-full max-w-[522px] flex-col">
      <p className="w-[522px] text-[18px] font-semibold">{product.name}</p>
      {/*  <p className="w-[522px] text-sm font-extralight">{product.description}</p>*/}
      <div className="flex w-[522px] gap-[10px]">
        <p className="text-base font-medium">정상가</p>
        <p className="text-sm font-extralight">{product.price}원</p>
      </div>
      <div className="flex w-[522px] gap-[10px]">
        <p className="text-base font-medium">할인가</p>
        <p className="text-base font-bold text-[#D40022]">
          {product.discountedPrice}원
        </p>
        <p className="text-base font-bold text-[#D40022]">
          {product.salesVolume}%
        </p>
      </div>
      <div className="flex w-[522px] gap-[10px]">
        <p className="text-sm text-[#B0B0B0]">무료 배송</p>
      </div>

      <div className="mb-5 h-[88px] w-[522px] flex-col justify-between border-t-[1px] border-black pt-5">
        <p className="mb-2 text-base">사이즈</p>
        <div className="mb-5 flex gap-1">
          <SizeButton size={"S"} />
          <SizeButton size={"M"} />
          <SizeButton size={"L"} />
          <SizeButton size={"XL"} />
        </div>
      </div>

      <div>
        <Selected selectedSize={""} />
      </div>

      <div>
        <div className="mb-[10px] mt-10 flex w-[522px] justify-end">
          <p className="text-[16px] font-semibold">총 상품 금액: </p>
          <p className="text-[16px] font-semibold">원</p>
        </div>

        <div className="h-auto w-[522px]">
          <div className="w-full max-w-[522px]">
            <button
              onClick={handleCartUpdate}
              className="mr-3 mt-4 h-[70px] w-full max-w-[522px] rounded-2xl border-[1px] text-black"
            >
              장바구니 담기
            </button>
          </div>
          <Link
            to="/paymentorder"
            state={{
              product_id: product.id,
              name: product.name,
              description: product.description,
              totalQuantity: 5,
              totalPrice: 2000000,
              discountedPrice: product.price,
              // size: product.selectedSize,
              // quantity: product.selectedTotal || 1,
              // totalPrice: product.total,
            }}
            className="w-full max-w-[522px]"
          >
            <button className="my-2 h-[70px] w-full max-w-[522px] rounded-2xl bg-black text-white">
              바로 구매
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Details;
