import ReviewStar from "./ReviewsStar";
import ReviewPopup from "./ReviewWriteModal";
import ReviewDetailModal from "./ReviewDetailModal";

import { PaginationDemo } from "../common/Paginaionm";
import Reviews from "./Reviews";



function ReviewsTab(){
  
    return(
        <div className="w-[1064px] mx-auto">

            <div className="flex mx-auto mb-8 w-[1064px]">
                <a href="#detailsTab" className="w-[300px] h-[44px] border-b-2 border-[#CCCCCC] text-[24px] font-extralight flex justify-center">상품상세정보</a>
                <a href="#reviewsTab" id="reviewsTab" className="w-[300px] h-[44px] border-b-2 border-black  text-[24px] font-medium flex justify-center">상품후기(0)</a>
                <a href="#qnasTab" className="w-[300px] h-[44px] border-b-2 border-[#CCCCCC] text-[24px] font-extralight flex justify-center">자주하는 질문</a>
                <a href="#exchangeTab" className="w-[300px] h-[44px] border-b-2 border-[#CCCCCC] text-[24px] font-extralight flex justify-center">교환/반품</a>
          </div>

          <div className="w-[1064px] h-[250px] bg-[#f6f9ff] flex flex-col mx-auto items-center justify-center">
            <p className="h-16">사용자 총 평점</p>
            <ReviewStar/>
            <div className="flex"><p>0.00</p><p>/5</p></div>
          </div>

          <div className="w-[1064px] flex justify-end mt-8 mb-2">
          <button id="ReviewButton" className=" bg-black w-[164px] h-[50px] rounded-xl text-white text-[24px] flex items-center justify-center gap-2 "><img src="/public/images/icon-reviews.png"/>후기 등록</button>
          </div>
          
          <div className="hidden">
          <ReviewPopup/>
          </div>

          <div>
          <ReviewDetailModal/>
          </div>
          <Reviews/>
          <Reviews/>
          <Reviews/>
          <Reviews/>
          <Reviews/>
          <Reviews/>

          <div className="mt-9 mb-[120px]">
          <PaginationDemo/>
          </div>
          

        </div>
    )
}
export default ReviewsTab;
