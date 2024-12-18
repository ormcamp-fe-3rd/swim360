import axios from "axios";

import { Product } from "@/types/products";
import { ReviewsData } from "@/types/reviews";
import { MyReview } from "@/types/users";


export async function getReview(userId:string) {
  try {
    const response = await axios.get<ReviewsData[]>(
      `http://localhost:3000/reviews/user/${userId}`,
    );

    if (!Array.isArray(response.data) || response.data.length === 0) {
      return [];
    }

    const myReviews: MyReview[] = await Promise.all(
      response.data.map(async (review) => {
        return {
          content: review.content,
          //FIXME: model에서의 필드명: product_id, types에서의 속성명: productId 인데, types의 타입으로 db 반환 타입 지정하니 productId로 입력시 오류 -> types의 속성명 product_id로 수정해둠
          productName: await getProductName(review.product_id),
          date: review.createdAt.slice(0, 10),
        };
      }),
    );
    return myReviews
  } catch (error) {
    console.log(error);
    return []
  }
}


async function getProductName(
  productId: ReviewsData["product_id"],
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
