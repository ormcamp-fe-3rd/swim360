import axios from "axios";
import { useEffect, useState } from "react";

import { cn } from "@/lib/utils";
import { Product } from "@/types/products";
import { ReviewsData, ReviewUserData } from "@/types/reviews";

import {
  Tabs,
  TabsContent,
  TabsListCustom,
  TabsTriggerCustom,
} from "../ui/tabs";
import PointList from "./PointList";
import { points } from "./Points";
import ReviewList from "./ReviewList";

export default function PointAndReviewTab() {
  const [tab, setTab] = useState(true);
  const [reviews, setReviews] = useState<ReviewUserData[]>([]);

  async function getReview() {
    try {
      const response = await axios.get<ReviewsData[]>(
        "http://localhost:3000/reviews/user/1",
      );
      const myReviews: ReviewUserData[] = await Promise.all(
        response.data.map(async (review) => {
          return {
            content: review.content,
            //FIXME: model에서의 필드명: product_id, types에서의 속성명: productId 인데, types의 타입으로 db 반환 타입 지정하니 productId로 입력시 오류 -> types의 속성명 product_id로 수정해둠
            productName: await getProductName(review.product_id),
            date: review.createdAt.slice(0, 10),
          };
        }),
      );
      setReviews(myReviews);
    } catch (error) {
      console.log(error);
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

  useEffect(() => {
    getReview();
  }, []);

  return (
    <div className="h-screen">
      <div className="my-10 w-full">
        <Tabs defaultValue="my-points" className="h-20">
          <TabsListCustom className="mx-auto h-full w-full tablet:w-[600px]">
            <TabsTriggerCustom
              value="my-points"
              className={cn("h-full w-1/2", { "border-black": tab })}
              onClick={() => setTab(true)}
            >
              포인트 내역
            </TabsTriggerCustom>
            <TabsTriggerCustom
              value="my-reviews"
              className={cn("h-full w-1/2", { "border-black": !tab })}
              onClick={() => setTab(false)}
            >
              리뷰 내역
            </TabsTriggerCustom>
          </TabsListCustom>
          <TabsContent value="my-points" className="mt-40">
            <PointList points={points} />
          </TabsContent>
          <TabsContent value="my-reviews" className="mt-40">
            <ReviewList reviews={reviews} />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
