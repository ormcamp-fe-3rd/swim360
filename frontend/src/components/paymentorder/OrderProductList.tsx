interface Product {
  id: number;
  imageUrl: string;
  name: string;
  description: string;
  option: string;
  quantity: number;
  price: number;
  totalPrice: number;
}

interface OrderProductListProps {
  products: Product[]; // 상품 목록 배열
}

function OrderProductList({ products }: OrderProductListProps) {
  return (
    <div className="border-b border-black py-2.5">
      <p className="w-full border-b border-black p-2.5 font-bold">
        총 상품(<span>{products.length}</span>)
      </p>
      <div className="w-full border-b p-2.5">
        <span className="inline-block w-1/3 text-center">상품정보</span>
        <span className="inline-block w-1/3 text-right">수량</span>
        <span className="inline-block w-1/3 text-right">가격</span>
      </div>
      {products.map((product) => (
        <div key={product.id} className="flex justify-between border-b p-2.5">
          {/* 상품 이미지 */}
          <img src={product.imageUrl} alt={product.name} className="w-1/6" />
          {/* 상품 정보 */}
          <div className="w-1/3">
            <p>{product.name}</p>
            <p>{product.description}</p>
            <p>
              옵션 : <span>{product.option}</span>
            </p>
          </div>
          {/* 수량 */}
          <div className="w-1/5 text-center">
            <span>{product.quantity}</span>
          </div>
          {/* 가격 */}
          <div className="ml-4 w-1/5 flex-col">
            <span className="block text-right">
              {product.price.toLocaleString()} 원
            </span>
            <span className="block text-right">
              {product.totalPrice.toLocaleString()} 원
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}

export default OrderProductList;
