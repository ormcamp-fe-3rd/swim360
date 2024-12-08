import PrimaryButton from "@/components/common/PrimaryButton";
import ProductItem from "@/components/product-list/ProductItem";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

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
    <div className="ml-20 mr-20">
      <div className="flex flex-col items-end">
        <Select>
          <SelectTrigger className="mb-2 w-[123px] rounded-[10px] border-[#000000] border-opacity-30">
            <SelectValue placeholder="최신순" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="최신순">최신순</SelectItem>
            <SelectItem value="판매순">판매순</SelectItem>
            <SelectItem value="리뷰순">리뷰순</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className="flex">
        <ul>
          {sideMenuArray.map((sideMenu) => (
            <li key={sideMenu.text} className="px-[33px] py-[10px]">
              <button className="peer text-nowrap text-[26px] font-medium first:cursor-pointer hover:font-semibold focus:font-semibold">
                {sideMenu.text}
              </button>
              <img
                className="invisible mr-4 peer-hover:visible peer-focus:visible"
                src="/public/images/underline-menu.png"
              />
            </li>
          ))}
        </ul>
        <div className="grid w-full grid-cols-1 gap-[19px] tablet:grid-cols-3 desktop:grid-cols-5">
          {productDummyArray.map((product, i) => (
            <ProductItem key={i} /> // 데이터 불러오면 [product.id로]
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProductList;
