import { useContext } from "react";
import { Navigate } from "react-router-dom";

import LogoutButton from "@/components/mypage/LogoutButton";
import OrderStatusPreview from "@/components/mypage/OrderStatusPreview";
import RecentOrderPreview from "@/components/mypage/RecentOrderPreview";
import UserDetailPreview from "@/components/mypage/UserDetailPreview";
import UserInfoPreview from "@/components/mypage/UserInfoPreview";
import { UserIdContext } from "@/contexts/UserIdContext";

function MyPage() {
  const userId = useContext(UserIdContext);

  if (!userId) {
    alert("로그인 정보가 정확하지 않습니다.");
    return <Navigate to={"/login"} replace />;
  }

  return (
    <div className="mx-auto w-[90%] max-w-[1440px]">
      <div className="mb-[41px] grid grid-cols-1 gap-[41px] tablet:mb-[69px] tablet:mt-[71px] tablet:grid-cols-2">
        <UserInfoPreview />
        <UserDetailPreview />
      </div>
      <OrderStatusPreview />
      <RecentOrderPreview />
      <LogoutButton />
    </div>
  );
}

export default MyPage;
