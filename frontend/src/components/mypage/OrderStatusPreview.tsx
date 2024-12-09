interface OrderStatusPreviewProps {
  deliveryStateCounts: {
    ORDER_COMPLETE: number;
    PAYMENT_COMPLETE: number;
    PREPARING: number;
    SHIPPTING: number;
    DELIVERED: number;
  };
}

function OrderStatusPreview({ deliveryStateCounts }: OrderStatusPreviewProps) {
  const DELIVERY_STATUS = [
    { status: "ORDER_COMPLETE", label: "주문 완료" },
    { status: "PAYMENT_COMPLETE", label: "결제 완료" },
    { status: "PREPARINGE", label: "배송 준비중" },
    { status: "SHIPPTING", label: "배송 중" },
    { status: "DELIVERED", label: "배송 완료" },
  ];

  return <div>{deliveryStateCounts.DELIVERED}</div>;
}

export default OrderStatusPreview;
