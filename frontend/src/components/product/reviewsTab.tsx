import ReviewStar from "./reviewsStar";
import { PaginationDemo } from "../common/Paginaionm";


function Reviews(){
    return(
        <div className="w-[1064px] h-[196px] flex items-center border-b border-[#D9D9D9]">
        <div className="h- flex-col gap-10">
        <ReviewStar size="small"/>
        <div className="w-[1064px] flex justify-between">
        <div className="flex-col">
        <div className="flex font-medium text-[18px]">
        <p>사이즈:</p>
        <p> 000 </p>
        </div>
        <p className="w-[920px] font-light">최근에 이 사각 수영복을 구매했는데, 정말 만족스럽습니다! 핏이 딱 좋아요—몸에 딱 맞으면서도 답답하지 않습니다. 소재는 내구성이 있으면서도 편안하고, 물놀이 후에도 금방 마르더라고요. 몇 번 입어봤는데도 색상이 전혀 바래지 않았습니다. 디자인도 세련돼서 정말 마음에 들어요. 강력 추천합니다!</p>
        </div>
        <img className="w-[120px] h-[120px]"></img>
        </div>
        <div className="flex justify-start gap-2 text-[#B0B0B0] text-[12px] font-medium">
        <p >김** </p>
        <p > | 2000.00.00  </p>
        </div>
        </div>       
        </div>
    )
}


function ReviewsTab(){
    return(
        <div className="w-[1064px] mx-auto">

            <div className="flex mx-auto mb-8 w-[1064px]">
                <p className="w-[300px] h-[44px] border-b-2 border-[#CCCCCC] text-[24px] font-extralight flex justify-center">상품상세정보</p>
                <p className="w-[300px] h-[44px] border-b-2 border-black  text-[24px] font-medium flex justify-center">상품후기(0)</p>
                <p className="w-[300px] h-[44px] border-b-2 border-[#CCCCCC] text-[24px] font-extralight flex justify-center">자주하는 질문</p>
                <p className="w-[300px] h-[44px] border-b-2 border-[#CCCCCC] text-[24px] font-extralight flex justify-center">교환/반품</p>
          </div>

          <div className="w-[1064px] h-[250px] bg-[#f6f9ff] flex flex-col mx-auto items-center justify-center">
            <p className="h-16">사용자 총 평점</p>
            <ReviewStar/>
            <div className="flex"><p>0.00</p><p>/5</p></div>
          </div>

          <div className="w-[1064px] flex justify-end mt-8 mb-2">
          <button className="bg-black w-[164px] h-[50px] rounded-xl text-white text-[24px] flex items-center justify-center gap-2 "><img src="/public/images/icon-reviews.png"/>후기 등록</button>
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
