import { Link } from "react-router-dom";

interface OrderStatusPreviewProps {
  deliveryStateCounts: {
    ORDER_COMPLETE: number;
    PAYMENT_COMPLETE: number;
    PREPARING: number;
    SHIPPING: number;
    DELIVERED: number;
  };
}

type DeliveryStatus = keyof OrderStatusPreviewProps["deliveryStateCounts"];

interface DeliveryStatusItem {
  status: DeliveryStatus;
  label: string;
}

function OrderStatusPreview({ deliveryStateCounts }: OrderStatusPreviewProps) {
  const deliveryStatusArray: DeliveryStatusItem[] = [
    { status: "ORDER_COMPLETE", label: "주문 완료" },
    { status: "PAYMENT_COMPLETE", label: "결제 완료" },
    { status: "PREPARING", label: "배송 준비중" },
    { status: "SHIPPING", label: "배송 중" },
    { status: "DELIVERED", label: "배송 완료" },
  ];

  return (
    <Link to="/orderlist">
      <div className="mb-[69px] flex h-[146px] border-[1px] border-[#000000]">
        {deliveryStatusArray.map((dStatus, i) => (
          <div
            key={dStatus.label}
            className="flex w-full items-center text-center"
          >
            <div className="w-full tablet:px-[17px]">
              <div className="text-xl font-semibold tablet:text-xl">
                {deliveryStateCounts[dStatus.status]}
              </div>
              <div className="text-nowrap text-[12px] font-semibold tablet:text-xl">
                {dStatus.label}
              </div>
            </div>

            <div className="text-[10px] font-semibold tablet:text-xl">
              {i !== deliveryStatusArray.length - 1 && ">"}
            </div>
          </div>
        ))}
      </div>
    </Link>
  );
}

export default OrderStatusPreview;
