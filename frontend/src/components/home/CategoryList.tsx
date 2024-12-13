import { Link } from "react-router-dom";

import { Category } from "@/types/categories";

interface Props{
  name: string,
  categories: Category[],
}

export default function CategoryList({ name, categories }: Props) {
  return (
    <Link to={"/product_list/" + categories[0].name}>
      <div className="flex justify-center">{name}</div>
    </Link>
  );
}
