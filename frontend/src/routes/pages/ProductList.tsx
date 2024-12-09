import ProductItemList from "@/components/product-list/ProductItemList";
import SortSelect from "@/components/product-list/SortSelect";
import { Sidebar } from "lucide-react";

function ProductList() {
  return (
    <div className="ml-20 mr-20">
      <SortSelect />
      <div className="flex">
        <Sidebar />
        <ProductItemList />
      </div>
    </div>
  );
}

export default ProductList;
