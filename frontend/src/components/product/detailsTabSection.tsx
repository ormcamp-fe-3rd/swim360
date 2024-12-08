function DetailsTab(){
    return(
        <div>
          <div className="flex mx-auto mb-8 w-[1064px]">
            <p className="w-[300px] h-[44px] border-b-2 border-black text-[24px] font-extralight flex justify-center">상품상세정보</p>
            <p className="w-[300px] h-[44px] border-b-2 border-[#CCCCCC] text-[24px] font-extralight flex justify-center">상품후기(0)</p>
            <p className="w-[300px] h-[44px] border-b-2 border-[#CCCCCC] text-[24px] font-extralight flex justify-center">자주하는 질문</p>
            <p className="w-[300px] h-[44px] border-b-2 border-[#CCCCCC] text-[24px] font-extralight flex justify-center">교환/반품</p>
          </div>
          <div className="bg-black rounded-[20px] w-[1064px] h-[824px] mx-auto"></div>
          
        <div className="flex flex-wrap w-[1064px] mx-auto gap-[12px]">
            
          <div className="flex flex-col justify-center items-center content-center mx-auto w-[342px] h-[240px] gap-8">
            <img className="w-[90px] h-[100px] " src="/public/images/icon_fabric_1.png"/>
            <p>맑은 물에 충분히 헹궈 가볍게 세탁</p>
          </div>
          <div className="flex flex-col justify-center items-center content-center mx-auto w-[342px] h-[240px gap-12">
            <img className="w-[132px] h-[66px] mt-[22px] md-[22px]" src="/public/images/icon_fabric_2.png"/>
            <p>맑은 물에 충분히 헹궈 가볍게 세탁</p>
          </div>
          <div className="flex flex-col justify-center items-center content-center mx-auto w-[342px] h-[240px] gap-8">
            <img className="w-[100px] h-[100px] " src="/public/images/icon_fabric_3.png"/>
            <p>맑은 물에 충분히 헹궈 가볍게 세탁</p>
          </div>
          <div className="flex flex-col justify-center items-center content-center mx-auto w-[342px] h-[240px]  gap-8">
            <img className="w-[100px] h-[100px] " src="/public/images/icon_fabric_4.png"/>
            <p>맑은 물에 충분히 헹궈 가볍게 세탁</p>
          </div>
          <div className="flex flex-col justify-center items-center content-center mx-auto w-[342px] h-[240px]  gap-8">
            <img className="w-[100px] h-[100px] " src="/public/images/icon_fabric_5.png"/>
            <p>맑은 물에 충분히 헹궈 가볍게 세탁</p>
          </div>
          <div className="flex flex-col justify-center items-center content-center mx-auto w-[342px] h-[240px]  gap-8">
            <img className="w-[100px] h-[94px] " src="/public/images/icon_fabric_6.png"/>
            <p>맑은 물에 충분히 헹궈 가볍게 세탁</p>
          </div>

          </div>
          
          <div className="w-[1064px] mx-auto font-extralight text-[13px] mb-8">
            <p>- 수영복 원단은 마찰에 약하므로 미끄럼틀 혹은 반복적인 마찰은 피해주세요</p>
            <p>- 뜨거운 물에 세탁하거나, 다림질을 하지 마세요</p>
            <p>- 오일류(선탠오일)는 수영복에 묻지 않게 해주세요</p>
            <p>- 물이 빠져 오염이 될 수 있으니 다른 옷과 함께 보관하지 마세요</p>
            <p>- 물이 빠져 오염이 될 수 있으니 단독 세탁하세요</p>
          </div>

        </div>


    )
}
export default DetailsTab