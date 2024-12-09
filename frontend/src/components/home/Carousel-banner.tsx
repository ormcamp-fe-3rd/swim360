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
    img: "/images/home/banner-2.png",
  },
  {
    id: 3,
    img: "/images/home/banner-3.png",
  },
  {
    id: 4,
    img: "/images/home/banner-4.png",
  },
  {
    id: 5,
    img: "/images/home/banner-5.png",
  },
];
export function CarouselPlugin() {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true }),
  );

  return (
    <Carousel
      opts={{align: "start", loop: true}}
      plugins={[plugin.current]}
      className="h-[705px] w-full max-w-[1440px]"
      onClick={plugin.current.stop}
      // onMouseEnter={plugin.current.stop}
      // onMouseLeave={plugin.current.reset}
    >
      <CarouselContent>
        {banners.map((banner) => ( 
          <CarouselItem key={banner.id} className="basis-1/2">
            <div className="p-[4.75rem]">
              <Card>
                <CardContent className="flex h-[705px] w-[630px] items-center justify-center">
                  <img src={banner.img} alt="" className="h-full w-full"/>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
          
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
