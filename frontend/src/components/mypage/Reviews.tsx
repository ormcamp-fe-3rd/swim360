import { Reviews } from "@/types/reviews";

interface review {
  //TODO:
  // date -> Reviews 필드로 수정하기
  //product -> Reviews productId에서 Product name 연결하여 불러오기
  date: string;
  product: string;
  content: Reviews["content"];
}


const reviews: review[] = [
  {
    date: "2024.03.11.",
    product: "르망고 펠리스 나비다",
    content:
      "최근에 이 사각 수영복을 구매했는데, 정말 만족스럽습니다! 핏이 딱 좋아요—몸에 딱 맞으면서도 답답하지 않습니다. 소재는 내구성이 있으면서도 편안하고, 물놀이 후에도 금방 마르더라고요. 몇 번입어봤는데도 색상이 전혀 바래지 않았습니다. 디자인도 세련돼서 정말 마음에 들어요. 강력 추천합니다!",
  },
  {
    date: "2024.05.29.",
    product: "졸린 슬리피 베어 실리콘수모",
    content: "너무 귀여워요",
  },
  {
    date: "2024.07.02.",
    product: "후그 말랑 수경케이스",
    content: "색상 고민하다가 민트로 했는데 맘에 들어요",
  },
];

export type {review};
export {reviews};