import { Link } from "react-router-dom";
import PointAndReviewItem from "./PointAndReviewItem";

interface PointAndReviewPreviewProps {
  points: number;
  reviewCount: number;
}

function PointAndReviewPreview({
  points,
  reviewCount,
}: PointAndReviewPreviewProps) {
  return (
    <Link to="/mypage/point_and_review">
      <div className="flex h-[146px] w-full items-center justify-center border border-black py-[30px]">
        <PointAndReviewItem label="포인트" value={points} unit="p" />
        <PointAndReviewItem label="리뷰" value={reviewCount} unit="건" />
      </div>
    </Link>
  );
}

export default PointAndReviewPreview;
