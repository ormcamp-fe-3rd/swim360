import axios from "@/services/index.ts";

export async function getProduct(productId: number) {
  try {
    const response = await axios.get(`/products/${productId}`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
}

export async function getProductListData(categoryId: number) {
  try {
    const response = await axios.get(`/products/category/${categoryId}`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
}
