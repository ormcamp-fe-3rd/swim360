import { User } from "./users";
export interface ReviewsData {
  id?: number;
  content: string;
  imageUrl: string;
  rating: number;
  productId: number;
  userId: number;
  updatedAt: string;
}

export type CombinedReviewType = User & ReviewsData;
