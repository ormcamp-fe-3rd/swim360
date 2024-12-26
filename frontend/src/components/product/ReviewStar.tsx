type ReviewStarProps = {
  size?: "small" | "large"; // 크기 옵션
  rating: number; // 별점 (1 ~ 5)
};

function ReviewStar({ size = "large", rating }: ReviewStarProps) {
  // size에 따라 스타일 설정
  const sizeStyles = {
    small: {
      container:
        "w-full h-auto tablet:w-6 tablet:h-6 flex items-center justify-center gap-0",
      image: "w-6 h-6",
    },
    large: {
      container:
        "w-full h-auto tablet:w-16 tablet:h-16 flex items-center justify-center",
      image: "w-11 h-[42px]",
    },
  };

  const styles = sizeStyles[size];

  return (
    <div className="flex gap-2">
      {[...Array(5)].map((_, i) => (
        <div key={i} className={styles.container}>
          <img
            className={styles.image}
            src={
              i < rating
                ? "/public/images/product/review-star-selected.png" // 선택된 별
                : "/public/images/product/review-star-none.png" // 비선택된 별
            }
            alt={`별점 ${i + 1} ${i < rating ? "선택됨" : "선택되지 않음"}`}
          />
        </div>
      ))}
    </div>
  );
}

export default ReviewStar;
