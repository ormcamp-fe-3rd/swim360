import { Product } from "@/types/products";
import { User } from "@/types/users";

export interface Cart {
  id?: number;
  price: number;
  quantity: number;
  createdAt: string;
}

export interface UpdateCart extends Omit<Cart, "createdAt"> {
  userId: User["id"];
  productId: Product["id"];
}
