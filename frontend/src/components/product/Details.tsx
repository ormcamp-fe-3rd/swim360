import useCart from "@/hooks/useCart";
import { Link } from "react-router-dom";

interface DetailsProps {
  name: string;
  description: string;
  originalPrice: number;
  discountedPrice: number;
  discountRate: number;
  shippingFee: number;
  sizes: number[];
  selectedSize: number;
  selectedTotal: number;
  selectedTotalPrise: number;
  total: number;
}

function SizeButton({ size }: { size: number }) {
  return (
    <>
      <button className="flex h-[40px] w-[60px] items-center justify-center gap-3 rounded-xl border-[1px] border-black hover:bg-black hover:text-white">
        {size}
      </button>
    </>
  );
}

function Selected({
  selectedSize,
  selectedtotal,
  selectedTotalPrise,
}: {
  selectedSize: number;
  selectedtotal: number;
  selectedTotalPrise: number;
}) {
  return (
    <div className="mb-1 flex h-[50px] w-full min-w-[522px] items-center justify-between bg-[#EDEDED] p-4">
      <p>{selectedSize}</p>
      <div className="flex w-fit items-center justify-between gap-3 rounded-[12px] border-[1px] border-black px-4">
        <button>
          <img className="w-6" src="/public/images/product/icon-minus.png" />
        </button>
        <p className="w-5 text-center"> {selectedtotal} </p>
        <button>
          <img className="w-6" src="/public/images/product/icon-add.png" />
        </button>
      </div>
      <p>{selectedTotalPrise}원</p>
    </div>
  );
}


function Details({ product }: { product: DetailsProps }) {
  const { updateCartCount } = useCart();

  return (
    <div className="h-auto w-full max-w-[522px] flex-col">
      <p className="w-[522px] text-[18px] font-semibold">{product.name}</p>
      <p className="w-[522px] text-sm font-extralight">{product.description}</p>
      <div className="flex w-[522px] gap-[10px]">
        <p className="text-base font-medium">정상가</p>
        <p className="text-sm font-extralight">{product.originalPrice}원</p>
      </div>
      <div className="flex w-[522px] gap-[10px]">
        <p className="text-base font-medium">할인가</p>
        <p className="text-base font-bold text-[#D40022]">
          {product.discountedPrice}원
        </p>
        <p className="text-base font-bold text-[#D40022]">
          {product.discountRate}%
        </p>
      </div>
      <div className="flex w-[522px] gap-[10px]">
        <p className="text-sm text-[#B0B0B0]">배송료</p>
        <p className="text-sm text-[#B0B0B0]">{product.shippingFee}원</p>
      </div>

      <div className="mb-5 h-[88px] w-[522px] flex-col justify-between border-t-[1px] border-black pt-5">
        <p className="mb-2 text-base">사이즈</p>
        <div className="mb-5 flex gap-1">
          {product.sizes.map((size) => (
            <SizeButton key={size} size={size} />
          ))}
        </div>
      </div>

      <Selected
        selectedSize={product.selectedSize}
        selectedtotal={product.selectedTotal}
        selectedTotalPrise={product.selectedTotalPrise}
      />

      <div>
        <div className="mb-[10px] mt-10 flex w-[522px] justify-end">
          <p className="text-[16px] font-semibold">총 상품 금액: </p>
          <p className="text-[16px] font-semibold">{product.total}원</p>
        </div>


        <div className="h-auto w-[522px]">
          <Link to="/cart" className="w-full max-w-[522px]">
            <button  onClick={updateCartCount} className="mr-3 mt-4 h-[70px] w-full max-w-[522px] rounded-2xl border-[1px] text-black">
              장바구니 담기
            </button>
          </Link>
          <Link to="/order" className="w-full max-w-[522px]">
            <button className="my-2 h-[70px] w-full max-w-[522px] rounded-2xl bg-black text-white">
              바로 구매
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
function ProductPage() {
  // 임시 데이터 생성
  const mockProduct = {
    name: "피치피치 수영복",
    description: "피치피치 수영복은 편안하고 스타일리시합니다.",
    originalPrice: 100000,
    discountedPrice: 80000,
    discountRate: 20,
    shippingFee: 3000,
    sizes: [24, 26, 28, 30, 32],
    selectedSize: 26,
    selectedTotal: 3,
    selectedTotalPrise: 24000,
    total: 50000,
  };

  return (
    <div>
      {/* Details 컴포넌트에 mock 데이터를 전달 */}
      <Details product={mockProduct} />
    </div>
  );
}

export default ProductPage;
