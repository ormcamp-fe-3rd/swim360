export interface Product {
  id?: number;
  brandName: string;
  name: string;
  imageUrl: string[];
  price: number;
  salesVolume: number; //
  discountedPrice: number;
  size: string;
  stock: number;
  categoryId: number;
  discountId: number;
  createdAt: string;
}

export interface SelectedItem {
  selectedSize: number;
  selectedtotal: number;
  selectedTotalPrise: number;
}

export type SortOption = "latest" | "sale" | "review";

export interface ProductItemData {
  id: number;
  brandName: string;
  name: string;
  imgUrl: string;
  price: number;
  salesVolume: number;
  discountedPrice: number;
  discountPercentage: number;
  createdAt: string;
  reviewCount: number;
}

export interface ProductsData {
  products: ProductItemData[];
}
