
import { Reviews } from "./reviews";
import { Discount } from "./discounts";


export interface Product {
  id: number;
  brandName: string;
  name: string;
  description: string;
  imageUrl: string[];
  price: number;
  salesVolume: number; //
  discountedPrice: number;
  size: string;
  stock: number;
  category_id: number;
  discount_id: number;
  createdAt: string;
}

export interface ProductDetail {
  product: Product | undefined;
  reviews: Reviews[] | undefined;
}

export interface SelectedItem {
  selectedSize: number;
  selectedtotal: number;
  selectedTotalPrise: number;
}

export type SortOption = "latest" | "sale" | "review";

export interface ProductItemData
  extends Omit<Product, "category_id, discount_id "> {
  discountPercentage: Discount["discountPercentage"];
  reviewCount: number;
}

export interface ProductListData {
  products: ProductItemData[];
}
