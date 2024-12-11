import ReviewStar from "./ReviewsStar";
import ReviewWriteModal from "./ReviewWriteModal";
import ReviewDetailModal from "./ReviewDetailModal";

import { PaginationDemo } from "../common/Paginaion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";
import { useState, useCallback } from "react";

import Reviews from "./Reviews";

function ReviewsTab() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="mx-auto mb-8 mt-16 flex w-full justify-center">
        <a
          href="#detailsTab"
          className="flex h-[44px] w-[266px] justify-center border-b-2 border-[#CCCCCC] text-[24px] font-extralight"
        >
          상품상세정보
        </a>
        <a
          href="#reviewsTab"
          id="reviewsTab"
          className="flex h-[44px] w-[266px] justify-center border-b-2 border-black text-[24px] font-medium"
        >
          상품후기(0)
        </a>
        <a
          href="#qnasTab"
          className="flex h-[44px] w-[266px] justify-center border-b-2 border-[#CCCCCC] text-[24px] font-extralight"
        >
          자주하는 질문
        </a>
        <a
          href="#exchangeTab"
          className="flex h-[44px] w-[266px] justify-center border-b-2 border-[#CCCCCC] text-[24px] font-extralight"
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

        <div className="mx-auto flex w-full justify-center">
          <div className="mb-2 mt-8 flex w-full max-w-[1064px] justify-end">
            <button
              id="ReviewButton"
              onClick={() => setIsOpen(true)}
              className="flex h-[50px] w-[164px] items-center justify-center gap-2 rounded-xl bg-black text-[24px] text-white"
            >
              <img src="/public/images/icon-reviews.png" />
              후기 등록
            </button>
          </div>
        </div>

        <div className="hidden">
          <ReviewDetailModal />
        </div>

        <div className="mx-auto flex w-full max-w-[1064px] flex-wrap justify-center">
          <Reviews />
          <Reviews />
          <Reviews />
          <Reviews />
          <Reviews />
          <Reviews />
        </div>

        <div className="mt-9">
          <PaginationDemo />
        </div>
      </div>
    </>
  );
}
export default ReviewsTab;
