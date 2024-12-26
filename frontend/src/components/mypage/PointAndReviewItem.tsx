interface PointAndReviewItemProps {
  label: string;
  value: number;
  unit: string;
}

function PointAndReviewItem({ label, value, unit }: PointAndReviewItemProps) {
  return (
    <div className="flex w-full flex-col items-center text-xl font-semibold">
      <div className="mb-11">{label}</div>
      <div>
        {value}
        {unit}
      </div>
    </div>
  );
}

export default PointAndReviewItem;
