export interface Product {
  id?: number;
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
