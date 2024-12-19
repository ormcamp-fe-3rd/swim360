export interface Product {
  id: number;
  brandName: string;
  name: string;
  imageUrl: string;
  price: number;
  salesVolume: number; //
  discountedPrice: number;
  sizes: string[];
  stock: number;
  category_id: number;
  discount_id: number;
  createdAt: string;
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
