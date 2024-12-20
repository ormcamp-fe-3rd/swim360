import { useEffect, useState } from "react";
import { Product } from "@/types/products";
import { useParams } from "react-router-dom";
import { CombinedReviewType } from "@/types/reviews";

function useReview() {
  const { id } = useParams<{ id: string }>();
  return;
}
export default useReview;
