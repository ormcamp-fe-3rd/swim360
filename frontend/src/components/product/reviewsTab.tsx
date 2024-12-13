import ReviewStar from "./ReviewsStar";
import ReviewWriteModal from "./ReviewWriteModal";
import ReviewDetailModal from "./ReviewDetailModal";
import { PaginationDemo } from "../common/Paginaion";
import { useState } from "react";
import Reviews from "./Reviews";
import { Link } from "react-router-dom";

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
      <div className="mx-auto mb-8 mt-16 flex w-full justify-center">
        <a
          href="#detailsTab"
          className="flex h-[44px] w-[266px] flex-wrap items-center justify-center border-b-2 border-[#CCCCCC] text-sm font-extralight sm:text-[24px]"
        >
          상품상세정보
        </a>
        <a
          href="#reviewsTab"
          id="reviewsTab"
          className="flex h-[44px] w-[266px] flex-wrap items-center justify-center border-b-2 border-black text-base font-medium sm:text-[24px]"
        >
          상품후기(0)
        </a>
        <a
          href="#qnasTab"
          className="flex h-[44px] w-[266px] flex-wrap items-center justify-center border-b-2 border-[#CCCCCC] text-sm font-extralight sm:text-[24px]"
        >
          자주하는 질문
        </a>
        <a
          href="#exchangeTab"
          className="flex h-[44px] w-[266px] flex-wrap items-center justify-center border-b-2 border-[#CCCCCC] text-sm font-extralight sm:text-[24px]"
        >
          교환/반품
        </a>
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
          <div className="mx-auto flex w-full justify-center">
            <div className="mb-2 mt-8 flex w-full max-w-[1064px] justify-end">
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
