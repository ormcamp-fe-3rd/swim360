import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const points = [
  {
    date: "2024.12.20.",
    name: "구매 사용",
    amount: "-450",
  },
  {
    date: "2024.07.02.",
    name: "구매 적립",
    amount: "+500",
  },
  {
    date: "2024.05.29.",
    name: "구매 사용",
    amount: "-750",
  },
  {
    date: "2024.03.11.",
    name: "회원가입 적립",
    amount: "+1,000",
  },
];


export default function PointList() {
  return (
    <>
      <div className="ml-0 mt-40 w-full">
        <div className="flex w-full items-center justify-start py-[14.8px]">
          <div className="mr-[10.36px] text-2xl font-semibold">
            최근 포인트 내역
          </div>
          <div className="text-[17px]">6개월 이내 내역만 조회 가능합니다.</div>
        </div>
        <div className="grid grid-cols-3 pb-4">
          <div></div>
          <div></div>
          <div className="text-right pr-4">현재 포인트 300</div>
        </div>
        <Table>
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
                <TableCell className="text-center text-base">
                  {point.date}
                </TableCell>
                <TableCell className="text-center text-base">
                  {point.name}
                </TableCell>
                <TableCell className="text-center text-base">
                  {point.amount}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </>
  );
}
