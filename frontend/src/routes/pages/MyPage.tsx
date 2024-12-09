import OrderStatusPreview from "@/components/mypage/OrderStatusPreview";
import RecentOrderPreview from "@/components/mypage/RecentOrderPreview";
import UserActivityPreview from "@/components/mypage/UserActivityPreview";
import UserInfoPreview from "@/components/mypage/UserInfoPreview";

function MyPage() {
  return (
    <div>
      <div>
        <UserInfoPreview />
        <UserActivityPreview />
      </div>
      <OrderStatusPreview />
      <RecentOrderPreview />
    </div>
  );
}

export default MyPage;
