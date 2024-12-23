import { Reviews } from "@/types/reviews";
import ReviewStar from "./ReviewStar";

interface AverageRatingProp {
  reviews: Reviews[] | undefined;
}

export function AverageRating({ reviews }: AverageRatingProp) {
  let totalRating =
    reviews?.reduce((sum, review) => sum + review.rating, 0) ?? 0;
  let averageRating = Math.floor(totalRating / (reviews?.length ?? 0));

  return (
    <>
      <ReviewStar rating={averageRating} />
      <div className="flex">
        <p>{averageRating}</p>
        <p>/5</p>
      </div>
    </>
  );
}
