import ReviewStar from "./ReviewStar";

import { CombinedReviewType } from "@/types/reviews";

type ReviewsType = {
  size?: "small" | "large"; // 크기 옵션
} & CombinedReviewType;

function Review({
  size = "large",
  name,
  content,
  imageUrl,
  updatedAt,
}: ReviewsType) {
  // sizeStyles로 동적 클래스 적용
  const sizeStyles = {
    small: "w-full min-h-[200px]",
    large: "w-[1064px] min-h-[196px]",
  };

  return (
    <div
      className={`container ${sizeStyles[size]} flex items-center border-b py-2`}
    >
      <div className="flex flex-col">
        <ReviewStar size="small" />
        <div className="flex justify-between">
          <div className="flex flex-col gap-2">
            <div className="flex pt-2 text-[18px] font-medium">
              <p>사이즈:</p>
              <p> 000 </p>
            </div>
            <p className="font-light">{content}</p>
            {/* 라지 사이즈일 때만 이미지 보이도록 조건부 렌더링 */}
            {size === "large" && (
              <div className="h-40 w-40 overflow-hidden bg-black object-cover pb-2">
                <img src={imageUrl} alt="수영복 뒷모습" />
              </div>
            )}
          </div>
        </div>
        <div className="flex justify-start gap-2 pb-2 text-[12px] font-medium text-[#B0B0B0]">
          <p>{name}</p>
          <p>|{updatedAt}</p>
        </div>
      </div>
    </div>
  );
}

export default Review;
