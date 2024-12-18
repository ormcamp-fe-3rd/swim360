import ProductItemList from "@/components/product-list/ProductItemList";
import SideBar from "@/components/product-list/Sidebar";
import SortSelect from "@/components/product-list/SortSelect";
import useProduct from "@/hooks/useProduct";

function ProductListPage() {
  const { handleSortOptionChange, sortOption } = useProduct();

  const sortSelectProps = {
    handleSortOptionChange,
  };

  const productItemListProps = {
    sortOption,
  };

  return (
    <div className="p-4">
      <div className="flex flex-col justify-center tablet:flex-row">
        <SideBar />
        <div>
          <SortSelect {...sortSelectProps} />
          <ProductItemList {...productItemListProps} />
        </div>
      </div>
    </div>
  );
}

export default ProductListPage;
