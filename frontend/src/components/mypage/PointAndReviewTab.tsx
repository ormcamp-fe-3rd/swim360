import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import PointList from "./PointList";
import ReviewList from "./ReviewList";


export default function PointAndReviewTab() {
  return (
    <div className="h-screen">
      <div className="my-10 w-full">
        <Tabs defaultValue="my-points" className="h-20">
          <TabsList className="h-full w-full">
            <TabsTrigger value="my-points" className="h-full w-1/2">
              포인트 내역
            </TabsTrigger>
            <TabsTrigger value="my-reviews" className="h-full w-1/2">
              리뷰 내역
            </TabsTrigger>
          </TabsList>
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
