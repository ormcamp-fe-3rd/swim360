import { CategoryContext } from "@/contexts/CategoryContext";
import { getProducts } from "@/services/product";
import { ProductItemData, SortOption } from "@/types/products";
import { useContext, useEffect, useState } from "react";

function useProduct() {
  const categoryContext = useContext(CategoryContext);

  if (!categoryContext) {
    throw new Error("context는 Provider 내부에서만 작동해야합니다");
  }

  const { currentCategoryId } = categoryContext;

  const [products, setProducts] = useState<ProductItemData[]>([]);

  const [sortOption, setsortOption] = useState<SortOption>("latest");

  const handleProductsfetch = async () => {
    try {
      const fetchedProducts = await getProducts(currentCategoryId);
      setProducts(fetchedProducts);
    } catch (err) {
      console.log(err);
    }
  };

  const handleSortOptionChange = (sortOption: SortOption) => {
    setsortOption(sortOption);
  };

  const sortFunctions = {
    latest: (products: ProductItemData[]) =>
      [...products].sort((a, b) => b.createdAt.localeCompare(a.createdAt)),

    sale: (products: ProductItemData[]) =>
      [...products].sort((a, b) => b.salesVolume - a.salesVolume),
    review: (products: ProductItemData[]) =>
      [...products].sort((a, b) => b.reviewCount - a.reviewCount),
  };

  const sortedProducts = (option: typeof sortOption) => {
    return sortFunctions[option](products);
  };

  useEffect(() => {
    handleProductsfetch();
  }, [currentCategoryId]);

  return { products, sortOption, handleSortOptionChange, sortedProducts };
}

export default useProduct;
