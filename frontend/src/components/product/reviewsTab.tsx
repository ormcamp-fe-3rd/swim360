import ReviewStar from "./ReviewStar";
import ReviewWriteModal from "./ReviewWriteModal";
import ReviewDetailModal from "./ReviewDetailModal";
import { PaginationDemo } from "../common/Paginaion";
import { useState } from "react";
import Reviews from "./Reviews";
import { Link } from "react-router-dom";
import ProductTab from "./Tap";

function ReviewsTab() {
  const [isOpenModal, setOpenModal] = useState(false);
  const [isOpenModal2, setOpenModal2] = useState(false);

  const onClickToggleModal = () => {
    setOpenModal(!isOpenModal);
    console.log("실행됨됨");
  };

  const onClickToggleModal2 = () => {
    setOpenModal2(!isOpenModal2);
    console.log("실행됨됨");
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

        {/* 모달이 열리면 ReviewWriteModal 컴포넌트를 렌더링 */}
        {isOpenModal && (
          <ReviewWriteModal onClickToggleModal={onClickToggleModal} />
        )}

        {isOpenModal2 && (
          <ReviewDetailModal onClickToggleModal2={onClickToggleModal2} />
        )}

        <div
          onClick={onClickToggleModal2}
          className="mx-auto flex w-full max-w-[1064px] flex-wrap items-center justify-center"
        >
          <div onClick={onClickToggleModal2} className="hover:bg-slate-100">
            <Reviews />
          </div>
          <div onClick={onClickToggleModal2} className="hover:bg-slate-100">
            <Reviews />
          </div>
          <div onClick={onClickToggleModal2} className="hover:bg-slate-100">
            <Reviews />
          </div>
          <div onClick={onClickToggleModal2} className="hover:bg-slate-100">
            <Reviews />
          </div>
          <div onClick={onClickToggleModal2} className="hover:bg-slate-100">
            <Reviews />
          </div>
          <div onClick={onClickToggleModal2} className="hover:bg-slate-100">
            <Reviews />
          </div>
        </div>

        <div className="mt-9">
          <PaginationDemo />
        </div>
      </div>
    </>
  );
}
export default ReviewsTab;
