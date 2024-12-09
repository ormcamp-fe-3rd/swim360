import OrderStatusPreview from "@/components/mypage/OrderStatusPreview";
import RecentOrderPreview from "@/components/mypage/RecentOrderPreview";
import UserInfoPreview from "@/components/mypage/UserInfoPreview";
import UserPointAndReviewPreview from "@/components/mypage/UserPointAndReviewPreview";

function MyPage() {
  return (
    <div className="px-[82px]">
      <div className="mb-[69px] grid grid-cols-2 gap-[41px]">
        <UserInfoPreview name={"먕먕"} />
        <UserPointAndReviewPreview reviewCount={3} />
      </div>
      <OrderStatusPreview
        deliveryStateCounts={{
          ORDER_COMPLETE: 12,
          PAYMENT_COMPLETE: 22,
          PREPARING: 12,
          SHIPPING: 15,
          DELIVERED: 11,
        }}
      />
      <RecentOrderPreview />
    </div>
  );
}

export default MyPage;
