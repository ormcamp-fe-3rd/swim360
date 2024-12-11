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
    content: "솔직히 기대 별로 안했는데 ..",
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
  {
    date: "2024.12.20.",
    product: "나이키 솔리드 패스트백 탄탄이",
    content: "선물줬는데 좋아해요",
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
        <Table className="mt-10 w-full md:table-fixed">
          <TableHeader>
            <TableRow>
              <TableHead className="text-center text-xl font-semibold w-1/3">
                날짜
              </TableHead>
              <TableHead className="text-center text-xl font-semibold w-1/3">
                리뷰 상품
              </TableHead>
              <TableHead className="text-center text-xl font-semibold w-1/3">
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
                <TableCell className="text-center text-base text-ellipsis">
                  <div className="text-ellipsis">
                  {review.content}

                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </>
  );
}
