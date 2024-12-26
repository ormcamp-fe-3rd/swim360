import Autoplay from "embla-carousel-autoplay";
import * as React from "react";
import { Link } from "react-router-dom";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel-origin";
import { ProductItemData } from "@/types/products";

interface Props {
  products: ProductItemData[];
}

export function CarouselBestPick({ products }: Props) {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true }),
  );

  return (
    <Carousel
      opts={{ align: "start", loop: true }}
      plugins={[plugin.current]}
      className="relative h-full w-full"
      onClick={plugin.current.stop}
    >
      <CarouselContent>
        {products.map((product) => (
          <CarouselItem
            key={product.id}
            className="flex items-center justify-center"
          >
            <Link to={`/product/${product.id}`}>
              <div className="rounded-none border-none shadow-none">
                <img src={product.imageUrl} alt={product.name} />
              </div>
            </Link>
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
