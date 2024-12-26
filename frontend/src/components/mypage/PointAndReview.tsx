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
import PointTable from "./PointTable";
import ReviewTable from "./ReviewTable";

export default function PointAndReviewTab() {
  const [tab, setTab] = useState(true);
  const [myReview, setMyReview] = useState<MyReview[] | string>([]);

  const location = useLocation();

  useEffect(() => {
    const reviews = location.state.reviews;
    if (!reviews) {
      setMyReview("정보를 가져오는 데 실패했습니다.");
    }
    setMyReview(reviews);
  }, []);

  return (
    <div className="h-full">
      <div className="my-10 w-full">
        <Tabs defaultValue="my-reviews" className="h-auto">
          <TabsListCustom className="mx-auto h-full w-full tablet:w-full">
            <TabsTriggerCustom
              value="my-points"
              className={cn("h-full w-1/2", { "border-black": !tab })}
              onClick={() => setTab(false)}
            >
              포인트 내역
            </TabsTriggerCustom>
            <TabsTriggerCustom
              value="my-reviews"
              className={cn("h-full w-1/2", { "border-black": tab })}
              onClick={() => setTab(true)}
            >
              리뷰 내역
            </TabsTriggerCustom>
          </TabsListCustom>
          <TabsContent value="my-points" className="mt-20 h-full">
            <PointTable />
          </TabsContent>
          <TabsContent value="my-reviews" className="mt-20 h-full">
            <ReviewTable reviews={myReview} />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
