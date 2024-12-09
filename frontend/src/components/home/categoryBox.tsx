import { Category } from "@/types/categories"

import CategoryList from "./CategoryList"

const categoryNames: Category[] = [
  {
    id: 1,
    name: "WOMAN",
    productId: 1
  },
  {
    id: 2,
    name: "MAN",
    productId: 2
  },
  {
    id: 3,
    name: "ACC",
    productId: 3
  },
  // {
  //   id: 4,
  //   name: "원피스",
  //   productId: 4,
  //   parentId: 1
  // },
  // {
  //   id: 5,
  //   name: "반전신",
  //   productId: 5,
  //   parentId: 1
  // },
  // {
  //   id: 6,
  //   name: "5부",
  //   productId: 6,
  //   parentId: 2
  // },
  // {
  //   id: 7,
  //   name: "사각",
  //   productId: 7,
  //   parentId: 2
  // },
  // {
  //   id: 8,
  //   name: "수모",
  //   productId: 8,
  //   parentId: 3
  // }
]

export default function CategoryBox(){
  return (
    <ul className="flex gap-[52px]">
      {categoryNames.map((category)=>(
        <CategoryList key={category.id} category={category}/>
      ))}
    </ul>
  )
}