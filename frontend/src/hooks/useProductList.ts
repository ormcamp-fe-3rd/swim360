import { CategoryContext } from "@/contexts/CategoryContext";
import { getProductListData } from "@/services/product";
import { ProductItemData, SortOption } from "@/types/products";
import { useContext, useEffect, useMemo, useState } from "react";

function useProductList() {
  const categoryContext = useContext(CategoryContext);

  if (!categoryContext) {
    throw new Error("context는 Provider 내부에서만 작동해야합니다");
  }

  const { currentCategoryId } = categoryContext;

  const [productListData, setProductListData] = useState<ProductItemData[]>([]);
  const [sortOption, setSortOption] = useState<SortOption>("latest");

  const handleProductsfetch = async () => {
    try {
      const fetchedProductListData =
        await getProductListData(currentCategoryId);
      setProductListData(fetchedProductListData);
    } catch (err) {
      setProductListData([]);
    } finally {
    }
  };

  const handleSortOptionChange = (sortOption: SortOption) => {
    setSortOption(sortOption);
  };

  const sortFunctions = {
    latest: (productListData: ProductItemData[]) => {
      if (!productListData) return [];
      return [...productListData].sort((a, b) =>
        b.createdAt.localeCompare(a.createdAt),
      );
    },
    sale: (productListData: ProductItemData[]) => {
      if (!productListData) return [];
      return [...productListData].sort((a, b) => b.salesVolume - a.salesVolume);
    },
    review: (productListData: ProductItemData[]) => {
      if (!productListData) return [];
      return [...productListData].sort((a, b) => b.reviewCount - a.reviewCount);
    },
  };

  const sortedProducts = useMemo(() => {
    return sortFunctions[sortOption](productListData);
  }, [sortOption, productListData]);

  useEffect(() => {
    handleProductsfetch();
  }, [currentCategoryId]);

  return {
    productListData,
    handleSortOptionChange,
    sortedProducts,
  };
}

export default useProductList;
