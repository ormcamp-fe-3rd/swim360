import { Reviews } from "@/types/reviews";
import ReviewStar from "./ReviewStar";

interface AverageRatingProp {
  reviews: Reviews[] | undefined;
}

export function AverageRating({ reviews }: AverageRatingProp) {
  // 리뷰가 없을 경우 기본값 처리
  if (!reviews || reviews.length === 0) {
    return (
      <div className="flex flex-col items-center">
        <ReviewStar rating={0} /> {/* 기본 별점 0 */}
        <div className="flex">
          <p>0</p>
          <p>/5</p>
        </div>
        <p className="mt-2">작성된 리뷰가 없습니다</p>
      </div>
    );
  }

  // 총합과 평균 계산
  const totalRating = reviews.reduce((sum, review) => sum + review.rating, 0);
  const averageRating = Math.round(totalRating / reviews.length);

  return (
    <div className="flex flex-col items-center">
      <ReviewStar rating={averageRating} />
      <div className="flex">
        <p>{averageRating}</p>
        <p>/5</p>
      </div>
    </div>
  );
}
