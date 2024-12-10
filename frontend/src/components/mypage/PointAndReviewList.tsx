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
    date: "2024.03.11.",
    name: "회원가입 적립",
    amount: "+1,000",
  },
  {
    date: "2024.05.29.",
    name: "구매 사용",
    amount: "-800",
  },
  {
    date: "2024.07.02.",
    name: "구매 적립",
    amount: "+1,250",
  },
  {
    date: "2024.12.20.",
    name: "이벤트 적립",
    amount: "+500",
  },
];

export default function PointAndReviewList() {
  return (
    <div className="w-full px-20">
      <div className="flex w-full items-center justify-start py-[14.8px]">
        <div className="mr-[10.36px] text-2xl font-semibold">
          최근 포인트 내역
        </div>
        <div className="text-[17px]">6개월 이내 내역만 조회 가능합니다.</div>
      </div>
      <Table className="mt-10">
        <TableHeader>
          <TableRow>
            <TableHead className="text-center text-xl font-semibold">
              적립/사용 일자
            </TableHead>
            <TableHead className="text-center text-xl font-semibold">
              내용
            </TableHead>
            <TableHead className="text-center text-xl font-semibold">
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
  );
}

// export default function PointAndReviewList() {
//   return (
//     <>
//       <div className="w-full">
//         <div className="flex w-full items-center justify-start py-[14.8px]">
//           <div className="mr-[10.36px] text-2xl font-semibold">
//             최근 포인트 내역
//           </div>
//           <div className="text-[17px]">6개월 이내 내역만 조회 가능합니다.</div>
//         </div>
//         <div className="grid w-full grid-flow-col grid-cols-3 gap-2 border-y border-black text-center">
//           <div>적립/사용 일자</div>
//           <div>적립/사용 내용</div>
//           <div>적립/사용 포인트</div>
//         </div>

//         <div className="h-[759px] overflow-y-scroll">
//           <div className="grid w-full grid-flow-col grid-cols-3 border-b border-black pt-3">
//             <div className="flex flex-col items-center justify-center hover:underline">
//               <div>2024.11.12</div>
//             </div>
//             <div className="flex flex-col items-center justify-center hover:underline">
//               dd
//             </div>
//             <div className="flex flex-col items-center justify-center hover:underline">
//               dd
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }
