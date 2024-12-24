import useProduct from "@/hooks/useProduct";
import { formatPrice } from "@/utils/formatPrice";

export interface SelectedProps {
  selectedSize: string; // 사이즈는 문자열로 받기 (예: "S", "M", "L")
  count: number;
  increaseSizeCount: (size: string) => void;
  decreaseSizeCount: (size: string) => void;
}

export function Selected({
  selectedSize,
  count,
  increaseSizeCount,
  decreaseSizeCount,
}: SelectedProps) {
  const { product } = useProduct();

  // 수량과 가격을 곱하여 총 가격 계산
  const totalPrice = count * (product?.discountedPrice || 0);

  return (
    <div className="items-between mb-1 flex h-[50px] w-full min-w-[522px] justify-between bg-[#EDEDED] p-4">
      <p className="w-[174px]">{selectedSize}</p> {/* 사이즈 표시 */}
      <div className="flex h-[20px] w-fit items-center justify-between gap-3 rounded-[12px] border-[1px] border-black px-4">
        <button onClick={() => decreaseSizeCount(selectedSize)}>
          <img className="w-6" src="/public/images/product/icon-minus.png" />
        </button>
        <p className="w-5 text-center">{count}</p> {/* 수량 표시 */}
        <button onClick={() => increaseSizeCount(selectedSize)}>
          <img className="w-6" src="/public/images/product/icon-add.png" />
        </button>
      </div>
      <p className="flex w-[174px] justify-end">{formatPrice(totalPrice)}원</p>{" "}
      {/* 총 가격 표시 */}
    </div>
  );
}
