import { Product } from "./products";

export interface Order {
  id?: number;
  receiver: string;
  address: string;
  detailAddress: string;
  phoneNumber: string;
  //
  totalPrice: number;
  orderStatus: string;
  user_id: number;
  createdAt: string;
  updatedAt: string;
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

export interface OrderFormData {
  receiver: string;
  address: string;
  detailAddress: string;
  phoneNumber: string;
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

export interface MyOrderItem {
  id: number;
  name: Product["name"];
  size: Product["size"];
  imageUrl: string;
  quantity: OrderItem["quantity"];
}

export interface MyOrderItemProduct {
  name: string;
  imageUrl: string;
  createdAt?: string;
  updatedAt?: string;
}

export interface OrderData
  extends Pick<Order, "id" | "totalPrice" | "createdAt"> {
  orderItems: MyOrderItem[];
}
