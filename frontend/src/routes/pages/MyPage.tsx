import OrderStatusPreview from "@/components/mypage/OrderStatusPreview";
import PointAndReviewPreview from "@/components/mypage/PointAndReviewPreview";
import RecentOrderPreview from "@/components/mypage/RecentOrderPreview";
import UserInfoPreview from "@/components/mypage/UserInfoPreview";
import myPageMainData from "@/mocks/mypage.json";

function MyPage() {
  const { orders, orderStatusCount, user } = myPageMainData;
  const { points, reviewCount } = user;

  const orderStatusPreProps = {
    orderStatusCount,
  };

  const userPointAndReviewPreProps = {
    points,
    reviewCount,
  };

  const recentOrderPreProps = {
    orders,
  };

  return (
    <div className="px-7 tablet:px-[82px]">
      <div className="mb-[41px] grid grid-cols-1 gap-[41px] tablet:mb-[69px] tablet:mt-[71px] tablet:grid-cols-2">
        <UserInfoPreview name={user.name} />
        <PointAndReviewPreview {...userPointAndReviewPreProps} />
      </div>
      <OrderStatusPreview {...orderStatusPreProps} />
      <RecentOrderPreview {...recentOrderPreProps} />
    </div>
  );
}

export default MyPage;
