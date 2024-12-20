import { useContext } from "react";

import LogoutButton from "@/components/mypage/LogoutButton";
import OrderStatusPreview from "@/components/mypage/OrderStatusPreview";
import PointAndReviewPreview from "@/components/mypage/PointAndReviewPreview";
import RecentOrderPreview from "@/components/mypage/RecentOrderPreview";
import UserInfoPreview from "@/components/mypage/UserInfoPreview";

import { UserIdContext } from "@/contexts/UserContext";
import myPageMainData from "@/mocks/mypage.json";

function MyPage() {
  const { orderStatusCount } = myPageMainData;
  const orderStatusPreProps = {orderStatusCount,};
  
  const userId = useContext(UserIdContext);
  if (!userId) return <h1>로그인 정보가 정확하지 않습니다.</h1>;
  
  return (
    <div className="px-7 tablet:px-[82px]">
      <div className="mb-[41px] grid grid-cols-1 gap-[41px] tablet:mb-[69px] tablet:mt-[71px] tablet:grid-cols-2">
        <UserInfoPreview />
        <PointAndReviewPreview />
      </div>
      <OrderStatusPreview {...orderStatusPreProps} />
      <RecentOrderPreview />
      <LogoutButton />
    </div>
  );
}

export default MyPage;
