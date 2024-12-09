import ReviewStar from "./reviewsStar"
import { Textarea } from "../ui/textarea"

function ReviewPopup(){
    return(
        <>
        <div className="flex flex-col justify-center items-center w-[1280px] h-[1076px] p-10 bg-red-400 rounded-2xl  mx-auto">
          <div className="flex justify-center w-[1200px] mx-auto position: relative">
            <p className="border-b-2 border-black w-[600px] text-center ">후기작성</p>
             <button><img className="w-8 h-8 absolute top-10 right-10" src="/public/images/common/btn-close.png"/></button>
          </div>
         <ReviewStar size="large"/>
         <Textarea/>
         <label htmlFor="file">
            <img src="/public/images/product/btn-input-image.png"/>
         </label>
         <input type="file" name="file" id="file"  accept = "image/*" multiple/>
         <button className="bg-black text-white rounded-[8px] w-[200px] h-[50px] mt-10">게시하기</button>
         </div>
        </>
    )
}
export default ReviewPopup