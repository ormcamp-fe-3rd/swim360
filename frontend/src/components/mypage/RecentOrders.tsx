import { useEffect, useState } from "react";

import { useUserId } from "@/hooks/useUserId";
import { getMyOrders } from "@/services/order";
import { MyOrder } from "@/types/orders";
import { formatPrice } from "@/utils/formatPrice";
import getLocalDate from "@/utils/getLocalDate";

import RecentOrderItems from "./RecentOrderItems";

function RecentOrders() {
  const { userId } = useUserId();
  const [orders, setOrders] = useState<MyOrder[]>([]);

  useEffect(() => {
    if (!userId) return;

    const fetchOrders = async () => {
      try {
        const myOrders = await getMyOrders(userId);
        setOrders(myOrders);
      } catch (error) {
        console.log("fetch Order error: ", error);
      }
    };
    fetchOrders();
  }, [userId]);

  if (!orders || orders.length === 0) {
    return <div>주문 내역이 없습니다.</div>;
  }

  return (
    <div>
      {orders.map((order) => (
        <div
          key={order.id}
          className="grid w-full grid-flow-col grid-cols-1 border-b border-[#E5E7EB] last:border-none tablet:grid-cols-[0.3fr_1fr_0.3fr_0.3fr]"
        >
          {/* tablet 이상 */}
          <div className="hidden min-w-[150px] flex-col items-center justify-center text-lg tablet:flex">
            <div className="text-center">
              <div className="">주문 번호</div>
              <div>{order.id}</div>
              <div className="text-[#8c8b8b]">
                {getLocalDate(order.createdAt)}
              </div>
            </div>
          </div>

          <div>
            {/* tablet 이하 */}
            <div className="flex w-full items-center justify-between border-b border-[#E5E7EB] bg-[#F9FAFB] p-4 tablet:hidden">
              <div>{getLocalDate(order.createdAt)}주문</div>
              <div className="flex items-center"></div>
            </div>

            <div className="flex flex-col pb-3">
              <RecentOrderItems orderId={order.id} />
              <div className="flex justify-end p-2 text-lg font-semibold tablet:hidden">
                결제 금액: 총 {formatPrice(order.totalPrice)}원
              </div>
            </div>
          </div>

          {/* tablet 이상, 총 수량 표시*/}
          <div className="hidden tablet:flex tablet:flex-col">
            <div
              key={order.id}
              className="flex grow items-center justify-center"
            >
              {order.totalQuantity}
            </div>
          </div>

          <div className="hidden flex-col items-center justify-center tablet:flex">
            <div className="text-lg font-semibold">
              {" "}
              총 {formatPrice(order.totalPrice)}원
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default RecentOrders;
