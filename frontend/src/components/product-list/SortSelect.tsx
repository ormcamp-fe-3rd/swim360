import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

function SortSelect() {
  return (
    <div className="flex flex-col items-end">
      <Select>
        <SelectTrigger className="mb-2 w-[123px] rounded-[10px] border-[#000000] border-opacity-30">
          <SelectValue placeholder="최신순" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="최신순">최신순</SelectItem>
          <SelectItem value="판매순">판매순</SelectItem>
          <SelectItem value="리뷰순">리뷰순</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
}

export default SortSelect;
