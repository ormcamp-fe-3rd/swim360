import axios from "@/services/index.ts";
import { Product } from "@/types/products";
import { MyReview, User, UserResponse } from "@/types/users";
import getLocalDate from "@/utils/getLocalDate";

//유저 리뷰 불러오기
export async function getReview(userId: string) {
  try {
    const response = await axios.get(`/reviews/user/${userId}`);

    if (!Array.isArray(response.data) || response.data.length === 0) {
      return [];
    }

    const myReviews: MyReview[] = await Promise.all(
      response.data.map(async (review) => {
        return {
          content: review.content,
          productId: review.product_id,
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
    const response = await axios.get<Product>(`/products/${productId}`);
    return response.data.name;
  } catch (error) {
    console.log(error);
    return "";
  }
}

//유저 정보 불러오기
export async function getUser(userId: string): Promise<User> {
  try {
    const response = await axios.get<UserResponse>(`/users/${userId}`);

    if (response.data.status === "error") {
      throw new Error("사용자 데이터를 가져오는데 실패했습니다.");
    }

    return response.data.data;
  } catch (error: any) {
    if (error.response) {
      if (error.response.status === 404) {
        throw new Error("회원을 찾을 수 없습니다.");
      }
    }
    console.log(error);
    throw new Error("에러가 발생했습니다. 잠시후 다시 시도해주세요.");
  }
}
