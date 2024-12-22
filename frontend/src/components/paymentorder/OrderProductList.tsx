interface SelectedItem {
  size: string;
  quantity: number;
  totalPrice: number;
}

interface OrderProductListProps {
  product_id: number;
  name: string;
  imageUrl: string;
  description: string;
  selectedItems: SelectedItem[];
  totalQuantity: number;
}

function OrderProductList({
  product_id,
  name,
  imageUrl,
  description,
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
          key={`${product_id}-${index}`}
          className="flex justify-between border-b p-2.5"
        >
          {/* 상품 이미지 */}
          <img src={imageUrl} alt={name} className="w-1/6" />
          {/* 상품 정보 */}
          <div className="w-1/3">
            <p>{name}</p>
            <p>{description}</p>
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
