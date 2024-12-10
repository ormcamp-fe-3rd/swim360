import { Link } from "react-router-dom";

interface OrderItem {
  id: number;
  name: string;
  size: string;
  imageUrl: string;
  quantity: number;
  discountedPrice: number;
}

interface Order {
  id: number;
  price: number;
  createdAt: string;
  orderItems: OrderItem[];
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
      <div className="grid w-full grid-flow-col grid-cols-[0.3fr_1fr_0.3fr_0.3fr] border-y border-black text-center">
        <div>주문 정보</div>
        <div>상품 정보</div>
        <div>수량</div>
        <div>가격</div>
      </div>

      <div className="max-h-[759px] overflow-y-scroll border-b border-black [&::-webkit-scrollbar-thumb]:bg-gray-300 dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500 [&::-webkit-scrollbar-track]:bg-gray-100 dark:[&::-webkit-scrollbar-track]:bg-neutral-700 [&::-webkit-scrollbar]:w-2">
        {orders.map((order) => (
          <div
            key={order.id}
            className="grid w-full grid-flow-col grid-cols-[0.3fr_1fr_0.3fr_0.3fr] border-b border-gray-400 last:border-none"
          >
            <Link
              className="flex flex-col items-center justify-center hover:underline"
              to={`/order-detail/${order.id}`}
            >
              <div className="text-center">
                <div>주문번호</div>
                <div>{order.id}</div>
                <div className="text-[#8c8b8b]">
                  {new Date(order.createdAt).toLocaleDateString()}
                </div>
              </div>
            </Link>

            <div className="flex flex-col bg-[#fafafa] pb-3">
              {order.orderItems.map((orderItem) => (
                <div
                  key={orderItem.id + "name"}
                  className="grid grid-cols-3 items-center gap-4"
                >
                  <div className="col-span-3 flex">
                    <div className="ml-3 max-h-[209px] max-w-[153px] pt-3">
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
                <div
                  key={orderItem.id + "quantity"}
                  className="flex items-center justify-center"
                >
                  {orderItem.quantity}
                </div>
              ))}
            </div>
            <div className="flex flex-col items-center justify-center bg-[#fafafa]">
              <div className="text-xl font-semibold"> 총 {order.price}원</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default RecentOrderPreview;
