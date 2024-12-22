import { useEffect, useState } from "react";
import { getProductDetail } from "@/services/product";
import { useParams } from "react-router-dom";
import { ProductDetail } from "@/types/products";

function useProduct() {
  const { id } = useParams<{ id: string }>(); // id의 타입을 명시적으로 지정

  const [productDetail, setProductDetail] = useState<ProductDetail>();

  const handleProductDetailfetch = async () => {
    if (!id) {
      console.error("Product ID is missing from the URL.");
      return;
    }

    try {
      const numericProductId = parseInt(id, 10); // string을 number로 변환
      if (isNaN(numericProductId)) {
        console.error("Invalid ID format.");
        return;
      }

      // TODO: getProdcut -> getProductAndReview
      const fetchedProductDetail = await getProductDetail(numericProductId); // 변환된 숫자 사용
      setProductDetail(fetchedProductDetail);
      console.log(fetchedProductDetail);
    } catch (err) {
      console.error("Error fetching product:", err);
    }
  };

  useEffect(() => {
    handleProductDetailfetch();
  }, [id]);

  return { product: productDetail?.product, reviews: productDetail?.reviews };
}

export default useProduct;
