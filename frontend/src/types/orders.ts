import { Product } from "./products";

export interface Order {
  id?: number;
  adress: string;
  price: number;
  orderStatus: string;
  user_id: number;
  createdAt: string;
  updatedAt: string;
}

export interface MyOrderItem {
  id: number;
  name: Product["name"];
  size: Product["size"];
  imageUrl: string;
  quantity: OrderItem["quantity"];
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
