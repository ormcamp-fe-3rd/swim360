import axios from "axios";

import { Product } from "@/types/products";
import { Reviews } from "@/types/reviews";
import { MyReview } from "@/types/users";

export async function getReview(userId: string) {
  try {
    const response = await axios.get<Reviews[]>(
      `http://localhost:3000/reviews/user/${userId}`,
    );

    if (!Array.isArray(response.data) || response.data.length === 0) {
      return [];
    }

    const myReviews: MyReview[] = await Promise.all(
      response.data.map(async (review) => {
        return {
          content: review.content,
          productName: await getProductName(review.product_id),
          date: review.createdAt.slice(0, 10),
        };
      }),
    );
    return myReviews;
  } catch (error) {
    console.log(error);
    return [];
  }
}

async function getProductName(
  productId: Reviews["product_id"],
): Promise<string> {
  try {
    const response = await axios.get<Product>(
      `http://localhost:3000/products/${productId}`,
    );
    return response.data.name;
  } catch (error) {
    console.log(error);
    return "";
  }
}
