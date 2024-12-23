import { Category } from "@/types/categories";
import CategoryHoverBox from "./CategoryHoverBox";
import CategoryUnderLine from "./CategoryUnderline";
import { Link } from "react-router-dom";
import Loader from "../common/Loader";

interface CategoryBoxProps {
  currentParentCategoryId: Category["parent_id"];
  handleCurrentCategoryChange: (
    parentCategoryId: Category["parent_id"],
    categoryId: Category["id"],
  ) => void;
  parentCategories: Category[];
  getFirstChildCategory: (parentCategoryId: Category["id"]) => Category;
  getChildCategories: (parentCategoryId: Category["parent_id"]) => Category[];
}

export default function CategoryBox({
  currentParentCategoryId,
  handleCurrentCategoryChange,
  parentCategories,
  getFirstChildCategory,
  getChildCategories,
}: CategoryBoxProps) {
  if (parentCategories.length === 0) return;

  return (
    <ul className="hidden w-full max-w-[500px] tablet:flex tablet:justify-between">
      {parentCategories.map((category: Category) => {
        const firstChildCategory = getFirstChildCategory(category.id);
        const childCategories = getChildCategories(category.id);

        return (
          <li key={category.name} className="group text-3xl font-bold">
            <Link
              onClick={() =>
                handleCurrentCategoryChange(category.id, firstChildCategory.id)
              }
              to={"/product_list/" + category.name}
            >
              <div className="flex justify-center">
                {category.name.toUpperCase()}
              </div>
            </Link>
            <CategoryUnderLine
              isVisible={currentParentCategoryId === category.id}
            />
            <CategoryHoverBox
              handleCurrentCategoryChange={handleCurrentCategoryChange}
              childCategories={childCategories}
            />
          </li>
        );
      })}
    </ul>
  );
}
