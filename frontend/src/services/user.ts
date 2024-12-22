import axios from "@/services/index.ts";
import { Product } from "@/types/products";
import { Reviews } from "@/types/reviews";
import { MyReview, User } from "@/types/users";
import getLocalDate from "@/utils/getLocalDate";

//유저 리뷰 불러오기
export async function getReview(userId: string) {
  try {
    const response = await axios.get<Reviews[]>(
      `/reviews/user/${userId}`,
    );

    if (!Array.isArray(response.data) || response.data.length === 0) {
      return [];
    }

    const myReviews: MyReview[] = await Promise.all(
      response.data.map(async (review) => {
        return {
          content: review.content,
          productName: await getProductName(review.product_id),
          date: getLocalDate(review.createdAt),
        };
      }),
    );
    return myReviews;
  } catch (error) {
    console.log(error);
    return [];
  }
}

async function getProductName(productId: Product["id"]): Promise<string> {
  try {
    const response = await axios.get<Product>(
      `/products/${productId}`,
    );
    return response.data.name;
  } catch (error) {
    console.log(error);
    return "";
  }
}

//유저 정보 불러오기
export async function getUser(userId: string) {
  try {
    const response = await axios.get<User>(
      `/users/${userId}`,
    );
    return response.data;
  } catch (error) {
    console.log(error);
    return "";
  }
}

