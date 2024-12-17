import { OrderData } from "@/types/orders";

interface RecentOrdersProps {
  orders: OrderData[];
}

function RecentOrders({ orders }: RecentOrdersProps) {
  return (
    <div>
      {orders.map(({ id, createdAt, price, orderItems }) => (
        <div
          key={id}
          className="grid w-full grid-flow-col grid-cols-1 border-b border-[#E5E7EB] last:border-none tablet:grid-cols-[0.3fr_1fr_0.3fr_0.3fr]"
        >
          <div className="hidden min-w-[150px] flex-col items-center justify-center text-lg tablet:flex">
            <div className="text-center">
              <div className="">주문 번호</div>
              <div>{id}</div>
              <div className="text-[#8c8b8b]">
                {new Date(createdAt).toLocaleDateString()}
              </div>
            </div>
          </div>
          <div>
            <div className="flex w-full items-center justify-between border-b border-[#E5E7EB] bg-[#F9FAFB] p-4 tablet:hidden">
              <div>{new Date(createdAt).toLocaleDateString()} 주문</div>
              <div className="flex items-center"></div>
            </div>

            <div className="flex flex-col pb-3">
              {orderItems.map((orderItem) => (
                <div
                  key={orderItem.id}
                  className="flex flex-col items-start gap-4"
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
                결제 금액: 총 {price}원
              </div>
            </div>
          </div>

          <div className={`hidden tablet:flex tablet:flex-col`}>
            {orderItems.map((orderItem) => (
              <div
                key={orderItem.id}
                className="flex grow items-center justify-center"
              >
                {orderItem.quantity}
              </div>
            ))}
          </div>
          <div className="hidden flex-col items-center justify-center tablet:flex">
            <div className="text-lg font-semibold"> 총 {price}원</div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default RecentOrders;
