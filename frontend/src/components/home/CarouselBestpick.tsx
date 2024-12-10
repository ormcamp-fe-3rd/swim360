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
import { Product } from "@/types/products";

const bestpicks: Product[] = [
  {
    id: 1,
    name: "test",
    price: 1,
    discountedPrice: 0,
    size: "s",
    imageUrl: "/images/home/banner-1.png",
    salesVolume: 1,
    stock: 10,
    categoryId: 1,
    discountId: 2,
  },
  {
    id: 2,
    name: "test",
    price: 1,
    discountedPrice: 0,
    size: "s",
    imageUrl: "/images/home/banner-1.png",
    salesVolume: 1,
    stock: 10,
    categoryId: 1,
    discountId: 2,
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
      className="relative h-full w-2/3"
      onClick={plugin.current.stop}
    >
      <CarouselContent>
        {bestpicks.map((product) => (
          <CarouselItem key={product.id}>
            <div>
              <Card>
                <CardContent className="h-full w-full">
                  <img
                    className="h-full w-full object-contain"
                    src={product.imageUrl}
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
