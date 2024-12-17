import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { SortOption } from "@/types/products";

interface SortSelectProps {
  onSortOptionChange: (sortOption: SortOption) => void;
}

const SORT_OPTIONS = [
  { value: "latest", name: "최신순" },
  { value: "sale", name: "판매순" },
  { value: "review", name: "리뷰순" },
];

function SortSelect({ onSortOptionChange }: SortSelectProps) {
  return (
    <div className="flex flex-col items-end">
      <Select onValueChange={onSortOptionChange}>
        <SelectTrigger className="mb-2 w-[123px] rounded-[10px] border-[#000000] border-opacity-30">
          <SelectValue placeholder={SORT_OPTIONS[0].name} />
        </SelectTrigger>
        <SelectContent>
          {SORT_OPTIONS.map((option) => (
            <SelectItem key={option.name} value={option.value}>
              {option.name}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}

export default SortSelect;
