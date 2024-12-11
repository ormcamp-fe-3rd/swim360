
import React, { PropsWithChildren } from "react";
import Reviews from "./Reviews";

import { Card } from "../ui/card";
import { CardContent } from "../ui/card";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";

interface ModalDefaultType {
  onClickToggleModal: () => void;
}

function ReviewDetailModal() {
  return (
    <>
      <div className="fixed left-1/2 top-1/2 z-50 -translate-x-1/2 -translate-y-1/2 transform">
        <div className="flex">
          <div className="mx-auto flex h-[652px] w-[706px] items-center justify-center bg-black">
            <Carousel className="z-50 mx-auto flex h-[652px] w-[706px] items-center justify-between">
              <CarouselPrevious />
              <CarouselContent>
                <CarouselItem>
                  <img
                    className="h-fit w-fit"
                    src="/public/images/product/review-star-selected"
                  />
                </CarouselItem>
                <CarouselItem>
                  <img
                    className="h-fit w-fit"
                    src="/public/images/product/review-star-selected"
                  />
                </CarouselItem>
                <CarouselItem>
                  <img
                    className="h-fit w-fit"
                    src="/public/images/product/review-star-selected"
                  />
                </CarouselItem>
              </CarouselContent>
              <CarouselNext />
            </Carousel>
          </div>
          <div className="position: relative mx-auto flex h-[652px] w-[560px] flex-col items-center justify-start rounded-2xl border-2 border-[#D9D9D9] bg-white p-10">
            <div className="mx-auto flex w-[500px] justify-center">
              <p className="w-[600px] border-b-2 border-black text-center">
                후기작성
              </p>
              <button>
                <img
                  className="absolute right-10 top-10 h-8 w-8"
                  src="/public/images/common/btn-close.png"
                />
              </button>
            </div>

            <Reviews size="small" />

            <button className="mt-10 h-[50px] w-[200px] rounded-[8px] bg-black text-white">
              수정하기
            </button>
          </div>
        </div>
      </div>
      <div className="fixed left-0 top-0 h-full w-full bg-black bg-opacity-55"></div>
    </>
  );
}
export default ReviewDetailModal;
