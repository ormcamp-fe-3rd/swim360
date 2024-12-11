export interface Product {
  id?: number;
  brandName: string;
  name: string;
  price: number;
  discountedPrice: number;
  size: string;
  imageUrl: string;
  salesVolume: number; //
  stock: number;
  categoryId: number;
  discountId: number;
}
