import { Textarea } from "../ui/textarea"
import ReviewStar from "./ReviewsStar"


function InputImg(){
    return(
    <>
    <div className="w-[200px] h-[200px] position: relative">
    <img className="w-[200px] h-[200px]"/>
    <button className="Onclick"><img className="w-8 h-8 z-10 absolute top-4 right-4" src="/public/images/common/btn-close.png"/></button>
    </div>
    </>
    )
}

function ReviewWriteModal(){
    
    return(
        <>
        <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50">
        <div className="flex flex-col justify-start items-center w-[1064px] h-auto p-10 bg-white rounded-2xl mx-auto border-2 border-[#D9D9D9] position: relative ">
          <div className="flex justify-center w-[1032px] mx-auto ">
            <p className="border-b-2 border-black w-[600px] text-center ">후기작성</p>
             <button><img className="w-8 h-8 absolute top-10 right-10" src="/public/images/common/btn-close.png"/></button>
          </div>
         <ReviewStar size="large"/>

         <Textarea className="mt-10"/>

         <label htmlFor="file" className="pt-6 flex gap-2">
            <img className="w-[200px] h-[200px]" src="/public/images/product/btn-input-image.png"/>
            <InputImg/>
            <InputImg/>
            <InputImg/>
            <InputImg/>
            
         </label>
         <input className="hidden" type="file" name="file" id="file"  accept = "image/*" multiple />


         <button className="bg-black text-white rounded-[8px] w-[200px] h-[50px] mt-10">게시하기</button>
         </div>
         </div>
         <div className="bg-black bg-opacity-55 w-full h-full fixed top-0 left-0"></div>
        </>
    )
}
export default ReviewWriteModal
