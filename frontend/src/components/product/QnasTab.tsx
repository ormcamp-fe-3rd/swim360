import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";

import ProductTab from "./Tap";

type QnaItem = {
  numbers: number;
  title: string;
  author: string;
  answer: string;
};

function Qnas({ numbers, title, author, answer }: QnaItem) {
  return (
    <div className="flex justify-center">
      <Accordion type="single" collapsible className="w-[1064px]">
        <AccordionItem value="item-1">
          <AccordionTrigger className="flex">
            <p className="w-[74px] pl-7 text-start">{numbers}</p>
            <p className="flex-2 mx-auto w-full text-center">{title}</p>
            <p className="mr-6 w-[74px] text-end">{author}</p>
          </AccordionTrigger>
          <AccordionContent className="text-center">
            <div className="flex h-auto items-center justify-center py-2">
              <p>{answer}</p>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}

function QnasTab() {
  const QnaItems = [
    {
      number: "12",
      title: "배송 기간은 얼마나 걸리나요?",
      author: "관리자4",
      answer:
        "일반적으로 배송은 주문 후 2~3일이 소요됩니다. 다만, 지역과 물류 상황에 따라 약간의 차이가 있을 수 있습니다.",
    },
    {
      number: "11",
      title: "교환 불가능한 겨우는 언제인가요?",
      author: "관리자4",
      answer:
        "제품 수령 후 7일 이내에 미사용 상태에서 교환 요청을 하실 수 있습니다. 단, 제품 하자 또는 오배송의 경우에만 교환이 가능합니다.",
    },
    {
      number: "10",
      title: "주문한 상품의 배송 상태는 어떻게 확인하나요",
      author: "관리자4",
      answer: "마이페이지 > 주문 내역에서 배송 상태를 확인하실 수 있습니다.",
    },
    {
      number: "9",
      title: "교환/반품 절차는 어떻게 되나요?",
      author: "관리자4",
      answer:
        "교환/반품을 원하시면 고객센터로 문의하시거나, 마이페이지에서 교환/반품 신청 버튼을 클릭해 주세요.",
    },
    {
      number: "8",
      title: "상품 교환을 원할 때 필요한 서류는 무엇인가요?",
      author: "관리자4",
      answer: "주문번호, 구매 영수증, 제품 상태 확인 사진 등이 필요합니다.",
    },
    {
      number: "7",
      title: "교환/반품 시 주의할 점은 무엇인가요?",
      author: "관리자4",
      answer: "단순 변심의 경우 왕복 배송비가 부과될 수 있습니다.",
    },
    {
      number: "6",
      title: "제품이 품절되었을 경우 어떻게 해야 하나요?",
      author: "관리자4",
      answer:
        "제품 수령 후 훼손된 부분의 사진을 찍어 고객센터로 문의해주세요. 빠르게 처리해드리겠습니다.",
    },
    {
      number: "5",
      title: "배송 추적은 어떻게 하나요?",
      author: "관리자4",
      answer:
        "발송 알림 문자 또는 이메일에 포함된 운송장 번호를 통해 택배사 홈페이지에서 추적 가능합니다.",
    },
    {
      number: "4",
      title: "회원가입을 했는데, 로그인이 안 돼요.",
      author: "관리자4",
      answer:
        "비밀번호가 틀린 경우일 수 있으니 비밀번호 찾기를 이용해 주세요. 그래도 안 되면 고객센터로 문의해 주세요.",
    },
    {
      number: "3",
      title: "제품 사용법에 대해 알고 싶어요.",
      author: "관리자3",
      answer:
        "상세한 사용법은 제품과 함께 제공된 매뉴얼에서 확인하실 수 있습니다. 추가 문의는 고객센터로 연락 부탁드립니다.",
    },
    {
      number: "2",
      title: "다양한 결제 방법에 대해 알고 싶어요.",
      author: "관리자2",
      answer:
        "이용에 불편을 드려 죄송합니다. 저희는 무통장입금 결제 방법만을 지원하고 있습니다.",
    },
    {
      number: "1",
      title: "상품을 구매한 후 취소가 가능한가요?",
      author: "관리자",
      answer:
        "결제 완료 후 배송이 시작되기 전까지는 취소 가능합니다. 배송이 시작된 경우에는 반품 절차를 따라야 합니다.",
    },
  ];
  return (
    <div className="mb-[140px]" id="qnasTab">
      <ProductTab activeCategory="qnasTab" />

      <div className="mx-auto flex h-12 w-full max-w-[1064px] items-center justify-between border-b-2 bg-[#D3D3D3]">
        <p className="w-[74px] text-center">번호</p>
        <p>제목</p>
        <p className="w-[74px]">작성자</p>
      </div>

      {QnaItems.map((item) => (
        <Qnas
          key={item.number}
          numbers={item.number}
          title={item.title}
          author={item.author}
          answer={item.answer}
        />
      ))}
    </div>
  );
}
export default QnasTab;
