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
    img: "",
  },
  {
    id: 3,
    img: "",
  },
  {
    id: 4,
    img: "",
  },
  {
    id: 5,
    img: "",
  },
];
export function CarouselPlugin() {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true }),
  );

  return (
    <Carousel
      opts={{ align: "start", loop: true }}
      plugins={[plugin.current]}
      className="px-5 h-[705px] my-[86px] w-full max-w-[1440px] relative"
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
                  <img className="h-full" src={banner.img} alt="" />
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <div className="flex items-center justify-between absolute top-[327px] gap-[1188px]">
        <CarouselPrevious />
        <CarouselNext />
      </div>
    </Carousel>
  );
}
