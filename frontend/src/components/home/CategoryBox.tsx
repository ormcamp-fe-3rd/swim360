// import { useState } from "react";

import { Category } from "@/types/categories";
import CategoryHoberBox from "./CategoryHoberBox";
import CategoryUnderLine from "./CategoryUnderline";
import useCategory from "@/hooks/useCategory";
import { Link } from "react-router-dom";

export default function CategoryBox() {
  const { categories, currentCategoryId, handleCurrentCategoryChange } =
    useCategory();

  const parentCategory = categories.filter(
    (category) => category.parent_id === null,
  );

  return (
    <ul className="hidden w-full max-w-[500px] tablet:flex tablet:justify-between">
      {parentCategory.map((category: Category) => {
        const childCategory = categories.find(
          (item) => item.parent_id === category.id,
        ) as Category;

        return (
          <li key={category.name} className="group text-3xl font-bold">
            <Link
              onClick={() =>
                handleCurrentCategoryChange(category.id, childCategory.id)
              }
              to={"/product_list/" + category.name}
            >
              <div className="flex justify-center">
                {category.name.toUpperCase()}
              </div>
            </Link>
            <CategoryUnderLine isVisible={currentCategoryId === category.id} />
            <CategoryHoberBox
              handleCurrentCategoryChange={handleCurrentCategoryChange}
              categories={categories.filter(
                (sub) => sub.parent_id === category.id,
              )}
            />
          </li>
        );
      })}
    </ul>
  );
}
