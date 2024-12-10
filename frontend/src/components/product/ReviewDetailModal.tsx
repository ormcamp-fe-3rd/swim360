import { Card } from "../ui/card"
import { CardContent } from "../ui/card"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "../ui/carousel";
import Reviews from "./Reviews"





function ReviewDetailModal(){
    
    return(
        <>

        <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50">
        <div className="flex">
        <div className="w-[706px] h-[652px] bg-black flex items-center justify-center mx-auto">

      <Carousel className="w-[706px] h-[652px] z-50 flex items-center justify-between mx-auto">
      <CarouselPrevious />
        <CarouselContent >
          <CarouselItem><img className="w-fit h-fit"  src="/public/images/product/review-star-selected"/></CarouselItem>
          <CarouselItem><img className="w-fit h-fit"  src="/public/images/product/review-star-selected"/></CarouselItem>
          <CarouselItem><img className="w-fit h-fit"  src="/public/images/product/review-star-selected"/></CarouselItem>
        </CarouselContent>
       <CarouselNext />
      </Carousel>
  



        </div>
        <div className="flex flex-col justify-start items-center w-[560px] h-[652px] p-10 bg-white rounded-2xl mx-auto border-2 border-[#D9D9D9] position: relative ">
          <div className="flex justify-center w-[500px] mx-auto ">
            <p className="border-b-2 border-black w-[600px] text-center ">후기작성</p>
             <button><img className="w-8 h-8 absolute top-10 right-10" src="/public/images/common/btn-close.png"/></button>
          </div>

          <Reviews size="small" />



         <button className="bg-black text-white rounded-[8px] w-[200px] h-[50px] mt-10">수정하기</button>
         </div>
        
         </div>
         </div>
         <div className="bg-black bg-opacity-55 w-full h-full fixed top-0 left-0"></div>
        </>
    )
}
export default ReviewDetailModal
