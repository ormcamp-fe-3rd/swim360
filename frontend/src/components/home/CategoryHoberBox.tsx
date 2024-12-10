import { Category } from "@/types/categories";

import CategoryHoberList from "./CategoryHoberList";

interface Props{
  categories: Category[]
}

export default function CategoryHoberBox({ categories }: Props) {
  return (
    <div className="absolute mt-2 flex h-[142px] items-center gap-5 rounded-xl bg-white px-4 py-3 opacity-0 shadow-lg group-hover:opacity-100">
      {categories.map((category) => (
        <CategoryHoberList
          name={category.name}
          url={"/" + category.name}
          alt={category.name}
          img={"/images/home/icon-" + category.name + ".png"}
        />
      ))}
    </div>
  );
}