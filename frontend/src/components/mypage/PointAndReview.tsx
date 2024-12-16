import { useState } from "react";

import { Tabs, TabsContent, TabsListCustom, TabsTriggerCustom } from "../ui/tabs";
import PointList from "./PointList";
import ReviewList from "./ReviewList";


export default function PointAndReviewTab() {
  const [tab, setTab] = useState("point")

  return (
    <div className="h-screen">
      <div className="my-10 w-full">
        <Tabs defaultValue="my-points" className="h-20">
          <TabsListCustom className="h-full w-full tablet:w-[600px] mx-auto">
            <TabsTriggerCustom
              value="my-points"
              className={`h-full w-1/2 ${tab === "point" ? "border-black" : ""}`}
              onClick={() => setTab("point")}
            >
              포인트 내역
            </TabsTriggerCustom>
            <TabsTriggerCustom
              value="my-reviews"
              className={`h-full w-1/2 ${tab === "review" ? "border-black" : ""}`}
              onClick={() => setTab("review")}
            >
              리뷰 내역
            </TabsTriggerCustom>
          </TabsListCustom>
          <TabsContent value="my-points">
            <PointList />
          </TabsContent>
          <TabsContent value="my-reviews">
            <ReviewList />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
