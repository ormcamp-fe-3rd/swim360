import ProductItemList from "@/components/product-list/ProductItemList";
import SideBar from "@/components/product-list/Sidebar";
import SortSelect from "@/components/product-list/SortSelect";
import useCategory from "@/hooks/useCategory";
import useProducts from "@/hooks/useProducts";

function ProductListPage() {
  const {
    getChildCategories,
    currentCategoryId,
    currentParentCategoryId,
    handleCurrentCategoryChange,
  } = useCategory();

  const { handleSortOptionChange, sortOption, sortedProducts } = useProducts();

  const sideBarProps = {
    childCategories: getChildCategories(currentParentCategoryId),
    handleCurrentCategoryChange,
    currentCategoryId,
  };

  const sortSelectProps = {
    handleSortOptionChange,
  };

  const productItemListProps = {
    sortedProducts: sortedProducts(sortOption),
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
