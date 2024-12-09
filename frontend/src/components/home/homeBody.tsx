import BestPick from "./BestPick";
import { CarouselPlugin } from "./Carousel-banner";

export default function HomeBody() {
  return (
    <div className="mt-[100lvh] flex h-full w-full flex-col items-center bg-white">
      <CarouselPlugin />
      <BestPick />
    </div>
  );
}
