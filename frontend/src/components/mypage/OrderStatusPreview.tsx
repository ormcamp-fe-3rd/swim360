import { useEffect, useState } from "react";

import { useUserId } from "@/hooks/useUserId";
import { getMyOrderStatus } from "@/services/order";
import { OrderStatus, OrderStatusItem } from "@/types/orders";

const ORDER_STATUS: OrderStatusItem[] = [
  { status: "ORDER_COMPLETE", label: "주문 완료" },
  { status: "PAYMENT_COMPLETE", label: "결제 완료" },
  { status: "PREPARING", label: "배송 준비중" },
  { status: "SHIPPING", label: "배송 중" },
  { status: "DELIVERED", label: "배송 완료" },
] as const;

type orderStatusCount = Record<OrderStatus, number>;

function OrderStatusPreview() {
  const { userId } = useUserId();
  const [myOrderStatus, setMyOrderStatus] = useState<orderStatusCount>({
    ORDER_COMPLETE: 0,
    PAYMENT_COMPLETE: 0,
    PREPARING: 0,
    SHIPPING: 0,
    DELIVERED: 0
  });

  useEffect(()=> {
    if(!userId) return;
    const fetchOrderStatus = async () => {
      try{
        const myOrders = await getMyOrderStatus(userId);
        
        const newStatusCount = ORDER_STATUS.reduce(
          (acc, { status }) => {
            acc[status] = myOrders.filter(
              order => order.orderStatus === status).length;
              return acc;
            },
            {
              ORDER_COMPLETE: 0,
              PAYMENT_COMPLETE: 0,
              PREPARING: 0,
              SHIPPING: 0,
              DELIVERED: 0,
            } as orderStatusCount
          );
          setMyOrderStatus(newStatusCount);

      }catch(error){
        console.log(error);
      }
    }
    
      fetchOrderStatus();
    },[userId])



  return (
      <div className="mb-[69px] flex h-[146px] rounded-lg shadow-md">
        {ORDER_STATUS.map(({ status, label }, i) => (
          <div key={status} className="flex w-full items-center text-center">
            <div className="w-full tablet:px-[17px]">
              <div className="text-xl font-semibold tablet:text-lg">
                {myOrderStatus[status]}
              </div>
              <div className="tablet:text-md text-nowrap text-[12px] font-semibold desktop:text-xl">
                {label}
              </div>
            </div>

            {i !== ORDER_STATUS.length - 1 && (
              <div className="text-[10px] font-semibold tablet:text-xl">
                &gt;
              </div>
            )}
          </div>
        ))}
      </div>
  );
}

export default OrderStatusPreview;
