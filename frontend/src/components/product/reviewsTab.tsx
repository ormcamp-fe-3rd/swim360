import ReviewStar from "./ReviewStar";
import ReviewWriteModal from "./ReviewWriteModal";
import ReviewDetailModal from "./ReviewDetailModal";
import { useState } from "react";
import { Link } from "react-router-dom";
import ProductTab from "./Tap";
import Review from "./Review";
import { ProductDetail } from "@/types/products";

function ReviewsTab({ reviews, product }: ProductDetail) {
  const [isOpenModal, setOpenModal] = useState(false);
  const [isOpenModal2, setOpenModal2] = useState(false);

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
          <ReviewStar rating={0} />
          <div className="flex">
            <p>0.00</p>
            <p>/5</p>
          </div>
        </div>
        <Link to="/product/review" className="w-full">
          <div className="mx-auto flex h-auto w-full justify-center"></div>
        </Link>
        <div onClick={onClickToggleDetailModal}>
          {reviews?.map((review) => <Review key={review.id} review={review} />)}
        </div>

        {/* 모달이 열리면 ReviewWriteModal 컴포넌트를 렌더링 */}
        {isOpenModal && (
          <ReviewWriteModal onClickToggleModal={onClickToggleModal} />
        )}

        {isOpenModal2 && (
          <ReviewDetailModal
            onClickToggleDetailModal={onClickToggleDetailModal}
          />
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
