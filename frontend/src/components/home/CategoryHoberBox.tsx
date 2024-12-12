import { Category } from "@/types/categories";

import CategoryHoberList from "./CategoryHoberList";

interface Props{
  categories: Category[]
}

export default function CategoryHoberBox({ categories }: Props) {
  return (
    <div className="absolute h-[142px] items-center gap-5 rounded-xl bg-white px-4 py-3 invisible flex shadow-lg  group-hover:visible">
      {categories.map((category) => (
        <CategoryHoberList key={category.productId}
          name={category.name}
          alt={category.name}
          img={"/images/home/icon-" + category.name + ".png"}
        />
      ))}
    </div>
  );
}