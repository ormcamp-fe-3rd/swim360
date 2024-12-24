import ReviewWriteModal from "./ReviewWriteModal";
import ReviewDetailModal from "./ReviewDetailModal";
import { useState } from "react";
import { Link } from "react-router-dom";
import ProductTab from "./Tap";
import Review from "./Review";
import { ProductDetail } from "@/types/products";
import { AverageRating } from "./AverageRating";
import { Reviews } from "@/types/reviews";

function ReviewsTab({ reviews }: ProductDetail) {
  const [isOpenModal, setOpenModal] = useState(false);
  const [isOpenModal2, setOpenModal2] = useState(false);

  const [selectedReview, setSelectedReview] = useState<Reviews>();

  const onClickSelecteReview = (review: Reviews | undefined) => {
    setSelectedReview(review);
  };

  const onClickToggleModal = () => {
    setOpenModal(!isOpenModal);
  };

  const onClickToggleDetailModal = () => {
    setOpenModal2(!isOpenModal2);
  };

  return (
    <>
      <div id="reviewsTab">
        <ProductTab activeCategory="reviewsTab" />
      </div>
      <div className="mx-auto flex w-full max-w-[1064px] flex-col items-center justify-center">
        <div className="mx-auto flex h-[250px] w-full max-w-[1064px] flex-col items-center justify-center bg-[#f6f9ff]">
          <p className="h-16">사용자 총 평점</p>
          <AverageRating reviews={reviews} />
        </div>
        <Link to="/product/review" className="w-full">
          <div className="mx-auto flex h-auto w-full justify-center"></div>
        </Link>
        <div onClick={onClickToggleDetailModal}>
          {reviews?.map((review) => (
            <div key={review.id}>
              <Review
                key={review.id}
                review={review}
                onClickSelecteReview={onClickSelecteReview}
              />

              {isOpenModal2 && (
                <ReviewDetailModal
                  review={selectedReview}
                  onClickToggleDetailModal={onClickToggleDetailModal}
                />
              )}
            </div>
          ))}
        </div>

        {/* 모달이 열리면 ReviewWriteModal 컴포넌트를 렌더링 */}
        {isOpenModal && (
          <ReviewWriteModal onClickToggleModal={onClickToggleModal} />
        )}

        <div
          onClick={onClickToggleDetailModal}
          className="mx-auto flex w-full max-w-[1064px] flex-wrap items-center justify-center"
        >
          <div
            onClick={onClickToggleDetailModal}
            className="hover:bg-slate-100"
          ></div>
        </div>
      </div>
    </>
  );
}
export default ReviewsTab;
