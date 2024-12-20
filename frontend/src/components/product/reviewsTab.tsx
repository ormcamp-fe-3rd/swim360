import ReviewStar from "./ReviewStar";
import ReviewWriteModal from "./ReviewWriteModal";
import ReviewDetailModal from "./ReviewDetailModal";
import { PaginationDemo } from "../common/Paginaion";
import { useState } from "react";
import { Link } from "react-router-dom";
import ProductTab from "./Tap";
import Review from "./Review";

function ReviewsTab() {
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
          <ReviewStar />
          <div className="flex">
            <p>0.00</p>
            <p>/5</p>
          </div>
        </div>
        <Link to="/product/review" className="w-full">
          <div className="mx-auto flex h-auto w-full justify-center">
            <div className="mb-2 mt-8 flex h-auto w-full max-w-[1064px] justify-end">
              <button
                id="ReviewButton"
                className="flex h-[50px] w-[164px] items-center justify-center gap-2 rounded-xl bg-black text-[24px] text-white"
                onClick={onClickToggleModal}
              >
                <img src="/public/images/icon-reviews.png" />
                후기 등록
              </button>
            </div>
          </div>
        </Link>

        <Review
          name={"dsdf"}
          emailId={"62"}
          phoneNumber={"85"}
          password={"252"}
          adress={"asdad"}
          content={"adad"}
          imageUrl={"adasd"}
          rating={0}
          product_id={0}
          user_id={0}
          updatedAt={"3"}
          createdAt={"5"}
        />
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

        <div className="mt-9">
          <PaginationDemo />
        </div>
      </div>
    </>
  );
}
export default ReviewsTab;
