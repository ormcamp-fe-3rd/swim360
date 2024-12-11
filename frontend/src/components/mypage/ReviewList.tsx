import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const reviews = [
  {
    date: "2024.03.11.",
    product: "르망고 펠리스 나비다",
    content: "최근에 이 사각 수영복을 구매했는데, 정말 만족스럽습니다! 핏이 딱 좋아요—몸에 딱 맞으면서도 답답하지 않습니다. 소재는 내구성이 있으면서도 편안하고, 물놀이 후에도 금방 마르더라고요. 몇 번입어봤는데도 색상이 전혀 바래지 않았습니다. 디자인도 세련돼서 정말 마음에 들어요. 강력 추천합니다!",
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

export default function ReviewList() {
  return (
    <>
      <div className="ml-0 mt-40 w-full">
        <div className="flex w-full items-center justify-start py-[14.8px]">
          <div className="mr-[10.36px] text-2xl font-semibold">
            최근 리뷰 내역
          </div>
          <div className="text-[17px]">6개월 이내 내역만 조회 가능합니다.</div>
        </div>
        <div className="grid grid-cols-3 pb-4">
          <div></div>
          <div></div>
          <div className="pr-4 text-right">총 3건</div>
        </div>
        <Table className="w-full md:table-fixed table-auto">
          <TableHeader>
            <TableRow className="bg-gray-50">
              <TableHead className="w-1/3 text-center text-xl font-semibold">
                날짜
              </TableHead>
              <TableHead className="w-1/3 text-center text-xl font-semibold">
                리뷰 상품
              </TableHead>
              <TableHead className="w-1/3 text-center text-xl font-semibold hidden tablet:table-cell">
                리뷰 내용
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {reviews.map((review) => (
              <TableRow key={review.date} className="h-20">
                <TableCell className="text-center text-base">
                  {review.date}
                </TableCell>
                <TableCell className="text-center text-base">
                  {review.product}
                </TableCell>
                <TableCell className="overflow-hidden text-ellipsis whitespace-nowrap text-center text-base hidden tablet:table-cell">
                  {review.content}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </>
  );
}
