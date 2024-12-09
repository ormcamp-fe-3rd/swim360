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

const bestpicks: Product[] = []


export function CarouselBestPick() {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true }),
  );

  return (
    <Carousel
      opts={{ align: "start", loop: true }}
      plugins={[plugin.current]}
      className="w-[738px] h-[768px]"
      onClick={plugin.current.stop}
    >
      <CarouselContent>
        {bestpicks.map((product) => (
          <CarouselItem key={product.id}>
            <div className="p-1">
              <Card>
                <CardContent className="flex items-center justify-center">
                  <img src={product.imageUrl} alt="" />
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
