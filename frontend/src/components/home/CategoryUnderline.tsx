import { cn } from "@/lib/utils";

interface CategoryUnderLineProps {
  isVisible: boolean;
}
export default function CategoryUnderLine({
  isVisible,
}: CategoryUnderLineProps) {
  return (
    <img
      className={cn(
        "pl-5 pr-6 group-hover:visible group-focus:visible",
        isVisible ? "visible" : "invisible",
      )}
      src="/images/productlist/underline-menu.png"
    />
  );
}
