type ReviewStarProps = {
    size?: "small" | "large"; // 크기 옵션
  };
  
  function ReviewStar({ size = "large" }: ReviewStarProps) {
    // size에 따라 스타일 설정
    const sizeStyles = {
      small: { container: "w-6 h-6 flex items-center justify-center gap-0", image: "w-6 h-6" },
      large: { container: "w-16 h-16 flex items-center justify-center", image: "w-11 h-[42px]" },
    };
  
    const styles = sizeStyles[size];
  
    return (
      <div className="flex gap-2">
        {[...Array(5)].map((_, i) => (
          <div key={i} className={styles.container}>
            <img className={styles.image} src="/public/images/review-star-none.png" alt="Review Star" />
          </div>
          
        ))}
      </div>
    );
  }
  
  export default ReviewStar;
  