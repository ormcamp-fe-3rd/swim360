import { useEffect, useState } from "react";

import { getOrderItems } from "@/services/orderItem";
import { getProduct } from "@/services/product";
import { MyOrderItem, OrderData, OrderItem } from "@/types/orders";

interface Props {
  orderData: OrderData;
}

export default function RecentOrderItems({ orderData }: Props) {
  const [formattedItems, setFormattedItems] = useState<MyOrderItem[]>([]);

  useEffect(() => {
    const fetchOrderItems = async () => {
      try {
        const orderItems = await getOrderItems(`${orderData.id}`);

        const formatted = await Promise.all(
          orderItems.map(async (orderItem: OrderItem) => {
            const product = await getProduct(orderItem.product_id);

            const imageUrl = Array.isArray(product.imageUrl)
              ? product.imageUrl[0]
              : product.imageUrl;

            return {
              id: orderItem.id,
              name: product.name,
              imageUrl: imageUrl,
              size: product.size,
              quantity: orderItem.quantity,
            };
          }),
        );
        setFormattedItems(formatted);
      } catch (error) {
        console.log("fetching orderItems error", error);
      }
    };
    fetchOrderItems();
  }, [orderData.id]);

  return (
    <div>
      {formattedItems.map((orderItem) => (
        <div key={orderItem.id} className="flex flex-col items-start gap-4">
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
                <div className="block">, {orderItem.quantity}개</div>
              </div>
            </div>
          </div>
        </div>
      ))}
      ;
    </div>
  );
}
