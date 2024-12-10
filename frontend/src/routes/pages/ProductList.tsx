import ProductItemList from "@/components/product-list/ProductItemList";
import SortSelect from "@/components/product-list/SortSelect";
import SideBar from "@/components/product-list/Sidebar";

function ProductList() {
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

export default ProductList;
