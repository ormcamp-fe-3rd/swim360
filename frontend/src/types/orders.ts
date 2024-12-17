export interface Order {
  id?: number;
  adress: string;
  price: number;
  orderStatus: string;
  userId: number;
  productId: number;
  createdAt: string;
}

export interface OrderItem {
  id: number;
  name: string;
  size: string;
  imageUrl: string;
  quantity: number;
  discountedPrice: number;
}

export interface OrderData extends Pick<Order, "id" | "price" | "createdAt"> {
  orderItems: OrderItem[];
}

export type OrderStatus =
  | "ORDER_COMPLETE"
  | "PAYMENT_COMPLETE"
  | "PREPARING"
  | "SHIPPING"
  | "DELIVERED";

export interface OrderStatusItem {
  status: OrderStatus;
  label: string;
}
