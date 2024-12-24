import { Reviews } from "@/types/reviews";
import Review from "./Review";

import { Carousel, CarouselContent, CarouselItem } from "../ui/carousel";

interface ReviewModalProps {
  review: Reviews | undefined;
  onClickToggleDetailModal: () => void; // 함수명 변경: 더 명확하게 표현
}

function ReviewDetailModal({
  review,
  onClickToggleDetailModal,
}: ReviewModalProps) {
  return (
    <>
      {/* Modal Container */}
      <div
        className="fixed left-1/2 top-1/2 z-50 w-full max-w-[1024px] -translate-x-1/2 -translate-y-1/2 transform rounded-xl shadow-lg"
        onClick={(e) => e.stopPropagation()} // 내부 클릭 시 이벤트 전파 방지
      >
        <div className="flex flex-col sm:flex-row">
          {/* Carousel Section */}
          <div className="relative mx-auto flex w-full items-center justify-center rounded-l-xl bg-black text-white sm:max-w-[400px] lg:max-w-[706px]">
            <Carousel className="z-50 flex h-full w-full items-center justify-between">
              <CarouselContent>
                <CarouselItem className="flex w-full items-center justify-center">
                  {review?.imageUrl ? (
                    <img
                      className="w-auto max-w-full rounded-l-xl object-contain"
                      src={review.imageUrl}
                      alt="review-image"
                    />
                  ) : (
                    <div className="flex h-full w-full items-center justify-center text-sm text-gray-300">
                      첨부된 이미지가 없습니다
                    </div>
                  )}
                </CarouselItem>
              </CarouselContent>
            </Carousel>
          </div>

          {/* Modal Content Section */}
          <div className="relative flex w-full flex-col items-center justify-start rounded-r-xl bg-white p-6">
            <div className="mb-4 flex w-full items-center justify-between">
              <p className="w-full border-b-2 border-black text-center text-lg">
                후기작성
              </p>
              <button
                onClick={(e) => {
                  e.stopPropagation(); // 클릭 이벤트 전파 방지
                  onClickToggleDetailModal();
                }}
                className="absolute right-4 top-4"
              >
                <img
                  className="h-6 w-6 sm:h-8 sm:w-8"
                  src="/public/images/common/btn-close.png"
                  alt="close"
                />
              </button>
            </div>

            {/* Reviews Component */}
            <div className="w-full">
              <Review size="small" review={review} />
            </div>
          </div>
        </div>
      </div>

      {/* Background Overlay */}
      <div
        className="fixed left-0 top-0 z-40 h-full w-full bg-black bg-opacity-55"
        onClick={onClickToggleDetailModal} // 배경 클릭 시 모달 닫힘
      ></div>
    </>
  );
}

export default ReviewDetailModal;
