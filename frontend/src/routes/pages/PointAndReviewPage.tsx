import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import PointAndReviewTab from "@/components/mypage/PointAndReview";
import { useUserId } from "@/hooks/useUserId";

export default function PointAndReviewPage() {
  const { userId } = useUserId();
  const navigate = useNavigate();

  useEffect(()=>{
    if(!userId){
      alert("잘못된 접근입니다.");
      navigate("/login");
    }
  },[userId, navigate])

  return (
    <div className="mx-auto w-full px-2 tablet:max-w-[1440px] tablet:px-20">
      <PointAndReviewTab />
    </div>
  );
}
