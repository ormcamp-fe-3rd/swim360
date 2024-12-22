import ProductItemList from "@/components/product-list/ProductItemList";
import SideBar from "@/components/product-list/Sidebar";
import SortSelect from "@/components/product-list/SortSelect";
import useCategory from "@/hooks/useCategory";
import useProductList from "@/hooks/useProductList";

function ProductListPage() {
  const { childCategories, currentCategoryId, handleCurrentCategoryChange } =
    useCategory();

  const { handleSortOptionChange, sortedProducts } = useProductList();

  const sideBarProps = {
    childCategories,
    handleCurrentCategoryChange,
    currentCategoryId,
  };

  const sortSelectProps = {
    handleSortOptionChange,
  };

  const productItemListProps = {
    sortedProducts,
  };

  return (
    <div className="p-4">
      <div className="flex flex-col justify-center tablet:flex-row">
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
