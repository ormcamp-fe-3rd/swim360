import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { getOrderItems } from "@/services/orderItem";
import { MyOrderItem, Order } from "@/types/orders";

interface Props {
  orderId: Order['id'];
}

export default function RecentOrderItems({ orderId }: Props) {
  const [orderItems, setOrderItems] = useState<MyOrderItem[]>([]);

  useEffect(() => {
    const fetchOrderItems = async () => {
      try {
        if (!orderId) return;
        const orderItems = await getOrderItems(orderId);

        setOrderItems(orderItems);
      } catch (error) {
        console.log("fetching orderItems error", error);
      }
    };
    fetchOrderItems();
  }, [orderId]);

  return (
    <div>
      {orderItems.map((orderItem) => (
        <Link to={`/product/${orderItem.Product.id}`}>
          <div key={orderItem.id} className="flex flex-col items-start gap-4">
            <div className="col-span-3 flex">
              <div className="ml-3 max-h-[209px] max-w-[153px] pt-3">
                <img
                  className="h-full w-full object-cover"
                  src={orderItem.Product.imageUrl}
                  alt={orderItem.Product.name}
                />
              </div>
              <div className="m-[13px] flex flex-col justify-center">
                <div className="text-md mb-3 text-lg font-semibold">
                  {orderItem.Product.name}
                </div>
                <div className="flex text-[#8c8b8b]">
                  <div>사이즈: {orderItem.size}</div>
                  <div className="block">, {orderItem.quantity}개</div>
                </div>
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}
