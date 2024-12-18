import ProductItem from "@/components/product-list/ProductItem";
import useProduct from "@/hooks/useProduct";

// import productsData from "@/mocks/products.json";
import { SortOption } from "@/types/products";

interface ProductItemListProps {
  sortOption: SortOption;
}

function ProductItemList({ sortOption }: ProductItemListProps) {
  const { products, sortedProducts } = useProduct();

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
