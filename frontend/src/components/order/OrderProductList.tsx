import { SelectedOrderItem } from "@/types/orders";

interface OrderProductListProps {
  selectedItems: SelectedOrderItem[];
  totalQuantity: number;
}

function OrderProductList({
  selectedItems,
  totalQuantity,
}: OrderProductListProps) {
  return (
    <div className="border-b border-black py-2.5">
      <p className="w-full border-b border-black p-2.5 font-bold">
        총 상품(<span>{totalQuantity}</span>)
      </p>
      <div className="w-full border-b p-2.5">
        <span className="inline-block w-1/3 text-center">상품정보</span>
        <span className="inline-block w-1/3 text-right">수량</span>
        <span className="inline-block w-1/3 text-right">가격</span>
      </div>
      {selectedItems.map((selectedItem, index) => (
        <div
          key={`${selectedItem.productId}-${index}`}
          className="flex justify-between border-b p-2.5"
        >
          {/* 상품 이미지 */}
          <img
            src={selectedItem.imageUrl}
            alt={selectedItem.name}
            className="w-1/3 tablet:w-1/6"
          />
          {/* 상품 정보 */}
          <div className="w-1/3">
            <p>{selectedItem.name}</p>
            <p className="hidden tablet:block">{selectedItem.description}</p>
            <p>
              옵션 : <span>{selectedItem.size}</span>
            </p>
          </div>
          {/* 수량 */}
          <div className="w-1/5 text-center">
            <span>{selectedItem.quantity}</span>
          </div>
          {/* 가격 */}
          <div className="ml-4 w-1/5 flex-col">
            <span className="block text-right">
              {selectedItem.totalPrice?.toLocaleString() || "0"} 원
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}

export default OrderProductList;
