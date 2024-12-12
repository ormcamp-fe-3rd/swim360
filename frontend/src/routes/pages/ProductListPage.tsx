import ProductItemList from "@/components/product-list/ProductItemList";
import SideBar from "@/components/product-list/Sidebar";
import SortSelect from "@/components/product-list/SortSelect";

function ProductListPage() {
  return (
    <div className="p-4">
      <div className="flex flex-col tablet:flex-row">
        <SideBar />
        <div>
          <SortSelect />
          <ProductItemList />
        </div>
      </div>
    </div>
  );
}

export default ProductListPage;
