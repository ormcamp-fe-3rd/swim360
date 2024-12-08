function ExchangeTab() {
    return (
      <div>
        {/* Tab Section */}
        <div className="flex mx-auto mb-8 w-[1064px]">
          <p className="w-[300px] h-[44px] border-b-2 border-[#CCCCCC] text-[24px] font-extralight flex justify-center">
            상품상세정보
          </p>
          <p className="w-[300px] h-[44px] border-b-2 border-[#CCCCCC] text-[24px] font-extralight flex justify-center">
            상품후기(0)
          </p>
          <p className="w-[300px] h-[44px] border-b-2 border-[#CCCCCC] text-[24px] font-extralight flex justify-center">
            자주하는 질문
          </p>
          <p className="w-[300px] h-[44px] border-b-2 border-black text-[24px] font-medium flex justify-center">
            교환/반품
          </p>
        </div>
  
        {/* Content Section */}
        <div className="w-[1064px] mx-auto mb-[252px]">
          <h3 className="font-bold text-lg mt-4">상품결제정보</h3>
          <ul className="list-disc pl-6">
            <li>교환결제의 경우 안심을 위해 카드사에서 확인전화를 드릴 수도 있습니다.</li>
            <li>환불이외의 다른 기기에서 사용하는 주문의 정상취소 요청이 아니라면, 주문을 보류 또는 취소할 수 있습니다.</li>
            <li>무통장 입금 후 상품 주문에 대한 PC변경, 인터넷입금방, 할인방등 특정 기간을 은행에서 처리 않으면 직통 입금처리가 됩니다.</li>
            <li>주문시 입금한 방법과 실결제금액의 선형이 반드시 일치해야 하며, 7일 이내에 입금한 후에 입금이 되지 않으면 주문은 자동취소 됩니다.</li>
          </ul>
  
          <h3 className="font-bold text-lg mt-4">배송정보</h3>
          <ul className="list-disc pl-6">
            <li>배송 방법: 택배</li>
            <li>배송 지역: 전국지역</li>
            <li>배송 비용: 2,500원</li>
            <li>배송 기간: 3일 ~ 7일</li>
            <li>배송 완료: 50만원 이상 구매 시 무료배송입니다.</li>
            <li>택배사: 우체국택배(1588-1300)</li>
          </ul>
  
          <h3 className="font-bold text-lg mt-4">배송 안내</h3>
          <ul className="list-disc pl-6">
            <li>유일한 배송은 주문 시간, 주소지, 전화번호가 동일시 묶음 배송이 가능하므로 주문 요청사항에 기입해 주세요.</li>
            <li>배송 전 자의 및 제품 변경은 불가하여 전까지까지 직행 부탁드립니다.</li>
            <li>배송 기간은 금요일과 평일 1~3일 금요일에 배송이 됩니다.</li>
            <li>주문시 입금이 완료되면 즉시 주요일 때도 분리배송할 수 있습니다.</li>
          </ul>
  
          <h3 className="font-bold text-lg mt-4">교환 및 환불</h3>
          <ul className="list-disc pl-6">
            <li>배송 및 사이즈 교환 시 교환 지점 신청하는 경우 구매자 아이디와 변경사항 함께 동봉하시기 바랍니다.</li>
            <li>상품이 5만원을 초과하거나 4-026112에도 신청하여 고객센터에 문의바랍니다.</li>
          </ul>
  
          <h3 className="font-bold text-lg mt-4">교환 및 반품</h3>
          <ul className="list-disc pl-6">
            <li>상품을 교환 및 반품 시 반드시 교환 및 반품을 위한 반품 요청을 확인해 주세요.</li>
            <li>배송 및 사이즈 반품은 적법한 사유만 경우에 대해 요청하실 수 있습니다.</li>
          </ul>
  
          <p className="mt-4">교환 및 반품 발송 후 30일 이내 접수 바랍니다.</p>
          <p>상품 교환시 새로운 상품으로 입고가 되면 처리기간 내 수령을 요청할 수 있습니다.</p>
        </div>
      </div>
    );
  }
  
  export default ExchangeTab;