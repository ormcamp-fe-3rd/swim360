import ProductItem from "@/components/product-list/ProductItem";

import { Link } from "react-router-dom";

import productsData from "@/mocks/products.json";
import { ProductItemData, ProductsData, SortOption } from "@/types/products";

interface ProductItemListProps {
  sortOption: SortOption;
}

function ProductItemList({ sortOption }: ProductItemListProps) {
  const { products } = productsData as ProductsData; // mock 데이터

  const sortFunctions = {
    latest: (products: ProductItemData[]) =>
      [...products].sort((a, b) => b.createdAt.localeCompare(a.createdAt)),

    sale: (products: ProductItemData[]) =>
      [...products].sort((a, b) => b.salesVolume - a.salesVolume),
    review: (products: ProductItemData[]) =>
      [...products].sort((a, b) => b.reviewCount - a.reviewCount),
  };

  const sortedProducts = (
    products: ProductItemData[],
    option: typeof sortOption,
  ) => {
    return sortFunctions[option](products);
  };

  return (
    <div className="grid grid-cols-1 gap-[19px] tablet:grid-cols-4">
      {sortedProducts(products, sortOption).map((product) => (
        <div key={product.id} className="max-h-[500px]">
          <ProductItem {...product} />
        </div>
      ))}
    </div>

  );
}

export default ProductItemList;
