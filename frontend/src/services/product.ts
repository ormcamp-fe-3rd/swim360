import axios from "@/services/index.ts";
import { AxiosError } from "axios";

export async function getProduct(productId: number) {
  try {
    const response = await axios.get(`/products/${productId}`);
    return response.data;
  } catch (error) {
    if (error instanceof AxiosError) {
      // Axios 에러인 경우
      if (error.response) {
        // 서버가 응답을 반환한 경우
        throw new Error(`상품 조회 실패: ${error.response.status}`);
      } else if (error.request) {
        // 요청은 보냈지만 응답을 받지 못한 경우
        throw new Error("서버로부터 응답이 없습니다");
      }
    }
    // 기타 에러
    throw new Error("상품을 불러오는데 실패했습니다");
  }
}

export async function getProductDetail(productId: number) {
  try {
    const response = await axios.get(`/products/detail/${productId}`);
    return response.data;
  } catch (error) {
    if (error instanceof AxiosError) {
      if (error.response) {
        throw new Error(`상품 상세 조회 실패: ${error.response.status}`);
      } else if (error.request) {
        throw new Error("서버로부터 응답이 없습니다");
      }
    }
    throw new Error("상품 상세 정보를 불러오는데 실패했습니다");
  }
}

export async function getProductListData(categoryId: number) {
  try {
    const response = await axios.get(`/products/category/${categoryId}`);
    return response.data;
  } catch (error) {
    if (error instanceof AxiosError) {
      if (error.response) {
        throw new Error(
          `카테고리별 상품 목록 조회 실패: ${error.response.status}`,
        );
      } else if (error.request) {
        throw new Error("서버로부터 응답이 없습니다");
      }
    }
    throw new Error("상품 목록을 불러오는데 실패했습니다");
  }
}


export async function getBestProducts(){
  try{
    const response = await axios.get('/products/bestProducts');
    return response.data;
  }catch(error){
    console.log(error);
  }
}