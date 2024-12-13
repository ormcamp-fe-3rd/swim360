export interface Product {
  id?: number;
  brandName: string;
  name: string;
  imageUrl: string;
  price: number;
  salesVolume: number; //
  discountedPrice: number;

  
  size: string;
  stock: number;
  categoryId: number;
  discountId: number;
}
