import { Category } from "@/types/categories";

interface SideBarProps {
  childCategories: Category[];
  handleCurrentCategoryChange: (
    parentCategoryId: Category["parent_id"],
    categoryId: Category["id"],
  ) => void;
  currentCategoryId: Category["id"];
}

function SideBar({
  childCategories,
  handleCurrentCategoryChange,
  currentCategoryId,
}: SideBarProps) {
  return (
    <ul className="top-2 mb-8 mr-2 mt-10 flex justify-center gap-3 tablet:sticky tablet:flex-col tablet:justify-start">
      {childCategories.map((childCategory) => (
        <li
          key={childCategory.name}
          className="flex flex-col justify-center px-[36.5px] py-[10px]"
        >
          <button
            onClick={() =>
              handleCurrentCategoryChange(
                childCategory.parent_id,
                childCategory.id,
              )
            }
            className={
              "peer flex justify-center text-nowrap text-[26px] font-medium first:cursor-pointer hover:font-semibold focus:font-semibold " +
              `${childCategory.id === currentCategoryId ? "font-semibold" : "font-base"}`
            }
          >
            {childCategory.name}
          </button>
          <img
            className={
              "peer-hover:visible " +
              `${childCategory.id === currentCategoryId ? "visible" : "invisible"}`
            }
            src="/public/images/productlist/underline-menu.png"
          />
        </li>
      ))}
    </ul>
  );
}

export default SideBar;
