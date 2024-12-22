import { useState } from "react";
import useProduct from "@/hooks/useProduct";

export interface SelectedProps {
  selectedSize: string; // 사이즈는 문자열로 받기 (예: "S", "M", "L")
}

export function Selected({ selectedSize }: SelectedProps) {
  const { product } = useProduct();
  const [count, setCount] = useState(1); // 수량 상태

  // 수량 증가 함수
  const increaseCount = () => {
    setCount(count + 1);
  };

  // 수량 감소 함수
  const decreaseCount = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  if (count == 0) {
    return null;
  }

  // 수량과 가격을 곱하여 총 가격 계산
  const totalPrice = count * (product?.discountedPrice || 0);

  return (
    <div className="items-between mb-1 flex h-[50px] w-full min-w-[522px] justify-between bg-[#EDEDED] p-4">
      <p className="w-[174px]">{selectedSize}</p> {/* 사이즈 표시 */}
      <div className="flex h-[20px] w-fit items-center justify-between gap-3 rounded-[12px] border-[1px] border-black px-4">
        <button onClick={decreaseCount}>
          <img className="w-6" src="/public/images/product/icon-minus.png" />
        </button>
        <p className="w-5 text-center">{count}</p> {/* 수량 표시 */}
        <button onClick={increaseCount}>
          <img className="w-6" src="/public/images/product/icon-add.png" />
        </button>
      </div>
      <p className="flex w-[174px] justify-end">{totalPrice}원</p>{" "}
      {/* 총 가격 표시 */}
    </div>
  );
}
