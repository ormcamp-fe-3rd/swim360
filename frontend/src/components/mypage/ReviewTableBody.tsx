import { MyReview } from "@/types/users";

import { TableBody, TableCell, TableRow } from "../ui/table";

interface Props {
  reviews: MyReview[] | string;
}

export default function ReviewTableBody({ reviews }: Props) {
  const cellStyle =
    "text-center text-base overflow-hidden text-ellipsis whitespace-nowrap";

  if (typeof reviews === "string") {
    return (
      <TableBody>
        <TableRow>
          <TableCell>{reviews}</TableCell>
        </TableRow>
      </TableBody>
    );
  }

  return (
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
  );
}
