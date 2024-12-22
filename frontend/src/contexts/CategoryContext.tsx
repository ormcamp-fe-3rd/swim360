import { Category } from "@/types/categories";
import { createContext, useState } from "react";

interface CategoryContextValue {
  categories: Category[];
  setCategories: React.Dispatch<React.SetStateAction<Category[]>>;
  currentParentCategoryId: Category["parent_id"];
  setCurrentParentCategoryId: React.Dispatch<
    React.SetStateAction<Category["parent_id"]>
  >;
  currentCategoryId: Category["id"];
  setCurrentCategoryId: React.Dispatch<React.SetStateAction<Category["id"]>>;
}

interface CategoryProviderProps {
  children: React.ReactNode;
}

export const CategoryContext = createContext<CategoryContextValue | undefined>(
  undefined,
);

function CategoryContextProvider({ children }: CategoryProviderProps) {
  const [categories, setCategories] = useState<Category[]>([]);
  const [currentParentCategoryId, setCurrentParentCategoryId] =
    useState<Category["parent_id"]>(null);
  const [currentCategoryId, setCurrentCategoryId] = useState<Category["id"]>(4);

  const CategoryContextValue = {
    categories,
    setCategories,
    currentParentCategoryId,
    setCurrentParentCategoryId,
    currentCategoryId,
    setCurrentCategoryId,
  };

  return (
    <CategoryContext.Provider value={CategoryContextValue}>
      {children}
    </CategoryContext.Provider>
  );
}

export default CategoryContextProvider;
