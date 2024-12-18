import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { MyReview } from "@/types/users";

interface Prop {
  reviews: MyReview[];
}

export default function ReviewList({ reviews }: Prop) {
  const cellStyle =
    "text-center text-base overflow-hidden text-ellipsis whitespace-nowrap";

  

  return (
    <div className="w-full">
      <div className="flex w-full flex-col justify-start py-[14.8px] tablet:flex-row tablet:items-center">
        <div className="mr-[10.36px] text-left text-2xl font-semibold">
          최근 리뷰 내역
        </div>
        <div className="text-left text-[17px]">
          6개월 이내 내역만 조회 가능합니다.
        </div>
      </div>
      <div className="flex justify-end pb-4">
        <div className="pr-4 text-right">총 {reviews.length}건</div>
      </div>
      <Table className="w-full table-auto md:table-fixed">
        <TableHeader>
          <TableRow className="bg-gray-50">
            <TableHead className="w-1/3 text-center text-xl font-semibold">
              날짜
            </TableHead>
            <TableHead className="w-1/3 text-center text-xl font-semibold">
              리뷰 상품
            </TableHead>
            <TableHead className="hidden w-1/3 text-center text-xl font-semibold tablet:table-cell">
              리뷰 내용
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {reviews.map((review, index) => (
            <TableRow key={index} className="h-20">
              <TableCell className={cellStyle}>{review.date}</TableCell>
              <TableCell className={cellStyle}>{review.productName}</TableCell>
              <TableCell className={`hidden tablet:table-cell ${cellStyle}`}>
                {review.content}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
