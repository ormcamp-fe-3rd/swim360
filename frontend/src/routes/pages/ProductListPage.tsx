import ProductItemList from "@/components/product-list/ProductItemList";
import SideBar from "@/components/product-list/Sidebar";
import SortSelect from "@/components/product-list/SortSelect";

function ProductListPage() {
  return (
    <div className="px-4 tablet:px-20">
      <div className="tablet:grid tablet:grid-cols-[0.1fr_0.9fr]">
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
