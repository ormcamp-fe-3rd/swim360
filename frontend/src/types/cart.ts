import { Product } from "@/types/products";

export interface Cart {
  id?: number;
  price: number;
  size: string;
  quantity: number;
  user_id: number;
  product_id: number;
  createdAt?: string;
}

export interface CartItem extends Cart {
  Product: Pick<
    Product,
    "imageUrl" | "brandName" | "name" | "size" | "price" | "discountedPrice"
  >;
}

export interface CartList extends Cart {
  cartList: CartItem[];
}
