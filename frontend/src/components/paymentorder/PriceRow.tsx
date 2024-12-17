interface PriceRowProps {
  label: string;
  value: number | string;
  isNegative?: boolean;
  className?: string;
}

function PriceRow({
  label,
  value,
  isNegative = false,
  className = "",
}: PriceRowProps) {
  return (
    <div className={`${className} flex justify-between p-1`}>
      <span className="inline-block w-2/3">{label}</span>
      <div className="flex">
        <span className="inline-block w-1/2 text-right">
          {isNegative
            ? `-${Number(value).toLocaleString()}`
            : Number(value).toLocaleString()}
        </span>
        <span className="inline-block w-1/2 pl-1">원</span>
      </div>
    </div>
  );
}

export default PriceRow;
