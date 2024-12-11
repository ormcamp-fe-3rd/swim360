import Autoplay from "embla-carousel-autoplay";
import * as React from "react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel-origin";

const bestpicks = [
  {
    id: 0,
    brandName: "barrel",
    name: "여성 수영복 1",
    imageUrl: "/public/images/productlist/sample-1.png",
    price: 10000,
    discountedPrice: 5000,
    salesVolume: 50,
  },
  {
    id: 1,
    brandName: "barrel",
    name: "여성 수영복 1",
    imageUrl: "/public/images/productlist/sample-1.png",
    price: 10000,
    discountedPrice: 5000,
    salesVolume: 50,
  },
  {
    id: 2,
    brandName: "barrel",
    name: "여성 수영복 1",
    imageUrl: "/public/images/productlist/sample-1.png",
    price: 10000,
    discountedPrice: 5000,
    salesVolume: 50,
  },
  {
    id: 3,
    brandName: "barrel",
    name: "여성 수영복 1",
    imageUrl: "/public/images/productlist/sample-1.png",
    price: 10000,
    discountedPrice: 5000,
    salesVolume: 50,
  },
];

export function CarouselBestPick() {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true }),
  );

  return (
    <Carousel
      opts={{ align: "start", loop: true }}
      plugins={[plugin.current]}
      className="relative h-full w-full "
      onClick={plugin.current.stop}
    >
      <CarouselContent>
        {bestpicks.map((product) => (
          <CarouselItem key={product.id} className="flex justify-center items-center">
            <div className="rounded-none border-none shadow-none">
              <img src={product.imageUrl} alt={product.name} />
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
