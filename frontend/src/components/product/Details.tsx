
  function DetailsSelected(){
    return(
        <>
        <div className="w-[522px] h-[50px] bg-[#EDEDED] flex items-center justify-between mb-1 p-4">
        <p>사이즈</p>
        <div className="flex justify-between items-center w-fit border-black border-[1px] rounded-[12px] px-4 gap-3">
            <img className="w-6" src="/public/images/product/icon-minus.png"/>
            <p className="w-5 text-center"> 2 </p>
            <img className="w-6" src="/public/images/product/icon-add.png"/>
        </div>
        <p>000,000원</p>
        </div>
        </>
    )
}

function Details(){
    return(
        <>
        <div className="w-[522px] h-auto flex-col">
         <p className="font-semibold text-[18px]">제품명</p>
         <p className="font-extralight text-[14px]">제품 상세 내용</p> 
          <div className="flex gap-[10px]">
          <p className="font-medium text-[16px]">정상가</p>
          <p className="font-extralight text-[14px]">000,000원</p>
          </div>
         <div className="flex gap-[10px]">
         <p className="font-medium text-[16px]">할인가</p>
         <p className="text-[#D40022] text-[16px] font-bold">000,000원</p>
         <p className="text-[#D40022] text-[16px] font-bold">00%</p>
         </div>
         <div className="flex gap-[10px]">
         <p className="text-[#B0B0B0] text-[14px]">배송료</p>
         <p className="text-[#B0B0B0] text-[14px]">000,000원</p>
         </div>

         <div className="flex-col  justify-between w-[522px] h-[88px] pt-5 border-black border-t-[1px] mb-5">
            <p className="text-[16px] mb-2 ">사이즈</p>
          <div className="flex mb-5 gap-1">
            <button className="w-[60px] h-[40px] border-[1px] border-black flex gap-3 items-center justify-center rounded-xl hover:bg-black hover:text-white">24</button>
            <button className="w-[60px] h-[40px] border-[1px] border-black flex gap-3 items-center justify-center rounded-xl hover:bg-black hover:text-white">26</button>
            <button className="w-[60px] h-[40px] border-[1px] border-black flex gap-3 items-center justify-center rounded-xl hover:bg-black hover:text-white">28</button>
            <button className="w-[60px] h-[40px] border-[1px] border-black flex gap-3 items-center justify-center rounded-xl hover:bg-black hover:text-white">30</button>
            <button className="w-[60px] h-[40px] border-[1px] border-black flex gap-3 items-center justify-center rounded-xl hover:bg-black hover:text-white">32</button>
         </div>
         </div>

         <DetailsSelected />
         
         <div>
            <div className="flex w-[522px] mt-10 mb-[10px] justify-end">
            <p  className="font-semibold text-[16px]">총 상품 금액: </p>
            <p  className="font-semibold text-[16px]">000,000원</p>
            </div>
    
            <div className="w-[522px]">
                <button className="w-[254px] h-[70px] text-black border-[1px] rounded-2xl mr-3">장바구니 담기</button>
                <button className="w-[254px] h-[70px] bg-black text-white rounded-2xl">바로 구매</button>
            </div>
        </div>
        </div>
        </>
    );
}
export default Details;



