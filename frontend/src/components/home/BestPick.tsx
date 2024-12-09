import { CarouselBestPick } from "./Carousel-bestpick";

export default function BestPick(){
  return (
    <section className="w-full">
      <div className="text-center text-[26px] font-semibold">BEST PICK</div>
      <div className="flex mt-12 justify-center">
        <CarouselBestPick />
        <div className="h-[744px] w-[470px] flex flex-wrap gap-7">
          <div className="h-[364px] w-[220px] bg-slate-300"></div>
          <div className="h-[364px] w-[220px] bg-slate-300"></div>
          <div className="h-[364px] w-[220px] bg-slate-300"></div>
          <div className="h-[364px] w-[220px] bg-slate-300"></div>
        </div>
      </div>
    </section>
  );
}