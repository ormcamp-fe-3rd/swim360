import { CarouselPlugin } from "./carousel-infinite";

export default function HomeBody() {
  return (
    <div className="absolute top-[100lvh] flex h-full w-full flex-col items-center bg-white">
      <CarouselPlugin />
    </div>
  );
}
