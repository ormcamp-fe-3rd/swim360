import axios from "@/services/index.ts";
import { Product } from "@/types/products";
import { Reviews } from "@/types/reviews";
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
export async function getUser(userId: string): Promise<User | null> {
  try {
    const response = await axios.get<User>(`/users/${userId}`);
    return response.data;
  } catch (error: any) {
    if (error.response) {
      //404, 500 오류
      console.log(error);
      throw new Error(error.response);
    } else {
      console.log(error);
      throw new Error(error.message);
    }
  }
}

export async function getUserByEmail(userEmail: string):Promise<User>{
  try {
    const response = await axios.get<UserResponse>(`/users/email/${userEmail}`);
    
    if (response.data.status === "error") {
      throw new Error("사용자 데이터를 가져오는데 실패했습니다.");
    }

    return response.data.data;
  } catch (error: any) {
    if (error.response) {
      if (error.response.status === 404) {
        throw new Error("이메일 또는 비밀번호가 올바르지 않습니다.");
      }
    }
    console.log(error);
    throw new Error("로그인 중 에러가 발생했습니다. 잠시후 다시 시도해주세요.");
  }
}