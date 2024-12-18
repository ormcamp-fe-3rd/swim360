import { Category } from "@/types/categories";

import { Link } from "react-router-dom";

interface CategoryHoberBoxProps {
  handleCurrentCategoryChange: (
    parentCategoryId: Category["parent_id"],
    categoryId: Category["id"],
  ) => void;
  categories: Category[];
}

export default function CategoryHoberBox({
  handleCurrentCategoryChange,
  categories,
}: CategoryHoberBoxProps) {
  return (
    <div className="invisible absolute flex h-[142px] items-center gap-5 rounded-xl bg-white px-4 py-3 shadow-lg group-hover:visible">
      {categories.map((category) => (
        <Link
          onClick={() =>
            handleCurrentCategoryChange(category.parent_id, category.id)
          }
          key={category.name}
          to={"/product_list/" + category.name}
        >
          <img
            src={"/images/home/icon-" + category.name + ".png"}
            alt={category.name}
            className="rounded-xl hover:bg-gray-100"
          />
          <p className="pt-2 text-center text-xs font-normal">
            {category.name}
          </p>
        </Link>
      ))}
    </div>
  );
}
