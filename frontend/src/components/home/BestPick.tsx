import { CarouselBestPick } from "./CarouselBestpick";

export default function BestPick(){
  return (
    <section className="w-full desktop:w-[1440px] desktop:h-[845px] px-20">
      <div className="text-center text-[26px] font-semibold">BEST PICK</div>
      <div className="mt-12 flex justify-center gap-12">
        <CarouselBestPick />
        <div className="grid grid-cols-2 w-1/3 gap-7">
          <div className=" bg-slate-300"></div>
          <div className=" bg-slate-300"></div>
          <div className=" bg-slate-300"></div>
          <div className=" bg-slate-300"></div>
        </div>
      </div>
    </section>
  );
}