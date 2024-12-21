import { CategoryContext } from "@/contexts/CategoryContext";
import { getCategories } from "@/services/category";
import { Category } from "@/types/categories";
import { useLocation } from "react-router-dom";
import { useContext, useEffect, useMemo } from "react";

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

  const location = useLocation();

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
    return categories.filter((category) => category.parent_id === null);
  }, [categories]);

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

  useEffect(() => {
    if (!location.pathname.includes("product_list")) {
      setCurrentParentCategoryId(null);
    }
  }, [location]);

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
