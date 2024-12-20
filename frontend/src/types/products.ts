import { Reviews } from "./reviews";

export interface Product {
  id: number;
  brandName: string;
  name: string;
  description: string;
  imageUrl: string;
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
  product: Product;
  review: Reviews;
}
export interface SelectedItem {
  selectedSize: number;
  selectedtotal: number;
  selectedTotalPrise: number;
}

export type SortOption = "latest" | "sale" | "review";

export interface ProductItemData
  extends Omit<Product, "category_id, discount_id "> {
  discountPercentage: number;
  reviewCount: number;
}

export interface ProductsData {
  products: ProductItemData[];
}
