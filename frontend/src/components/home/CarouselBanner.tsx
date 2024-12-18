import Autoplay from "embla-carousel-autoplay";
import * as React from "react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import { Card, CardContent } from "../ui/card";

const banners = [
  {
    id: 1,
    img: "/images/home/banner-01.png",
  },
  {
    id: 2,
    img: "/images/home/banner-02.png",
  },
  {
    id: 3,
    img: "/images/home/banner-03.png",
  },
  {
    id: 4,
    img: "/images/home/banner-04.png",
  },
  {
    id: 5,
    img: "/images/home/banner-05.png",
  },
  {
    id: 6,
    img: "/images/home/banner-06.png",
  },
  {
    id: 7,
    img: "/images/home/banner-07.png",
  },
  {
    id: 8,
    img: "/images/home/banner-08.png",
  },
  {
    id: 9,
    img: "/images/home/banner-09.png",
  },
];

export function CarouselBanner() {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true }),
  );

  return (
    <Carousel
      opts={{ align: "start", loop: true }}
      plugins={[plugin.current]}
      className="relative my-[86px] w-full desktop:w-[1440px]"
      onClick={plugin.current.stop}
    >
      <CarouselContent>
        {banners.map((banner) => (
          <CarouselItem
            key={banner.id}
            className="h-full w-full tablet:basis-1/2"
          >
            <div className="">
              <Card className="h-full w-full rounded-none border-none shadow-none">
                <CardContent className="flex w-full items-center justify-center p-5 h-80 tablet:h-[705px]">
                  <img
                    className="h-full w-full object-cover"
                    src={banner.img}
                    alt=""
                  />
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <div className="absolute top-1/2 flex w-full items-center justify-between">
        <CarouselPrevious />
        <CarouselNext />
      </div>
    </Carousel>
  );
}
