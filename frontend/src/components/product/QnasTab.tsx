type QnaItem = {
  number: string;
  title: string;
  author: string;
};

function Qnas({ number, title, author }: QnaItem) {
  return (
    <div className="mx-auto flex h-12 w-full max-w-[1064px] items-center justify-between border-b-2 border-[#D9D9D9]">
      <p className="w-[74px] text-center">{number}</p>
      <p>{title}</p>
      <p className="w-[74px]">{author}</p>
    </div>
  );
}

function QnasTab() {
  const QnaItems = [
    { number: "12", title: "배송 기간은 얼마나 걸리나요?", author: "관리자4" },
    {
      number: "11",
      title: "교환 불가능한 겨우는 언제인가요?",
      author: "관리자4",
    },
    {
      number: "10",
      title: "주문한 상품의 배송 상태는 어떻게 확인하나요",
      author: "관리자4",
    },
    {
      number: "9",
      title: "교환/반품 절차는 어떻게 되나요?",
      author: "관리자4",
    },
    {
      number: "8",
      title: "상품 교환을 원할 때 필요한 서류는 무엇인가요?",
      author: "관리자4",
    },
    {
      number: "7",
      title: "교환/반품 시 주의할 점은 무엇인가요?",
      author: "관리자4",
    },
    {
      number: "6",
      title: "제품이 품절되었을 경우 어떻게 해야 하나요?",
      author: "관리자4",
    },
    { number: "5", title: "배송 추적은 어떻게 하나요?", author: "관리자4" },
    {
      number: "4",
      title: "회원가입을 했는데, 로그인이 안 돼요.",
      author: "관리자4",
    },
    {
      number: "3",
      title: "제품 사용법에 대해 알고 싶어요.",
      author: "관리자3",
    },
    {
      number: "2",
      title: "다양한 결제 방법에 대해 알고 싶어요.",
      author: "관리자2",
    },
    {
      number: "1",
      title: "상품을 구매한 후 취소가 가능한가요?",
      author: "관리자",
    },
  ];
  return (
    <div className="mb-[140px]">
      <div className="mx-auto mb-8 mt-[140px] flex w-full max-w-[1064px]">
        <a
          href="#detailsTab"
          className="flex h-[44px] w-[266px] justify-center border-b-2 border-[#CCCCCC] text-[24px] font-extralight"
        >
          상품상세정보
        </a>
        <a
          href="#reviewsTab"
          className="flex h-[44px] w-[266px] justify-center border-b-2 border-[#CCCCCC] text-[24px] font-extralight"
        >
          상품후기(0)
        </a>
        <a
          href="#qnasTab"
          id="qnasTab"
          className="flex h-[44px] w-[266px] justify-center border-b-2 border-black text-[24px] font-medium"
        >
          자주하는 질문
        </a>
        <a
          href="#exchangeTab"
          className="flex h-[44px] w-[266px] justify-center border-b-2 border-[#CCCCCC] text-[24px] font-extralight"
        >
          교환/반품
        </a>
      </div>
      <div className="mx-auto flex h-12 w-full max-w-[1064px] items-center justify-between border-b-2 bg-[#D3D3D3]">
        <p className="w-[74px] text-center">번호</p>
        <p>제목</p>
        <p className="w-[74px]">작성자</p>
      </div>

      {QnaItems.map((item) => (
        <Qnas
          key={item.number}
          number={item.number}
          title={item.title}
          author={item.author}
        />
      ))}
    </div>
  );
}
export default QnasTab;
