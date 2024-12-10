import { Category } from "@/types/categories";

import CategoryHoberList from "./CategoryHoberList";

interface Props{
  categories: Category[]
}

export default function CategoryHoberBox({ categories }: Props) {
  return (
    <div className="absolute mt-2 h-[142px] items-center gap-5 rounded-xl bg-white px-4 py-3 hidden shadow-lg group-hover:flex">
      {categories.map((category) => (
        <CategoryHoberList key={category.id}
          name={category.name}
          url={"/" + category.name}
          alt={category.name}
          img={"/images/home/icon-" + category.name + ".png"}
        />
      ))}
    </div>
  );
}