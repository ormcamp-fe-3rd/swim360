import Loader from "@/components/common/Loader";
import ProductItemList from "@/components/product-list/ProductItemList";
import SideBar from "@/components/product-list/Sidebar";
import SortSelect from "@/components/product-list/SortSelect";
import useCategory from "@/hooks/useCategory";
import useProductList from "@/hooks/useProductList";

function ProductListPage() {
  const { childCategories, handleCurrentCategoryChange } =
    useCategory();

  const { handleSortOptionChange, sortedProducts } = useProductList();

  const sideBarProps = {
    childCategories,
    handleCurrentCategoryChange,
  };

  const sortSelectProps = {
    handleSortOptionChange,
  };

  const productItemListProps = {
    sortedProducts,
  };

  if (childCategories.length === 0) {
    return (
      <div className="flex w-full items-center justify-center">
        <Loader />
      </div>
    );
  }

  return (
    <div className="p-4">
      <div className="mx-auto flex w-[90%] max-w-[1440px] flex-col justify-center tablet:flex-row">
        <SideBar {...sideBarProps} />
        <div>
          <SortSelect {...sortSelectProps} />
          <ProductItemList {...productItemListProps} />
        </div>
      </div>
    </div>
  );
}

export default ProductListPage;
