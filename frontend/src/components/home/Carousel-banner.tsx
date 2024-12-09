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
    img: "",
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
      opts={{align: "start", loop: true}}
      plugins={[plugin.current]}
      className="w-full max-w-[1440px]"
      onClick={plugin.current.stop}
      // onMouseEnter={plugin.current.stop}
      // onMouseLeave={plugin.current.reset}
    >
      <CarouselContent>
        {banners.map((banner) => ( 
          <CarouselItem key={banner.id} className="basis-1/2">
            <div className="px-5 py-[86px]">
              <Card>
                <CardContent className="flex h-[705px] items-center justify-center">
                  <img src={banner.img} alt=""/>
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
