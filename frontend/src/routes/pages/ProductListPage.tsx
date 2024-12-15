import ProductItemList from "@/components/product-list/ProductItemList";
import SideBar from "@/components/product-list/Sidebar";
import SortSelect from "@/components/product-list/SortSelect";
import { SortOption } from "@/types/products";
import { useState } from "react";

function ProductListPage() {
  const [sortOption, setsortOption] = useState<SortOption>("latest");

  const onSortOptionChange = (sortOption: SortOption) => {
    setsortOption(sortOption);
  };

  const sortSelectProps = {
    onSortOptionChange,
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
