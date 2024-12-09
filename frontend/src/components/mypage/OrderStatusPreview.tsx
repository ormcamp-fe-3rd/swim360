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
    <Link to="/order">
      <div className="mb-[69px] flex h-[146px] border-[1px] border-[#000000]">
        {deliveryStatusArray.map((dStatus, i) => (
          <div
            key={dStatus.label}
            className="flex w-full items-center text-center"
          >
            <div className="w-full text-nowrap px-[17px] text-xl font-semibold">
              <div> {deliveryStateCounts[dStatus.status]}</div>
              <div>{dStatus.label}</div>
            </div>

            <div className="text-xl font-semibold">
              {i !== deliveryStatusArray.length - 1 && ">"}
            </div>
          </div>
        ))}
      </div>
    </Link>
  );
}

export default OrderStatusPreview;
