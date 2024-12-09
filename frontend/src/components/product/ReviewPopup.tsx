import ReviewStar from "./reviewsStar"
import { Textarea } from "../ui/textarea"

function InputImg(){
    return(
    <>
    <div className="w-[234px] h-[234px] position: relative">
    <img className="w-[234px] h-[234px] "/>
    <button><img className="w-8 h-8 z-10 absolute top-4 right-4" src="/public/images/common/btn-close.png"/></button>
    </div>
    </>
    )
}

function ReviewPopup(){
    return(
        <>
        <div className="flex flex-col justify-start items-center w-[1280px] h-[1076px] p-10 bg-white rounded-2xl  mx-auto border-2 border-[#D9D9D9] position: relative">
          <div className="flex justify-center w-[1200px] mx-auto ">
            <p className="border-b-2 border-black w-[600px] text-center ">후기작성</p>
             <button><img className="w-8 h-8 absolute top-10 right-10" src="/public/images/common/btn-close.png"/></button>
          </div>
         <ReviewStar size="large"/>
         <Textarea className="mt-10"/>
         <label htmlFor="file" className="pt-6 flex gap-2">
            <img className="w-[234px] h-[234px]" src="/public/images/product/btn-input-image.png"/>
            <InputImg/>
            <InputImg/>
            <InputImg/>
            <InputImg/>
            
         </label>
         <input className="hidden" type="file" name="file" id="file"  accept = "image/*" multiple />
         <button className="bg-black text-white rounded-[8px] w-[200px] h-[50px] mt-10">게시하기</button>
         </div>
        </>
    )
}
export default ReviewPopup