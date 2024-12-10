import Autoplay from "embla-carousel-autoplay";
import * as React from "react";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const banners = [
  {
    id: 1,
    img: "/images/home/banner-1.png",
  },
  {
    id: 2,
    img: "/images/home/banner-1.png",
  },
  {
    id: 3,
    img: "/images/home/banner-1.png",
  },
  {
    id: 4,
    img: "/images/home/banner-1.png",
  },
  {
    id: 5,
    img: "/images/home/banner-1.png",
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
      className="relative my-[86px] h-fit w-full desktop:h-[705px] desktop:w-[1440px]"
      onClick={plugin.current.stop}
      // onMouseEnter={plugin.current.stop}
      // onMouseLeave={plugin.current.reset}
    >
      <CarouselContent>
        {banners.map((banner) => (
          <CarouselItem key={banner.id} className="basis-1/2">
            <div className="">
              <Card>
                <CardContent className="flex items-center justify-center">
                  <img className="object-contain" src={banner.img} alt="" />
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
