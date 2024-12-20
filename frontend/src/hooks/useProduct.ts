import { useEffect, useState } from "react";
import { getProducts } from "@/services/product";
import { useParams } from "react-router-dom";
import { Product } from "@/types/products";

function useProduct() {
  const { id } = useParams<{ id: string }>(); // id의 타입을 명시적으로 지정

  const [product, setProduct] = useState<Product>();

  const handleProductsfetch = async () => {
    if (!id) {
      console.error("Product ID is missing from the URL.");
      return;
    }

    try {
      const numericId = parseInt(id, 10); // string을 number로 변환
      if (isNaN(numericId)) {
        console.error("Invalid ID format.");
        return;
      }

      const fetchedProduct = await getProducts(numericId); // 변환된 숫자 사용
      setProduct(fetchedProduct);
    } catch (err) {
      console.error("Error fetching product:", err);
    }
  };

  useEffect(() => {
    handleProductsfetch();
  }, [id]);

  return { product };
}

export default useProduct;
