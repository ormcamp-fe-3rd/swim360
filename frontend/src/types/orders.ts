export interface Order {
  id?: number;
  receiver: string;
  address: string;
  detailAddress: string;
  phoneNumber: string;
  totalPrice: number;
  orderStatus: string;
  user_id: number;
  createdAt?: string;
  updatedAt?: string;
}

export interface OrderRequest {
  orderStatus: string;
  totalPrice: number;
  user_id: number;
  receiver: string;
  address: string;
  detailAddress: string;
  phoneNumber: string;
  products: { size: string; quantity: number; totalPrice: number }[];
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

export interface MyOrder {
  id?: number;
  adress: string;
  totalPrice: number;
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
export interface MyOrderItemProduct {
  id: number;
  name: string;
  imageUrl: string;
}

export interface OrderData
  extends Pick<Order, "id" | "totalPrice" | "createdAt"> {
  orderItems: MyOrderItem[];
}

declare global {
  interface Window {
    daum: {
      Postcode: new (options: {
        oncomplete: (data: { address: string }) => void;
      }) => {
        open: () => void;
      };
    };
  }
}
