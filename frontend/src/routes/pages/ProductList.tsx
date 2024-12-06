import ProductItem from "@/components/product-list/ProductItem";

function ProductList() {
  const productDummyArray = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16,
  ];

  const sideMenuArray = [
    {
      text: "one-piece",
    },
    {
      text: "full-body",
    },
  ];

  return (
    <div>
      <div className="ml-20 mr-20 flex">
        <ul>
          {sideMenuArray.map((sideMenu) => (
            <li key={sideMenu.text} className="px-[33px] py-[10px]">
              <button className="peer text-nowrap text-[26px] font-medium first:cursor-pointer hover:font-semibold focus:font-semibold">
                {sideMenu.text}
              </button>
              <img
                className="invisible peer-hover:visible peer-focus:visible"
                src="/public/images/underline-menu.png"
              />
            </li>
          ))}
        </ul>
        <div className="tablet:grid-cols-3 desktop:grid-cols-5 grid w-full grid-cols-1 gap-[19px]">
          {productDummyArray.map((product, i) => (
            <ProductItem key={i} /> // 데이터 불러오면 [product.id로]
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProductList;
