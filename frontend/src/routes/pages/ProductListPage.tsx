import ProductItemList from "@/components/product-list/ProductItemList";
import SideBar from "@/components/product-list/Sidebar";
import SortSelect from "@/components/product-list/SortSelect";

function ProductListPage() {
  return (
    <div className="ml-20 mr-20">
      <SortSelect />
      <div className="flex">
        <SideBar />
        <ProductItemList />
      </div>
    </div>
  );
}

export default ProductListPage;
