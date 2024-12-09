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
    <ul>
      {sideMenuArray.map((sideMenu) => (
        <li key={sideMenu.name} className="px-[33px] py-[10px]">
          <button className="peer text-nowrap text-[26px] font-medium first:cursor-pointer hover:font-semibold focus:font-semibold">
            {sideMenu.name}
          </button>
          <img
            className="invisible pr-6 peer-hover:visible peer-focus:visible"
            src="/public/images/underline-menu.png"
          />
        </li>
      ))}
    </ul>
  );
}

export default SideBar;
