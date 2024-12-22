import Autoplay from "embla-carousel-autoplay";
import * as React from "react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel-origin";
import { BestProduct } from "@/types/products";

interface Props{
  products: BestProduct[]
}

export function CarouselBestPick({products}: Props) {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true }),
  );

  return (
    <Carousel
      opts={{ align: "start", loop: true }}
      plugins={[plugin.current]}
      className="relative h-full w-full pt-0 tablet:pt-20 desktop:pt-0"
      onClick={plugin.current.stop}
    >
      <CarouselContent>
        {products.map((product) => (
          <CarouselItem
            key={product.id}
            className="flex items-center justify-center"
          >
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
