import categoriesData from "@/mocks/categories.json";
function SideBar() {
  const { categories } = categoriesData;

  return (
    <div className="">
      <ul className="top-2 z-10 mb-8 mr-2 mt-10 flex justify-center gap-3 tablet:sticky tablet:flex-col tablet:justify-start">
        {categories.map((category) => (
          <li
            key={category.name}
            className="flex flex-col justify-center px-[36.5px] py-[10px]"
          >
            <button className="peer flex justify-center text-nowrap text-[26px] font-medium first:cursor-pointer hover:font-semibold focus:font-semibold">
              {category.name}
            </button>
            <img
              className="invisible peer-hover:visible peer-focus:visible"
              src="/public/images/productlist/underline-menu.png"
            />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SideBar;
