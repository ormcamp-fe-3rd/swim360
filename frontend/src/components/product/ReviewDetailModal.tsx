import Reviews from "./Review";
import { Link } from "react-router-dom";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNextCustomBlack,
  CarouselPreviousCustomBlack,
} from "../ui/carousel";

interface ReviewModalProps2 {
  onClickToggleDetailModal: () => void;
}

function ReviewDetailModal({ onClickToggleDetailModal }: ReviewModalProps2) {
  return (
    <>
      <div className="fixed left-1/2 top-1/2 z-50 w-full -translate-x-1/2 -translate-y-1/2 transform sm:max-w-[600px] md:max-w-[800px] lg:max-w-[1024px]">
        <div className="flex flex-col sm:flex-row">
          {/* Carousel Section */}
          <div className="relative mx-auto flex w-full items-center justify-center rounded-l-xl bg-black sm:max-w-[400px] lg:max-w-[706px]">
            <Carousel className="z-50 mx-auto flex h-full w-full items-center justify-between">
              <CarouselPreviousCustomBlack className="absolute left-2 z-10" />
              <CarouselContent>
                <CarouselItem>
                  <img
                    className="h-auto w-auto max-w-full rounded-l-xl object-contain"
                    src="/public/images/product/swimsuit-front2.jpg"
                    alt="review-image"
                  />
                </CarouselItem>
                <CarouselItem>
                  <img
                    className="h-auto w-auto max-w-full rounded-l-xl object-contain"
                    src="/public/images/product/swimsuit-back.jpg"
                    alt="review-image"
                  />
                </CarouselItem>
                <CarouselItem>
                  <img
                    className="h-auto w-auto max-w-full rounded-l-xl object-contain"
                    src="/public/images/product/swimsuit-front.jpg"
                    alt="review-image"
                  />
                </CarouselItem>
              </CarouselContent>
              <CarouselNextCustomBlack className="absolute right-2" />
            </Carousel>
          </div>

          {/* Modal Content Section */}
          <div className="rounded-l-0 relative mx-auto flex w-full flex-col items-center justify-start rounded-r-xl border-2 bg-white p-6 sm:h-auto">
            <div className="mx-auto mb-4 flex w-full justify-center">
              <p className="w-full border-b-2 border-black text-center text-sm sm:text-lg lg:text-xl">
                후기작성
              </p>
              <Link to="/product/${product.id}">
                <button
                  onClick={onClickToggleDetailModal}
                  className="absolute right-4 top-4 sm:right-6 sm:top-6"
                >
                  <img
                    className="h-6 w-6 bg-slate-50 sm:h-8 sm:w-8"
                    src="/public/images/common/btn-close.png"
                    alt="close"
                  />
                </button>
              </Link>
            </div>

            {/* Reviews Component */}
            <div className="w-full">
              <Reviews size="small" />
            </div>
            <button className="mt-6 h-[50px] w-[200px] rounded-[8px] bg-black text-white sm:h-[45px] sm:w-[160px] lg:h-[50px] lg:w-[200px]">
              수정하기
            </button>
          </div>
        </div>
      </div>
      {/* Background Overlay */}
      <div className="fixed left-0 top-0 h-full w-full bg-black bg-opacity-55"></div>
    </>
  );
}

export default ReviewDetailModal;
