import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { points } from "@/mocks/points.json"
import { formatPrice } from "@/utils/formatPrice";
import { getTotalAmount } from "@/utils/getTotalAmount";


export default function PointTable() {



  return (
    <div className="w-full">
      <div className="flex w-full flex-col justify-start py-[14.8px] tablet:flex-row tablet:items-center">
        <div className="mr-[10.36px] text-left text-2xl font-semibold">
          최근 포인트 내역
        </div>
        <div className="text-left text-[17px]">
          6개월 이내 내역만 조회 가능합니다.
        </div>
      </div>
      <div className="flex justify-end pb-4">
        <div className="pr-4 text-right">
          현재 포인트 {formatPrice(getTotalAmount(points))}
        </div>
      </div>
      <Table className="w-full table-auto md:table-fixed">
        <TableHeader>
          <TableRow className="bg-gray-50">
            <TableHead className="w-1/3 text-center text-xl font-semibold">
              날짜
            </TableHead>
            <TableHead className="w-1/3 text-center text-xl font-semibold">
              내용
            </TableHead>
            <TableHead className="w-1/3 text-center text-xl font-semibold">
              적립/사용 포인트
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {points.map((point) => (
            <TableRow key={point.date} className="h-20">
              {Object.values(point).map((value, index) => (
                <TableCell key={index} className="text-center text-base">
                  {value}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
