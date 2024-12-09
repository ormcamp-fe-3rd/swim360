import { Link } from "react-router-dom";

interface UserPointAndReviewPreviewProps {
  reviewCount: number;
}

function UserPointAndReviewPreview({
  reviewCount,
}: UserPointAndReviewPreviewProps) {
  return (
    <Link to="/reviews">
      <div className="flex h-[146px] w-full items-center justify-center border-[1px] border-[#000000] py-[30px]">
        <div className="flex w-full flex-col items-center text-xl font-semibold">
          <div className="mb-11">포인트</div>
          <div>150p</div>
        </div>

        <div className="flex w-full flex-col items-center text-xl font-semibold">
          <div className="mb-11">리뷰</div>
          <div>{reviewCount}건</div>
        </div>
      </div>
    </Link>
  );
}

export default UserPointAndReviewPreview;
