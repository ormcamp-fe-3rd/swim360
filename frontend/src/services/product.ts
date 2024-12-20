import axios from "@/services/index.ts";
import { Product } from "@/types/products";

export async function getProductById(productId: Product["id"]){
  try {
    const response = await axios.get(
      `/products/${productId}`,
    );
    return response.data;
  } catch (error) {
    console.log(error);
    return "";
  }
}


export async function getProducts(categoryId: number) {
  try {
    const response = await axios.get(`/products/${categoryId}`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
}