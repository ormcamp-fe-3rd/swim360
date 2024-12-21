import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { Product } from "@/types/products";
import { CombinedReviewType } from "@/types/reviews";

function useReview() {
  const { id } = useParams<{ id: string }>();
  return;
}
export default useReview;
