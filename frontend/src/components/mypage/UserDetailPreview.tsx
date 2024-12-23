import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { useUserId } from "@/hooks/useUserId";
import { getReview } from "@/services/user";
import { MyReview } from "@/types/users";

import PointAndReviewItem from "./PointAndReviewItem";

function UserDetailPreview() {
  const { userId } = useUserId();
  const [reviews, setReviews] = useState<MyReview[]>([]);

  useEffect(() => {
    async function fetchReviews() {
      if (!userId) return;
      const myReview = await getReview(userId);
      if (myReview) {
        setReviews(myReview);
      }
    }

    fetchReviews();
  }, []);

  return (
    <Link
      to="/mypage/point_and_review"
      state={{ reviews: reviews }}
    >
      <div className="flex h-[146px] w-full items-center justify-center border border-black py-[30px]">
        <PointAndReviewItem label="포인트" value={300} unit="p" />
        <PointAndReviewItem label="리뷰" value={reviews.length} unit="건" />
      </div>
    </Link>
  );
}

export default UserDetailPreview;
