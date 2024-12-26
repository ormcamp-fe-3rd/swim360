import ProductItem from "@/components/product-list/ProductItem";

import { ProductItemData } from "@/types/products";

interface ProductItemListProps {
  sortedProducts: ProductItemData[];
}

function ProductItemList({ sortedProducts }: ProductItemListProps) {
  return (
    <div className="grid grid-cols-1 gap-[19px] tablet:grid-cols-4">
      {sortedProducts.map((product) => (
        <div key={product.id} className="max-h-[500px]">
          <ProductItem {...product} />
        </div>
      ))}
    </div>
  );
}

export default ProductItemList;
