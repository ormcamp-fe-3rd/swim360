import { Category } from "@/types/categories";

import CategoryHoberBox from "./CategoryHoberBox";
import CategoryList from "./CategoryList";
import CategoryUnderLine from "./CategoryUnderline";


const womanCategory: Category[] = [
  {
    id: 1,
    name: "one-piece",
    productId: 4,
    parentId: 1
  },
  {
    id: 2,
    name: "full-body",
    productId: 5,
    parentId: 1
  }
]
const manCategory: Category[] = [
  {
    id: 1,
    name: "mid-length",
    productId: 5,
    parentId: 2,
  },
  {
    id: 2,
    name: "square-cut",
    productId: 6,
    parentId: 2,
  },
];
const accCategory: Category[] = [
  {
    id: 1,
    name: "bag",
    productId: 6,
    parentId: 3
  },
  {
    id: 2,
    name: "towel",
    productId: 7,
    parentId: 3
  },
  {
    id: 3,
    name: "fins",
    productId: 8,
    parentId: 3
  }
]

export default function CategoryBox() {
  return (
    <>
      <ul className="hidden gap-28 tablet:flex">
        <li className="group text-3xl font-bold">
          <CategoryList name="WOMAN"/>
          <CategoryUnderLine />
          <CategoryHoberBox categories={womanCategory} />
        </li>
        <li className="group text-3xl font-bold">
          <CategoryList name="MAN"/>
          <CategoryUnderLine />
          <CategoryHoberBox categories={manCategory} />
        </li>
        <li className="group text-3xl font-bold">
          <CategoryList name="ACC" />
          <CategoryUnderLine />
          <CategoryHoberBox categories={accCategory} />
        </li>
      </ul>
    </>
  );
}
