import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import LogoutButton from "@/components/mypage/LogoutButton";
import OrderStatusPreview from "@/components/mypage/OrderStatusPreview";
import RecentOrderPreview from "@/components/mypage/RecentOrderPreview";
import UserDetailPreview from "@/components/mypage/UserDetailPreview";
import UserInfoPreview from "@/components/mypage/UserInfoPreview";
import { useUserId } from "@/hooks/useUserId";

function MyPage() {
  const { userId } = useUserId();
  const navigate = useNavigate();

  useEffect(()=> {
    if (!userId) {
      alert("잘못된 접근입니다.");
      navigate("/login");
    }
  }, [userId, navigate])

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
