import { User } from "./users";
export interface Reviews {
  id?: number;
  content: string;
  imageUrl: string;
  rating: number;
  productId: number;
  userId: number;
  updatedAt: string;
}

export type CombinedReviewType = User & Reviews;
