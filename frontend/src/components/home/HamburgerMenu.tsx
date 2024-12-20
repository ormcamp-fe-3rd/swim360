import { Category } from "@/types/categories";
import { Link } from "react-router-dom";

interface HamburgerMenuProps {
  isOpen: boolean;
  handleUIToggle: () => void;
  handleCurrentCategoryChange: (
    parentCategoryId: Category["parent_id"],
    categoryId: Category["id"],
  ) => void;
  getParentCategories: () => Category[];
  getFirstChildCategory: (parentCategoryId: Category["parent_id"]) => Category;
}

export default function HamburgerMenu({
  isOpen,
  handleUIToggle,
  getParentCategories,
  getFirstChildCategory,
  handleCurrentCategoryChange,
}: HamburgerMenuProps) {
  const parentCategories = getParentCategories();

  return (
    <div className="relative tablet:hidden">
      <button onClick={handleUIToggle}>
        <img
          className="h-6 w-6"
          src="/images/home/button-hamburger.png"
          alt="햄버거 메뉴"
        />
      </button>
      <div
        className={`${isOpen ? "block" : "hidden"} fixed inset-0 top-[190px] z-10 backdrop-brightness-50`}
        onClick={handleUIToggle}
      >
        <div className="h-full w-full">
          <ul className="flex h-[420px] flex-col items-center bg-white">
            {parentCategories.map((category) => {
              const firstChildCategory = getFirstChildCategory(category.id);
              return (
                <li
                  key={category.name}
                  onClick={() =>
                    handleCurrentCategoryChange(
                      category.id,
                      firstChildCategory.id,
                    )
                  }
                  className="flex h-1/4 w-full shadow-sm"
                >
                  <Link
                    to={"/product_list/" + firstChildCategory.name}
                    className="flex h-full w-full items-center justify-center font-semibold"
                  >
                    {category.name.toUpperCase()}
                  </Link>
                </li>
              );
            })}
            <li className="flex h-1/4 w-full shadow-sm">
              <Link
                to={"/mypage"}
                className="flex h-full w-full items-center justify-center font-semibold"
              >
                MY PAGE
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
