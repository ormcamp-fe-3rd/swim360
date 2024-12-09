import BestPick from "./BestPick";
import { CarouselBanner } from "./CarouselBanner";

export default function HomeBody() {
  return (
    <main className="mt-[30svh] tablet:mt-[60svh] flex h-full w-full flex-col items-center bg-white">
      <CarouselBanner />
      <BestPick />
    </main>
  );
}
