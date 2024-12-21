import { useContext, useEffect, useState } from "react";

import { UserIdContext } from "@/contexts/UserContext";
import { getMyOrders } from "@/services/user";
import { Order, OrderData } from "@/types/orders";

import RecentOrderItems from "./RecentOrderItems";

function RecentOrders() {
  const userId = useContext(UserIdContext);
  const [orders, setOrders] = useState<OrderData[]>([]);

  useEffect(() => {
    if (!userId) return;

    const fetchOrders = async () => {
      try {
        const myOrders = await getMyOrders(userId);
        const formatted = await myOrders.map((order: Order) => {
          return {
            id: order.id,
            price: order.price,
            createdAt: order.createdAt,
            orderItems: [],
          };
        });
        setOrders(formatted);
      } catch (error) {
        console.log("fetch Order error: ", error);
      }
    };
    fetchOrders();
  }, [userId]);

  if (!orders || orders.length === 0) {
    return <div>주문 내역이 없습니다.</div>
  }

  return (
    <div>
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
              <RecentOrderItems orderData={order}/>
              <div className="flex justify-end p-2 text-lg font-semibold tablet:hidden">
                결제 금액: 총 {order.price}원
              </div>
            </div>
          </div>

          <div className="tablet:flex tablet:flex-col">
            {order.orderItems.map((orderItem) => (
              <div
                key={orderItem.id}
                className="flex grow items-center justify-center"
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
  );
}

export default RecentOrders;
