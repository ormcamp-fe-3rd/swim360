import { useContext, useEffect, useMemo } from "react";

import { CategoryContext } from "@/contexts/CategoryContext";
import { getCategories } from "@/services/category";
import { Category } from "@/types/categories";

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

  const parentCategories = useMemo(() => {
    if (!categories) return [];
    return categories.filter((category) => category.parent_id === null);
  }, [categories]);

  const getFirstChildCategory = (parentCategoryId: Category["parent_id"]) => {
    if (!categories)
      return {
        id: 0,
        name: "no category",
        parent_id: null,
      } as Category;
    return categories.find(
      (category) => category.parent_id === parentCategoryId,
    ) as Category;
  };

  const getChildCategories = (parentCategoryId: Category["parent_id"]) => {
    if (!categories) return [];
    return categories.filter(
      (category) => category.parent_id === parentCategoryId,
    );
  };

  useEffect(() => {
    handleCategoryFetch();
  }, []);

  return {
    currentCategoryId,
    currentParentCategoryId,
    setCurrentParentCategoryId,
    handleCurrentCategoryChange,
    parentCategories,
    getFirstChildCategory,
    getChildCategories,
    childCategories: getChildCategories(currentParentCategoryId),
  };
}

export default useCategory;
