import { CategoryContext } from "@/contexts/CategoryContext";
import { getCategories } from "@/services/category";
import { Category } from "@/types/categories";
import { useContext, useEffect } from "react";

function useCategory() {
  const categoryContext = useContext(CategoryContext);

  if (!categoryContext) {
    throw new Error("context는 Provider 내부에서만 작동해야합니다");
  }

  const {
    categories,
    currentParentCategoryId,
    setCurrentParentCategoryId,
    setCategories,
    currentCategoryId,
    setCurrentCategoryId,
  } = categoryContext;

  const handleCategoryFetch = async () => {
    try {
      const fetchedCategories = await getCategories();
      setCategories(fetchedCategories);
    } catch (err) {
      console.log(err);
    }
  };

  const handleCurrentCategoryChange = (
    parentCategoryId: Category["parent_id"],
    categoryId: Category["id"],
  ) => {
    setCurrentParentCategoryId(parentCategoryId);
    setCurrentCategoryId(categoryId);
  };

  useEffect(() => {
    handleCategoryFetch();
  }, []);

  return {
    categories,
    currentCategoryId,
    currentParentCategoryId,
    setCurrentParentCategoryId,
    handleCurrentCategoryChange,
  };
}

export default useCategory;
