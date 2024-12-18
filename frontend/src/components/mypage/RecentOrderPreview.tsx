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
    <div className="relative w-full">
      <div className="sticky flex w-full items-center justify-start py-[14.8px]">
        <div className="mr-[10.36px] text-xl font-semibold tablet:text-2xl">
          최근 주문 내역
        </div>
        <div className="text-sm tablet:text-[17px]">
          6개월 이내 주문만 조회 가능합니다.
        </div>
      </div>
      <div className="hidden w-full grid-flow-col grid-cols-[0.5fr_1fr_0.3fr_0.3fr] border-b border-[#E5E7EB] bg-[#F9FAFB] p-4 text-center text-xl font-semibold text-[#6B7280] tablet:grid tablet:grid-cols-[0.3fr_1fr_0.3fr_0.3fr]">
        <div>주문 정보</div>
        <div>상품 정보</div>
        <div>수량</div>
        <div>가격</div>
      </div>

      <div className="border-b border-[#E5E7EB] font-semibold tablet:max-h-[759px] tablet:overflow-y-scroll [&::-webkit-scrollbar-thumb]:bg-gray-300 dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500 [&::-webkit-scrollbar-track]:bg-gray-100 dark:[&::-webkit-scrollbar-track]:bg-neutral-700 [&::-webkit-scrollbar]:w-2">
        {orders.map((order) => (
          <div
            key={order.id}
            className="grid w-full grid-flow-col grid-cols-1 border-b border-[#E5E7EB] last:border-none tablet:grid-cols-[0.3fr_1fr_0.3fr_0.3fr]"
          >
            <div className="hidden min-w-[150px] flex-col items-center justify-center text-lg tablet:flex">
              <div className="text-center">
                <div className="">주문 번호</div>
                <div>{order.id}</div>
                <div className="text-[#8c8b8b]">
                  {new Date(order.createdAt).toLocaleDateString()}
                </div>
              </div>
            </div>

            <div>
              <div className="flex w-full items-center justify-between border-b border-[#E5E7EB] bg-[#F9FAFB] p-4 tablet:hidden">
                <div>{new Date(order.createdAt).toLocaleDateString()} 주문</div>
                <div className="flex items-center"></div>
              </div>
              <div className="flex flex-col pb-3">
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
                        <div className="text-md mb-3 text-lg font-semibold">
                          {orderItem.name}
                        </div>
                        <div className="flex text-[#8c8b8b]">
                          <div>사이즈: {orderItem.size}</div>
                          <div className="block tablet:hidden">
                            , {orderItem.quantity}개
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
                <div className="flex justify-end p-2 text-lg font-semibold tablet:hidden">
                  결제 금액: 총 {order.price}원
                </div>
              </div>
            </div>
            <div
              className={`hidden tablet:grid grid-row-${order.orderItems.length}`}
            >
              {order.orderItems.map((orderItem) => (
                <div
                  key={orderItem.id + "quantity"}
                  className="flex items-center justify-center"
                >
                  {orderItem.quantity}
                </div>
              ))}
            </div>
            <div className="hidden flex-col items-center justify-center tablet:flex">
              <div className="text-lg font-semibold"> 총 {order.price}원</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default RecentOrderPreview;
