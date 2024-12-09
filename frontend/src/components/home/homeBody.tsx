import BestPick from "./BestPick";
import { CarouselBanner } from "./CarouselBanner";

export default function HomeBody() {
  return (
    <div className="mt-[100lvh] flex h-full w-full flex-col items-center bg-white">
      <CarouselBanner />
      <BestPick />
    </div>
  );
}
