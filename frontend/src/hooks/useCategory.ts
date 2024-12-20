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

  const getParentCategories = () => {
    const parentCategories = categories.filter(
      (category) => category.parent_id === null,
    );
    return parentCategories;
  };

  const getFirstChildCategory = (parentCategoryId: Category["parent_id"]) => {
    return categories.find(
      (category) => category.parent_id === parentCategoryId,
    ) as Category;
  };

  const getChildCategories = (parentCategoryId: Category["parent_id"]) => {
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
    getParentCategories,
    getFirstChildCategory,
    getChildCategories,
  };
}

export default useCategory;
