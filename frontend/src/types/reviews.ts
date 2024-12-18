import { User } from "./users";
export interface ReviewsData {
  id?: number;
  content: string;
  imageUrl: string;
  rating: number;
  product_id: number;
  userId: number;
  updatedAt: string;
  createdAt: string;
}

export type CombinedReviewType = User & ReviewsData;

export interface ReviewUserData {
  // id: Reviews['id'];
  content: ReviewsData["content"];
  productName: string;
  date: string;
}
