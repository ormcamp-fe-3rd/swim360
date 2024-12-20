import { User } from "./users";
export interface Reviews {
  id?: number;
  content: string;
  imageUrl: string;
  rating: number;
  product_id: number;
  user_id: number;
  updatedAt: string;
  createdAt: string;
}

export type CombinedReviewType = User & Reviews;
