import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import { cn } from "@/lib/utils";
import { MyReview } from "@/types/users";

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
  const [myReview, setMyReview] = useState<MyReview[]>([])

  const location = useLocation();
  
  useEffect(()=>{
    const reviews = location.state.reviews;
    setMyReview(reviews)

  },[])

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
            <ReviewList reviews={myReview} />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
