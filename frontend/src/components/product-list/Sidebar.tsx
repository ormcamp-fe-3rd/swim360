import { Category } from "@/types/categories";

interface SideBarProps {
  subCategories: Category[];
  handleCurrentCategoryChange: (
    parentCategoryId: Category["parent_id"],
    categoryId: Category["id"],
  ) => void;
  currentCategoryId: Category["id"];
}

function SideBar({
  subCategories,
  handleCurrentCategoryChange,
  currentCategoryId,
}: SideBarProps) {
  return (
    <div>
      <ul className="top-2 z-10 mb-8 mr-2 mt-10 flex justify-center gap-3 tablet:sticky tablet:flex-col tablet:justify-start">
        {subCategories.map((subCategory) => (
          <li
            key={subCategory.name}
            className="flex flex-col justify-center px-[36.5px] py-[10px]"
          >
            <button
              onClick={() =>
                handleCurrentCategoryChange(
                  subCategory.parent_id,
                  subCategory.id,
                )
              }
              className={
                "peer flex justify-center text-nowrap text-[26px] font-medium first:cursor-pointer hover:font-semibold focus:font-semibold " +
                `${subCategory.id === currentCategoryId ? "font-semibold" : "font-base"}`
              }
            >
              {subCategory.name}
            </button>
            <img
              className={
                "peer-hover:visible " +
                `${subCategory.id === currentCategoryId ? "visible" : "invisible"}`
              }
              src="/public/images/productlist/underline-menu.png"
            />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SideBar;
