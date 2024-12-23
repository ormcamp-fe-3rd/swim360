import { Discount } from "./discounts";
import { Rating, Reviews } from "./reviews";

export interface Product {
  id: number;
  brandName: string;
  name: string;
  description: string;
  imageUrl: string[];
  price: number;
  salesVolume: number; //
  discountedPrice: number;
  size: string[];
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
  extends Omit<Product, "imageUrl" | "category_id" | "discount_id"> {
  imageUrl: string;
  reviewCount: number;
  Discount: {
    discountPercentage: Discount["discountPercentage"];
  };
}

export interface ProductListData {
  products: ProductItemData[];
}

export interface BestProduct {
  id: number;
  name: string;
  brandName: string;
  imageUrl: string;
  discountedPrice: number;
  price: number;
}
