import { Category } from "@/types/categories";

import CategoryList from "./CategoryList";

const categoryNames: Category[] = [
  {
    id: 1,
    name: "WOMAN",
    productId: 1,
  },
  {
    id: 2,
    name: "MAN",
    productId: 2,
  },
  {
    id: 3,
    name: "ACC",
    productId: 3,
  },
];

export default function CategoryBox() {
  return (
    <>
      <ul className="hidden gap-28 tablet:flex">
        <li className="group text-3xl font-bold">
          <a href="/productlist" className="flex justify-center">
            WOMAN
          </a>
          <img
            className="invisible pr-6 group-hover:visible group-focus:visible pl-5"
            src="/public/images/productlist/underline-menu.png"
          />
          <div className="absolute mt-2 flex h-[142px] items-center gap-5 rounded-xl bg-white px-4 py-3 opacity-0 shadow-lg group-hover:opacity-100">
            <a href="/productlist/onepiece">
              <img
                src="/images/home/icon-onepiece.png"
                alt="원피스"
                className="rounded-xl hover:bg-gray-100"
              />
              <p className="pt-2 text-center text-xs font-normal">one-piece</p>
            </a>
            <div className="h-16 w-[1px] bg-gray-200"></div>
            <a href="/productlist/fullbody">
              <img
                src="/images/home/icon-fullbody.png"
                alt="반전신"
                className="rounded-xl hover:bg-gray-100"
              />
              <p className="pt-2 text-center text-xs font-normal">full-body</p>
            </a>
          </div>
        </li>
        <li className="group text-3xl font-bold">
          <a href="/productlist" className="flex justify-center">MAN</a>
          <img
            className="invisible pr-6 group-hover:visible group-focus:visible pl-5"
            src="/public/images/productlist/underline-menu.png"
          />
          <div className="absolute mt-2 flex h-[142px] items-center gap-5 rounded-xl bg-white px-4 py-3 opacity-0 shadow-lg group-hover:opacity-100">
            <a href="/productlist/onepiece">
              <img
                src="/images/home/icon-midlength.png"
                alt="원피스"
                className="rounded-xl hover:bg-gray-100"
              />
              <p className="pt-2 text-center text-xs font-normal">mid-length</p>
            </a>
            <div className="h-16 w-[1px] bg-gray-200"></div>
            <a href="/productlist/fullbody">
              <img
                src="/images/home/icon-squarecut.png"
                alt="반전신"
                className="rounded-xl hover:bg-gray-100"
              />
              <p className="pt-2 text-center text-xs font-normal">square-cut</p>
            </a>
          </div>
        </li>
        <li className="group text-3xl font-bold">
          <a href="/productlist" className="flex justify-center">ACC</a>
          <img
            className="invisible pr-6 group-hover:visible group-focus:visible pl-5"
            src="/public/images/productlist/underline-menu.png"
          />
          <div className="absolute mt-2 flex h-[142px] items-center gap-5 rounded-xl bg-white px-4 py-3 opacity-0 shadow-lg group-hover:opacity-100">
            <a href="/productlist/onepiece">
              <img
                src="/images/home/icon-bag.png"
                alt="원피스"
                className="rounded-xl hover:bg-gray-100"
              />
              <p className="pt-2 text-center text-xs font-normal">bag</p>
            </a>
            <div className="h-16 w-[1px] bg-gray-200"></div>
            <a href="/productlist/fullbody">
              <img
                src="/images/home/icon-towel.png"
                alt="반전신"
                className="rounded-xl hover:bg-gray-100"
              />
              <p className="pt-2 text-center text-xs font-normal">towel</p>
            </a>
            <div className="h-16 w-[1px] bg-gray-200"></div>
            <a href="/productlist/fullbody">
              <img
                src="/images/home/icon-fin.png"
                alt="반전신"
                className="rounded-xl hover:bg-gray-100"
              />
              <p className="pt-2 text-center text-xs font-normal">fins</p>
            </a>
          </div>
        </li>
      </ul>
    </>
  );
}
