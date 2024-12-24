import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { Cart } from "@/types/cart";
import { ProductData } from "@/types/products";

import { Selected } from "./SelectedItem";
import { SizeButton } from "./SizeBtn";
import { SelectedOrderItem } from "@/types/orders";

interface DetailsProps {
  product: ProductData | undefined;
  handleCartUpdate: (cartItem: Cart) => Promise<void>;
}

function Details({ product, handleCartUpdate }: DetailsProps) {
  const navigate = useNavigate();

  const [sizeCountStatus, setSizeCountStatus] = useState<{
    [key: string]: number;
  }>({
    S: 0,
    M: 0,
    L: 0,
    XL: 0,
    FREE: 0,
  }); // 각 사이즈별 수량 상태 관리

  const [selectedSizes, setSelectedSizes] = useState<string[]>([]); // 선택된 사이즈 배열 상태

  const [selectedItems, setSelectedItems] = useState<SelectedOrderItem[]>([]);

  const updateSelectedItems = (size: string, count: number) => {
    if (!selectedSizes.includes(size)) {
      setSelectedItems((prev) => [
        ...prev,
        {
          productId: product?.id || 0,
          imageUrl: product?.imageUrl[0] || "",
          name: product?.name || "",
          description: product?.description || "",
          price: product?.price || 0,
          size,
          quantity: count,
          totalPrice: (product?.discountedPrice || 0) * count,
        },
      ]);
    } else {
      setSelectedItems((prev) =>
        prev.map((item) =>
          item.size === size
            ? {
                ...item,
                quantity: count,
                totalPrice: (product?.discountedPrice || 0) * count,
              }
            : item,
        ),
      );
    }
  };

  // 수량 증가 함수
  const increaseSizeCount = (size: string) => {
    setSizeCountStatus((prev) => ({ ...prev, [size]: prev[size] + 1 }));
    updateSelectedItems(size, sizeCountStatus[size] + 1);
  };

  // 수량 감소 함수
  const decreaseSizeCount = (size: string) => {
    setSizeCountStatus((prev) => ({
      ...prev,
      [size]: Math.max(prev[size] - 1, 0),
    }));

    const newCount = Math.max(sizeCountStatus[size] - 1, 0);
    updateSelectedItems(size, newCount);
  };

  const handleSizeButtonClick = (size: string) => {
    if (!selectedSizes.includes(size)) {
      setSelectedSizes((prev) => [...prev, size]); // 선택된 사이즈 추가
    }
    increaseSizeCount(size);
  };

  const totalQuantity = selectedSizes.reduce((acc, size) => {
    const count = sizeCountStatus[size];
    if (count > 0) {
      return acc + count;
    }
    return acc;
  }, 0);

  // 총 상품 금액 계산 (각 사이즈의 수량 * 가격)
  const totalPrice = selectedSizes.reduce((acc, size) => {
    const count = sizeCountStatus[size];
    if (count > 0) {
      const sizePrice = count * (product?.discountedPrice || 0);
      return acc + sizePrice;
    }
    return acc;
  }, 0);

  const selectedProductData = {
    selectedItems: selectedItems,
    totalQuantity: totalQuantity,
    totalPrice: totalPrice,
  };

  const handleOrderButtonClick = () => {
    if (selectedItems.length === 0) {
      alert("사이즈를 선택해주세요.");
      return;
    }
    navigate("/paymentorder", { state: selectedProductData });
  };

  if (!product) {
    return null;
  }

  return (
    <div className="h-auto w-full max-w-[522px] flex-col">
      <p className="w-[522px] text-[18px] font-semibold">{product?.name}</p>
      <div className="flex w-[522px] gap-[10px]">
        <p className="text-base font-medium">정상가</p>
        <p className="text-sm font-extralight">{product?.price}원</p>
      </div>
      <div className="flex w-[522px] gap-[10px]">
        <p className="text-base font-medium">할인가</p>
        <p className="text-base font-bold text-[#D40022]">
          {product?.discountedPrice}원
        </p>
        <p className="text-base font-bold text-[#D40022]">
          {product?.Discount.discountPercentage}%
        </p>
      </div>
      <div className="flex w-[522px] gap-[10px]">
        <p className="text-sm text-[#B0B0B0]">무료 배송</p>
      </div>

      <div className="mb-5 h-[88px] w-[522px] flex-col justify-between border-t-[1px] border-black pt-5">
        <p className="mb-2 text-base">사이즈</p>
        <div className="mb-5 flex gap-1">
          {product.size.map((size) => (
            <div
              key={size}
              onClick={() => handleSizeButtonClick(size)}
              className="cursor-pointer"
            >
              <SizeButton size={size} />
            </div>
          ))}
        </div>
      </div>

      <div>
        {/* 선택된 사이즈들만 렌더링, count가 0이면 Selected 컴포넌트가 렌더링되지 않음 */}
        {selectedSizes.map(
          (size) =>
            sizeCountStatus[size] > 0 && (
              <Selected
                key={size}
                selectedSize={size}
                count={sizeCountStatus[size]}
                increaseSizeCount={increaseSizeCount}
                decreaseSizeCount={decreaseSizeCount}
              />
            ),
        )}
      </div>

      <div>
        <div className="mb-[10px] mt-10 flex w-[522px] justify-end">
          <p className="text-[16px] font-semibold">총 상품 금액: </p>
          <p className="text-[16px] font-semibold">{totalPrice}원</p>
        </div>

        <div className="h-auto w-[522px]">
          <div className="w-full max-w-[522px]">
            <button
              onClick={() => {
                handleCartUpdate({
                  price: totalPrice,
                  size: "M", // 예시로 "M" 사이즈로 설정
                  quantity: 2, // 예시로 수량 2로 설정
                  user_id: Number(sessionStorage.getItem("id")),
                  product_id: product.id,
                });
              }}
              className="mr-3 mt-4 h-[70px] w-full max-w-[522px] rounded-2xl border-[1px] text-black"
            >
              장바구니 담기
            </button>

            <button
              onClick={handleOrderButtonClick}
              className="my-2 h-[70px] w-full max-w-[522px] rounded-2xl bg-black text-white"
            >
              바로 구매
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Details;
