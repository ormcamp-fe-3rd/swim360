import ReviewStar from "./ReviewStar";
import { Reviews } from "@/types/reviews";
import getLocalDate from "@/utils/getLocalDate";

export type ReviewsType = {
  review: Reviews | undefined;
  size?: "small" | "large" | undefined; // 크기 옵션
  onClickSelecteReview?: (review: Reviews | undefined) => void;
};

function Review({ size = "large", review, onClickSelecteReview }: ReviewsType) {
  const sizeStyles = {
    small: "w-full min-h-[200px]",
    large: "w-[1064px] min-h-[196px]",
  };

  if (!review) {
    return <div>리뷰 업로드에 문제가 생겼습니다.</div>;
  }

  const maxLength = 20; // 텍스트 자를 길이 설정
  const truncatedContent = review.content.slice(0, maxLength); // 잘라낼 텍스트

  return (
    <div
      onClick={() => {
        if (!onClickSelecteReview) return;
        onClickSelecteReview(review);
      }}
      className={`container ${sizeStyles[size]} flex items-center border-b py-2`}
    >
      <div className="flex flex-col">
        <ReviewStar size="small" rating={review?.rating || 0} />
        <div className="flex justify-between">
          <div className="flex flex-col gap-2">
            {/* 텍스트 자르기 */}
            <p className="limit-text font-light">
              {size === "large" && review.content.length > maxLength
                ? `${truncatedContent}...` // 자르고 '...' 추가
                : review.content}{" "}
              {/* size가 large일 때만 "자세히 보기" 버튼을 표시 */}
              {size === "large" && review.content.length > maxLength && (
                <button className="cursor-pointer text-slate-500">
                  자세히 보기
                </button>
              )}
            </p>
            {/* 라지 사이즈일 때만 이미지 보이도록 조건부 렌더링 */}
            {size === "large" && review?.imageUrl && (
              <div className="h-40 w-40 overflow-hidden bg-black object-cover pb-2">
                <img src={review?.imageUrl} alt="수영복 뒷모습" />
              </div>
            )}
          </div>
        </div>
        <div className="flex justify-start gap-2 pb-2 text-[12px] font-medium text-[#B0B0B0]">
          <p>{getLocalDate(review?.createdAt)}</p>
        </div>
      </div>
    </div>
  );
}

export default Review;
