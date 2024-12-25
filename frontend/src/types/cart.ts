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
  Product: {
    id: Product["id"];
    imageUrl: string;
    description: Product["description"];
    brandName: Product["brandName"];
    name: Product["name"];
    price: Product["price"];
    discountedPrice: Product["discountedPrice"];
  };
}

export interface CartList extends Cart {
  cartList: CartItem[];
}
