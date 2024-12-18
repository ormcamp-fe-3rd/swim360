import ReviewStar from "./ReviewsStar";

type ReviewsType = {
  size?: "small" | "large"; // 크기 옵션
};

function Reviews({ size = "large" }: ReviewsType) {
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
            <p className="font-light">
              최근에 이 사각 수영복을 구매했는데, 정말 만족스럽습니다! 핏이 딱
              좋아요—몸에 딱 맞으면서도 답답하지 않습니다. 소재는 내구성이
              있으면서도 편안하고, 물놀이 후에도 금방 마르더라고요. 몇 번
              입어봤는데도 색상이 전혀 바래지 않았습니다. 디자인도 세련돼서 정말
              마음에 들어요. 강력 추천합니다!
            </p>
            {/* 라지 사이즈일 때만 이미지 보이도록 조건부 렌더링 */}
            {size === "large" && (
              <div className="h-40 w-40 overflow-hidden bg-black object-cover pb-2">
                <img
                  src="/public/images/product/swimsuit-back.jpg"
                  alt="수영복 뒷모습"
                />
              </div>
            )}
          </div>
        </div>
        <div className="flex justify-start gap-2 pb-2 text-[12px] font-medium text-[#B0B0B0]">
          <p>김**</p>
          <p>| 2000.00.00</p>
        </div>
      </div>
    </div>
  );
}

export default Reviews;
