import { useContext } from "react";

import LogoutButton from "@/components/mypage/LogoutButton";
import PointAndReviewPreview from "@/components/mypage/PointAndReviewPreview";
import UserInfoPreview from "@/components/mypage/UserInfoPreview";
import { UserIdContext } from "@/contexts/UserContext";

function MyPage() {
  const userId = useContext(UserIdContext);
  if (!userId) return <h1>로그인 정보가 정확하지 않습니다.</h1>;

  return (
    <div className="px-7 tablet:px-[82px]">
      <div className="mb-[41px] grid grid-cols-1 gap-[41px] tablet:mb-[69px] tablet:mt-[71px] tablet:grid-cols-2">
        <UserInfoPreview />
        <PointAndReviewPreview />
      </div>
      {/* <OrderStatusPreview {...orderStatusPreProps} />
      <RecentOrderPreview {...recentOrderPreProps} /> */}
      <LogoutButton />
    </div>
  );
}

export default MyPage;
