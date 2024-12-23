import ReviewStar from "./ReviewStar";
import { Reviews } from "@/types/reviews";

export type ReviewsType = {
  review: Reviews | undefined;
  size?: "small" | "large" | undefined; // 크기 옵션
};

function Review({ size = "large", review }: ReviewsType) {
  const sizeStyles = {
    small: "w-full min-h-[200px]",
    large: "w-[1064px] min-h-[196px]",
  };

  return (
    <div
      className={`container ${sizeStyles[size]} flex items-center border-b py-2`}
    >
      <div className="flex flex-col">
        <ReviewStar size="small" rating={review?.rating || 0} />
        <div className="flex justify-between">
          <div className="flex flex-col gap-2">
            <p className="font-light">{review?.content}</p>
            {/* 라지 사이즈일 때만 이미지 보이도록 조건부 렌더링 */}
            {size === "large" && (
              <div className="h-40 w-40 overflow-hidden bg-black object-cover pb-2">
                <img src={review?.imageUrl} alt="수영복 뒷모습" />
              </div>
            )}
          </div>
        </div>
        <div className="flex justify-start gap-2 pb-2 text-[12px] font-medium text-[#B0B0B0]">
          <p>|{review?.createdAt}</p>
          <p>|{review?.updatedAt}</p>
        </div>
      </div>
    </div>
  );
}

export default Review;
