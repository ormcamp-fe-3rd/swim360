
export interface Order {
  id?: number;
  adress: string;
  price: number;
  orderStatus: string;
  user_id: number;
  createdAt: string;
  updatedAt: string;
}
export interface MyOrder {
  id?: number;
  adress: string;
  price: number;
  orderStatus: string;
  user_id: number;
  createdAt: string;
  updatedAt: string;
  totalQuantity: number;
}
export interface MyOrderItem {
  id: number;
  quantity: number;
  size: string;
  Product: MyOrderItemProduct;
}
export interface MyOrderItemProduct{
  id: number;
  name: string;
  imageUrl: string;
}

export interface OrderItem {
  id?: number;
  price: number;
  size: string;
  quantity: number;
  order_id: number;
  product_id: number;
  createdAt: string;
  updatedAt: string;
}
export interface OrderData extends Pick<Order, "id" | "price" | "createdAt"> {
  orderItems: MyOrderItem[];
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
