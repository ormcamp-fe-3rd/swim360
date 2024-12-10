import { Category } from "@/types/categories";

interface Props{
  category: Category
}

export default function CategoryList({ category }: Props) {
  return <li className="text-3xl font-bold">{category.name}</li>;
}