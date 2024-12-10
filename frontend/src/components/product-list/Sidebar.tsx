function SideBar() {
  //Category
  const sideMenuArray = [
    {
      id: 7,
      name: "one-piece",
      parentid: 0,
    },
    {
      id: 8,
      name: "full-body",
      parentid: 0,
    },
  ];

  return (
    <ul className="mb-8 mr-2 mt-10 flex justify-center gap-3 tablet:flex-col tablet:justify-start">
      {sideMenuArray.map((sideMenu) => (
        <li
          key={sideMenu.name}
          className="flex max-w-fit flex-col justify-center"
        >
          <button className="peer flex justify-center text-nowrap text-[26px] font-medium first:cursor-pointer hover:font-semibold focus:font-semibold">
            {sideMenu.name}
          </button>
          <img
            className="invisible peer-hover:visible peer-focus:visible"
            src="/public/images/productlist/underline-menu.png"
          />
        </li>
      ))}
    </ul>
  );
}

export default SideBar;
