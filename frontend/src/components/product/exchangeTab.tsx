import ProductTab from "./Tap";

interface ExchangeProp {
  title: string;
  content: string[];
}

function ExchangeSection({ title, content }: ExchangeProp) {
  return (
    <>
      <h3 className="mt-4 text-lg font-bold">{title}</h3>
      <div className="list-disc pl-6">
        {/* content 배열의 각 항목을 map으로 렌더링 */}
        {content.map((item, index) => (
          <p key={index}>{item}</p>
        ))}
      </div>
    </>
  );
}

function ExchangeTab() {
  return (
    <div>
      {/* Tab Section */}
      <div id="exchangeTab">
        <ProductTab activeCategory="exchangeTab" />
      </div>

      {/* Content Section */}
      <div className="mx-auto w-full max-w-[1064px]">
        <ExchangeSection
          title="상품결제정보"
          content={[
            "- 교환결제의 경우 안심을 위해 카드사에서 확인전화를 드릴 수도 있습니다.",
            "- 환불이외의 다른 기기에서 사용하는 주문의 정상취소 요청이 아니라면, 주문을 보류 또는 취소할 수 있습니다.",
            "- 무통장 입금 후 상품 주문에 대한 PC변경, 인터넷입금방, 할인방등 특정 기간을 은행에서 처리 않으면 직통 입금처리가 됩니다.",
            "- 주문시 입금한 방법과 실결제금액의 선형이 반드시 일치해야 하며, 7일이내에 입금한 후에 입금이 되지 않으면 주문은 자동취소 됩니다.",
          ]}
        />
        <ExchangeSection
          title="배송정보"
          content={[
            "- 배송 방법: 택배",
            "- 배송 지역: 전국지역",
            "- 배송 비용: 2,500원",
            "- 배송 기간: 3일 ~ 7일",
            "- 배송 완료: 50만원 이상 구매 시 무료배송입니다.",
            "- 택배사: 우체국택배(1588-1300)",
          ]}
        />
        <ExchangeSection
          title="배송 안내"
          content={[
            "- 유일한 배송은 주문 시간, 주소지, 전화번호가 동일시 묶음 배송이 가능하므로 주문 요청사항에 기입해 주세요.",
            "- 배송 전 자의 및 제품 변경은 불가하여 전까지까지 직행 부탁드립니다.",
            "- 배송 기간은 금요일과 평일 1~3일 금요일에 배송이 됩니다.",
            "- 주문시 입금이 완료되면 즉시 주요일 때도 분리배송할 수 있습니다.",
          ]}
        />
        <ExchangeSection
          title="교환 및 환불"
          content={[
            "- 배송 및 사이즈 교환 시 교환 지점 신청하는 경우 구매자 아이디와 변경사항 함께 동봉하시기 바랍니다.",
            "- 상품이 5만원을 초과하거나 4-026112에도 신청하여 고객센터에 문의바랍니다.",
          ]}
        />
      </div>
    </div>
  );
}

export default ExchangeTab;
