import ProductItemList from "@/components/product-list/ProductItemList";
import SideBar from "@/components/product-list/Sidebar";
import SortSelect from "@/components/product-list/SortSelect";
import useCategory from "@/hooks/useCategory";
import useProduct from "@/hooks/useProduct";

function ProductListPage() {
  const {
    categories,
    currentCategoryId,
    currentParentCategoryId,
    handleCurrentCategoryChange,
  } = useCategory();
  const { handleSortOptionChange, sortOption } = useProduct();

  const sideBarProps = {
    subCategories: categories.filter(
      (sub) => sub.parent_id === currentParentCategoryId,
    ),
    handleCurrentCategoryChange,
    currentCategoryId,
  };

  const sortSelectProps = {
    handleSortOptionChange,
  };

  const productItemListProps = {
    sortOption,
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
