interface Order {
  id: number;
  price: number;
  createdAt: string;
  orderItems: OrderItem[];
}
interface OrderItem {
  id: number;
  name: string;
  size: string;
  imageUrl: string;
  quantity: number;
  discountedPrice: number;
}

interface RecentOrderPreviewProps {
  orders: Order[];
}

function RecentOrderPreview({ orders }: RecentOrderPreviewProps) {
  return (
    <div className="w-full">
      <div className="flex w-full items-center justify-start py-[14.8px]">
        <div className="mr-[10.36px] text-2xl font-semibold">
          최근 주문 내역
        </div>
        <div className="text-[17px]">6개월 이내 주문만 조회 가능합니다.</div>
      </div>
      <div className="grid w-full grid-flow-col grid-cols-[0.5fr_1fr_1fr_0.5fr] gap-2 border-y border-black text-center">
        <div>주문 정보</div>
        <div>상품 정보</div>
        <div>수량</div>
        <div>가격</div>
      </div>
      {orders.map((order) => (
        <div className="grid w-full grid-flow-col grid-cols-[0.5fr_1fr_1fr_0.5fr] border-b border-black pt-3">
          <div className="flex flex-col items-center justify-center hover:underline">
            <div>주문번호</div>
            <div>{order.id}</div>
            <div className="text-[#8c8b8b]">
              {new Date(order.createdAt).toLocaleDateString()}
            </div>
          </div>
          <div className="flex flex-col">
            {order.orderItems.map((orderItem) => (
              <div className="grid grid-cols-3 items-center gap-4">
                <div className="col-span-3 flex">
                  <div className="h-[209px] w-[153px] pb-3">
                    <img
                      className="h-full w-full object-cover"
                      src={orderItem.imageUrl}
                      alt={orderItem.name}
                    />
                  </div>
                  <div className="m-[13px] flex flex-col justify-center">
                    <div className="text-md mb-3 font-semibold">
                      {orderItem.name}
                    </div>
                    <div className="text-[#8c8b8b]">
                      사이즈: {orderItem.size}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className={`grid grid-row-${order.orderItems.length}`}>
            {order.orderItems.map((orderItem) => (
              <div className="flex items-center justify-center">
                {orderItem.quantity}
              </div>
            ))}
          </div>
          <div className="flex flex-col items-center justify-center">
            <div className="mb-3 text-[18px] text-[#8c8b8b] line-through">
              {order.price}원
            </div>
            <div className="text-xl"> {order.price}원</div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default RecentOrderPreview;
