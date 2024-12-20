import { Link } from "react-router-dom";

import { OrderStatus, OrderStatusItem } from "@/types/orders";

const ORDER_STATUS: OrderStatusItem[] = [
  { status: "ORDER_COMPLETE", label: "주문 완료" },
  { status: "PAYMENT_COMPLETE", label: "결제 완료" },
  { status: "PREPARING", label: "배송 준비중" },
  { status: "SHIPPING", label: "배송 중" },
  { status: "DELIVERED", label: "배송 완료" },
] as const;

interface OrderStatusProps {
  orderStatusCount: Record<OrderStatus, number>;
}

function OrderStatusPreview({ orderStatusCount }: OrderStatusProps) {
  return (
    <Link to="/orderlist">
      <div className="mb-[69px] flex h-[146px] border border-black">
        {ORDER_STATUS.map(({ status, label }, i) => (
          <div key={status} className="flex w-full items-center text-center">
            <div className="w-full tablet:px-[17px]">
              <div className="text-xl font-semibold tablet:text-lg">
                {orderStatusCount[status]}
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
    </Link>
  );
}

export default OrderStatusPreview;
