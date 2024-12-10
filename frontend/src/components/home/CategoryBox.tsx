// import { useState } from "react";

import { Category } from "@/types/categories";

import CategoryHoberBox from "./CategoryHoberBox";
import CategoryList from "./CategoryList";
import CategoryUnderLine from "./CategoryUnderline";


const categories: Category[] = [
  {
    name: "WOMAN",
    productId: 1,
  },
  {
    name: "MAN",
    productId: 2,
  },
  {
    name: "ACC",
    productId: 3,
  },
  {
    name: "one-piece",
    productId: 4,
    parentId: 1,
  },
  {
    name: "full-body",
    productId: 5,
    parentId: 1,
  },
  {
    name: "mid-length",
    productId: 6,
    parentId: 2,
  },
  {
    name: "square-cut",
    productId: 7,
    parentId: 2,
  },
  {
    name: "bag",
    productId: 8,
    parentId: 3,
  },
  {
    name: "towel",
    productId: 9,
    parentId: 3,
  },
  {
    name: "fins",
    productId: 10,
    parentId: 3,
  },
];

export default function CategoryBox() {
  //FIXME: 페이지 이동시 state 유지 X, useContext 적용필요
  // const [activeCategory, setActiveCategory] = useState("")

  return (
    <>
      <ul className="hidden gap-28 tablet:flex">
        {categories.slice(0, 3).map((category) => (
          <li 
          key={category.productId} 
          className="group text-3xl font-bold" 
          // onClick={() => setActiveCategory(category.name)}
          >
            <CategoryList name={category.name} />
            {/* <CategoryUnderLine isVisible={activeCategory === category.name} /> */}
            <CategoryUnderLine isVisible={false}/>
            <CategoryHoberBox categories={categories.filter((sub)=> sub.parentId === category.productId)} />
          </li>
        ))}
      </ul>
    </>
  );
}
